"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownload } from "./action";

function App() {
  const [url, setUrl] = useState();

  const [show, setShow] = useState(false);

  const { data, error, status } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleProcess = () => {
    dispatch(getDownload({ url }));
    if (typeof data === "object") {
      setShow(true);
      console.log(url);
    }
  };

  const handleDownload = () => {
    if (typeof data === "object") {
      const downloadLink = document.createElement("a");
      downloadLink.href = data.media;
      downloadLink.download = "reel.mp4";
      downloadLink.click();
    }
  };

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>
        Instagram Video <span className="colorSpan">Downloader</span>
      </h1>
      <div className="inputSection">
        <input
          className="inputUrl"
          placeholder="Enter video url"
          type="text"
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        {show ? "" : <button onClick={handleProcess}>Process Video</button>}
        {show && (
          <button className="downloadButton" onClick={handleDownload}>
            Download Video
          </button>
        )}
      </div>
    </>
  );
}

export default App;
