import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© Ilie Honciuc. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src='/linkedin-logo.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='linkedin'
        />
        <Image
          src='/instagram.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='instagram'
        />
      </div>
    </div>
  );
};

export default Footer;
