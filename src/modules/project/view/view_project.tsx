import React from "react";

import Home from "../components/home";
import Category from "../components/category";
import Trending from "../components/trending";
import Footer from "../components/footer";
import { MobileNavbar } from "@/modules/_global/front/view/view_layout";

export default function ViewProject() {
  return (
    <>
      <MobileNavbar>
        <Home />
        <Category />
        <Trending />
        <Footer />
      </MobileNavbar>
    </>
  );
}
