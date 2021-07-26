<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="{{ asset('favicon.png') }}" />
    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="{{ asset('favicon.png') }}" />
    <link rel="manifest" href="{{ asset('manifest.json') }}" />
    <title>SoftNEP Radio3 Design</title>
</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
        integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous">
    </script>
    <script type="text/javascript" src="{{ asset('/js/app.js') }}" defer ></script>
    <script type="text/javascript" src="{{ asset('/js/lightgallery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/mediaelement.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/apps.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/moment.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/bootstrap-datepicker.js') }}"></script>

    <script type="text/javascript">
        $('#photo-gallery').lightGallery({
            pager: true,
            share: false,
            download: false,
            autoplayControls: false,
            fullScreen: false,
            zoom: false,
            scale: false
        });
        $(".modalbox")
        setTimeout(function() {
            $(".modalbox").fadeOut("slow");
        }, 5000);


        $(document).ready(function() {



            // image overlapped  for big images on editor
            $('.detail-box .editor-box').find('img').each(function() {
                var imageWidth = jQuery(this).width();
                //console.log(imageWidth);
                //alert(this.width + " by " + this.height);
                if (imageWidth > 500) {
                    jQuery(this).addClass('pulls-img-left');
                }
                if (imageWidth < 500) {

                    jQuery(this).parent("figure").width(jQuery(this).width());

                }
            });
        });
    </script>

    <script type="text/javascript">
        $('#from-date, #to-date').datepicker({
            format: 'yyyy/mm/dd',
            autoclose: true
        })
    </script>

    <script src="js/waypoints.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        // poll bar animation

        $('.bar').width('0%');
        $('.bar').waypoint(function() {
            $('.bar').each(function() {
                var width = $(this).data("percentage");
                $(this).animate({
                    width: width
                }, {
                    duration: 2000,
                    //easing: 'easeOutExpo',
                });
            });
        }, {
            offset: '100%'
        });
    </script>
    <script type="text/javascript">
        var
            sourcesSelector = document.body.querySelectorAll('select'),
            sourcesTotal = sourcesSelector.length;

        for (var i = 0; i < sourcesTotal; i++) {
            sourcesSelector[i].addEventListener('change', function(e) {
                var
                    media = e.target.closest('.media-container').querySelector('.mejs__container').id,
                    player = mejs.players[media];

                player.setSrc(e.target.value.replace('&amp;', '&'));
                player.setPoster('');
                player.load();

            });

            // These media types cannot play at all on iOS, so disabling them
            if (mejs.Features.isiOS) {
                sourcesSelector[i].querySelector('option[value^="rtmp"]').disabled = true;
                if (sourcesSelector[i].querySelector('option[value$="webm"]')) {
                    sourcesSelector[i].querySelector('option[value$="webm"]').disabled = true;
                }
                if (sourcesSelector[i].querySelector('option[value$=".mpd"]')) {
                    sourcesSelector[i].querySelector('option[value$=".mpd"]').disabled = true;
                }
                if (sourcesSelector[i].querySelector('option[value$=".ogg"]')) {
                    sourcesSelector[i].querySelector('option[value$=".ogg"]').disabled = true;
                }
                if (sourcesSelector[i].querySelector('option[value$=".flv"]')) {
                    sourcesSelector[i].querySelector('option[value*=".flv"]').disabled = true;
                }
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            var mediaElements = document.querySelectorAll('video, audio'),
                total = mediaElements.length;

            for (var i = 0; i < total; i++) {
                new MediaElementPlayer(mediaElements[i], {
                    pluginPath: 'dist/',
                    success: function() {
                        var target = document.body.querySelectorAll('.player'),
                            targetTotal = target.length;
                        for (var j = 0; j < targetTotal; j++) {
                            target[j].style.visibility = 'visible';
                        }
                    }
                });
            }
        });
    </script>

    <script type="text/javascript">
        // media element

        $(window).bind("load", function() {
            $("div.mejs__button.mejs__playpause-button.mejs__play > button").trigger('click');
        });
    </script>

    <script type='text/javascript'
        src='//platform-api.sharethis.com/js/sharethis.js#property=5905c1c326d2ca00114f4d5b&product=inline-share-buttons'
        async='async'></script>
    <div id="fb-root"></div>
    <script>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>



    <script src="https://apis.google.com/js/platform.js"></script>


</body>


</html>
