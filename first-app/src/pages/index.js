// import * as React from 'react';
import Link from "next/link";
import dashboard from "@/styles/Dashboard.module.css";

const index = () => {
  return (
    <>
      <nav className={dashboard.menu}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
      <h1>This my index world11</h1>
    </>
  );
};

export default index;
