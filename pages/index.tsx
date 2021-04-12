import { Button } from "@components/button/Button";
import { react as HomeContent } from "@content/home.md";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeContent />

      <Button label="donger" color="green" />
    </div>
  );
}
