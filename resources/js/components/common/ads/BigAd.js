import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../api/useFetch";

const BigAd = () => {
  const { data: adItem } = useFetch(
    "http://radio3.softnep.com/api/api-getBigyapanData"
  );
  return (
    <>
      {adItem?.inner_jacket?.map((a) => (
        <Link key={a.id} to={a.url} target={a.target} title={a.title}>
          <img src={a.banner} alt={a.title} />
        </Link>
      ))}
    </>
  );
};

export default BigAd;
