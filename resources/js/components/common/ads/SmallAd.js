import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../api/useFetch";

const SmallAd = () => {
  const { data: adItem } = useFetch(
    "http://radio3.softnep.com/api/api-getBigyapanData"
  );
  return (
    <>
      {adItem?.nav?.map((a) => (
        <Link key={a.id} to={a.url} target={a.target} title={a.title}>
          <img src={a.banner} alt={a.title} />
        </Link>
      ))}
    </>
  );
};

export default SmallAd;
