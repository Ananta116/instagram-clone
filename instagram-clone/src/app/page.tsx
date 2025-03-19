"use client";

import { useState } from "react";
import Sidemenu from "./components/menu";
import InstagramStories from "./components/storie";
import InstagramPost from "./components/post";

export default function Home() {
  const [render, setRender] = useState<boolean>(true);

  const onReload = () => {
    setRender(!render);
  };
  return (
    <div className="flex">
      <Sidemenu />
      <div className="flex flex-col">
        <InstagramStories />
        <InstagramPost />
      </div>
    </div>
  );
}
