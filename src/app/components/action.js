import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDownload = createAsyncThunk(
  "/post/getdownload",
  async ({ url }) => {
    const options = {
      method: "GET",
      url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
      params: {
        //   url: "https://www.instagram.com/reel/CxgAOUUR8R6/",
        url,
      },
      headers: {
        "X-RapidAPI-Key": "c1fd179e92mshf677d828559a3aep1a9fb9jsn19dac2ef030b",
        "X-RapidAPI-Host":
          "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
