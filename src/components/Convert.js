//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM  //from Udemy
//AIzaSyCo3L_PsxnTrxt5xbbweuntCcoWME_gZvQ  //my

import React, { useState, useEffect } from "react";
import Translate from "./Translate";
import axios from "axios";
// do not forget about {language,text}
const Convert = ({ language, text }) => {
  //useEffect will be runnig if language and text will be changed
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const doTranstaltion = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranstaltion();
  }, [language, text]);

  return <h1>{translated}</h1>;
};

export default Convert;
