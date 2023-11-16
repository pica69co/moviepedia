import React, { useEffect, useState, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleColorMode";
// const alanKey =
//  "e9ad67c3f3856e05f786c5a319c0547e2e956eca572e1d8b807a3e2338fdd0dc/stage";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: "b50bb8e240149143f786c5a319c0547e2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode }) => {
        if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        }
      },
    });
  }, []);
};

export default useAlan;
