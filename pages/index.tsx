import { react as HomeContent } from "@content/home.md";
import { HomeTitleDecorator } from "@decorators/HomeTitleDecorator";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeContent Title={HomeTitleDecorator} />
    </div>
  );
}
