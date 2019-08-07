//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./Hero.module.scss"

const Hero = ({ image, children }) => {
  return (
    <section className={styles.HeroSection}>
      <div className={styles.Left}>{children}</div>

      <div className={styles.Right}>
        <div className={styles.ImageContainer}>
          <Image
            critical
            fadeIn={false}
            fluid={image}
            className={styles.Hero}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
