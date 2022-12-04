import React from "react";
import "./home.scss";
import { Navbar } from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { LinkToPages } from "../../components/linkToPages/LinkToPages";

export const Home = () => {
  return (
    <div className="home">
      <LinkToPages />
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};
