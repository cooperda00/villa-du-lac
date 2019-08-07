//Modules
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
// import Slide from "react-reveal/Slide"
//Sass
import styles from "./Navigation.module.scss"
//Constants
import { links } from "../../../../constants/links"
// import { servicesMenu } from "../../../../constants/servicesMenu"
// import { complianceMenu } from "../../../../constants/complianceMenu"
//Icon
// import { FaBars } from "react-icons/fa"

const Navigation = ({ location }) => {
  // const [menu, toggleMenu] = useState(false)
  // const [active, setActive] = useState("")

  // useEffect(() => {
  //   if (location) {
  //     setActive(location.state.active)
  //   } else {
  //     setActive("")
  //   }
  // }, [])

  return (
    <nav className={styles.Navigation}>
      <div className={styles.Links}>
        {links.map(({ path, text }) => {
          // const linkStyle =
          //   text === "Contact Us" ? styles.ContactBtn : undefined

          return (
            <div
              className={styles.MenuItemWrapper}
              style={{ position: "relative" }}
              key={text}
            >
              <Link
                to={path}
                // activeClassName={
                //   text === "Contact Us" ? "active-contact" : "active-route"
                // }
                // className={
                //   active === text
                //     ? `${linkStyle} ${activeClass} ${styles.MenuItemLink}`
                //     : `${linkStyle} ${styles.MenuItemLink}`
                // }
                className={styles.MenuItemLink}
              >
                {text}
              </Link>
            </div>
          )
        })}
      </div>
      {/* 
      <button
        className={styles.HamburgerMenu}
        onClick={() => {
          toggleMenu(!menu)
        }}
      >
        <FaBars />
      </button> */}

      {/* <Slide right when={menu}>
        <div className={styles.MiniMenu}>
          {links.map(({ path, text }) => (
            <Link to={path} key={text} tabIndex="-1">
              {menu && text}
            </Link>
          ))}
          <Link to="/location" tabIndex="-1">
            Location
          </Link>
        </div>
      </Slide> */}
    </nav>
  )
}

export default Navigation
