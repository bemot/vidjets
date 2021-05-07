//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM  //from Udemy

import React, { useState, useEffect } from "react";
import Translate from "./Translate";
import axios from "axios";
// do not forget about {language,text}
// you may have several useEffect function, no problem
const Convert = ({ language, text }) => {
  //useEffect will be runnig if language and text will be changed
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 700);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranstaltion = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranstaltion();
  }, [language, debouncedText]);

  return <h1>{translated}</h1>;
};

export default Convert;
