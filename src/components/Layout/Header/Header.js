//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Header.module.scss"
//Constants
import { links } from "../../../constants/links"
//Components
import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo />

      {/* <nav>
        {links.map(({ path, text }) => (
          <Link to={path}>{text}</Link>
        ))}
      </nav> */}

      <div className={styles.Menu}>
        <Social />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
