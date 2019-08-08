//Modules
import React from "react"
//Sass
import styles from "./Hero.module.scss"

const Hero = ({ image, children }) => {
  return (
    <section className={styles.HeroSection}>
      <div className={styles.Left}>{children}</div>

      <div className={styles.Right}>
        <div className={styles.ImageContainer} />
      </div>
    </section>
  )
}

export default Hero
