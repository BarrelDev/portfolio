import * as React from 'react'
import { container, containerTitle, page, containerText } from './layout.module.css'
import {navbar, navItems, footerText} from "./layout.module.css"
import {navTitle, placeholder} from "./layout.module.css"
import {navButton} from "./layout.module.css"

const Layout = (props) => {
  return (
    <main class={page}>
      <title>{props.pageTitle}</title>
        <div className={navbar}>
            <span className={navTitle}>VISVAM RAJESH</span>
            <span className={navItems}>
              <ul className={navItems}>
                <li className={navButton}>Games</li>
                <li className={navButton}>Projects</li>
                <li className={navButton}>blank</li>
              </ul>
            </span>
        </div>
        <div className={container}>
          <h1 className={containerTitle}>Student, Coder, GameDev</h1>
        </div>
        <div className={container}>
          <h1 className={containerTitle}>Hey, I'm Visvam</h1>
          <p className={containerText}>I'm Visvam, a 14 year old interested in computers. I will be studying AP Computer Science Principles in my 9th Grade. I also make games and do other technology related projects.</p>
        </div>
        <p>s</p>
        <footer>
          <h1 className={footerText}>made you look</h1>
        </footer>
    </main>
  )
}
export default Layout