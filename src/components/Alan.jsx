import React, { useEffect, useState, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleColorMode";
const alanKey = process.env.REACT_APP_ALAN_MOVIEPEDIA_KEY;
console.log(alanKey);
const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: alanKey,
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
