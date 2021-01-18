import React from "react";
import Card from "./Card";
import Loading from "./Loading";

function Gallery(props) {
  const urls = props.urls;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Card src={url} />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
