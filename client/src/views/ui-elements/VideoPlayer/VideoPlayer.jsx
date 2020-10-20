import React, { useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player/lazy";
import { Redirect, withRouter } from "react-router";

import { toggleFullScreen } from "./ToggleFullScreen";

import style from "./VideoPlayer.module.css";

function VideoPlayer({ url, playVideo, hideVideo, showPlayer }) {
  const toggleFullScreenHandler = () => {
    toggleFullScreen();
  };

  useEffect(() => {
    toggleFullScreenHandler();
  }, []);

  if (!showPlayer) {
    showPlayer = playVideo;
  }

  return (
    <div>
      <ReactPlayer
        loop={false}
        url={url && url}
        playing={playVideo}
        controls={false}
        height={"100%"}
        width={"100%"}
        className={style.VideoPlayer}
        style={{ display: showPlayer && showPlayer ? "block" : "none" }}
        onEnded={() => {
          hideVideo();
          toggleFullScreenHandler();
        }}
      />
    </div>
  );
}

export default withRouter(VideoPlayer);
