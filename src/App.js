import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React ist front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is favorite JS library among engineers",
  },
  {
    title: "How go you use React?",
    content: "With big difficulties and joy having troubles always",
  },
];

const options = [
  {
    label: "The red color",
    value: "red",
  },
  {
    label: "The green color",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
