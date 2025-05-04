import React from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Lcc from "../Home/Lcc";
import IEEE from "../Home/IEEE";
import GdSC from "../Home/GdSC";
import Creator from "../Home/Creator";

function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <Devotional />
      <Lcc />
      <IEEE />
      <GdSC />
      <Creator />
    </div>
  );
}

export default Home;
