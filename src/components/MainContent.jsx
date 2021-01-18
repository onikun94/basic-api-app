import React, { useState, useEffect } from "react";
import { fetchImage } from "./Api";
import Form from "./Form";
import Gallery from "./Gallery";

function MainContent() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImage("shiba").then((urls) => {
      setUrls(urls);
    });
  }, []);

  const reloadImages = (breed) => {
    fetchImage(breed).then((urls) => {
      setUrls(urls);
    });
  };
  return (
    <div>
      <main>
        <section className="section">
          <div className="container">
            <Form onFormSubmit={reloadImages} />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Gallery urls={urls} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainContent;
