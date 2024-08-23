import Link from "next/link";
import React from "react";

const Nav = () => {
  let navLinks = [
    { name: "Home", link: "/" },
    { name: "Locations", link: "/#locations" },
    { name: "Lodging", link: "/#lodging" },
    { name: "Food", link: "/#food" },
    { name: "FAQs", link: "/#faqs" },
  ];
  return <nav className="flex justify-around sticky top-0 bg-black z-10">{navLinks.map((x,i)=>(
    <Link key={i} href={x.link} className="text-3xl text-white hover:text-red-500">{x.name}</Link>
  ))}</nav>;
};

export default Nav;
