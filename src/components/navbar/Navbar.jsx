'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Produs",
    url: "/product",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src="/logo.png" alt="Club Mate" width={120} height={120} />
        <h1 className={styles.logo2} >Club Mate Romania</h1>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
        className={styles.logout}
          onClick={() => {
            console.log("Logged Out");
          }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
