import * as React from 'react'
import { container, containerTitle, page, containerText, progressBar } from './layout.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {footerText} from "./layout.module.css"
// import {navTitle, placeholder, navbar, navItems} from "./layout.module.css"
// import {navButton} from "./layout.module.css"

const Layout = (props) => {
  return (
    <main class={page}>
      <title>{props.pageTitle}</title>
        {/* <div className={navbar}>
            <span className={navTitle}>VISVAM RAJESH</span>
            <span className={navItems}>
              <ul className={navItems}>
                <li className={navButton}>Games</li>
                <li className={navButton}>Projects</li>
                <li className={navButton}>blank</li>
              </ul>
            </span>
        </div> */}
        <div className={container}>
          <h1 className={containerTitle}>Hey, I'm Visvam</h1>
          <p className={containerText}>I'm Visvam, a 15 year old interested in computers. I will be studying AP Computer Science A in my 10th Grade. I also make games and do other technology related projects.</p>
        </div>
        <div className={container}>
          <h1 className={containerTitle}>Skills</h1>
          <p className={containerText}>Python, C++, Unity, Java, JavaScript</p>
          <div className={progressBar}>
            <ProgressBar style={{"margin-top" : "16px"}} variant="warning"now={80} label="Python" striped={true} animated={true}/>
          </div>
          <div className={progressBar}><ProgressBar variant="success"now={40} label="C++" striped={true} animated={true}/></div>
          <div className={progressBar}><ProgressBar variant="info"now={30} label="Unity" striped={true} animated={true}/></div>
          <div className={progressBar}><ProgressBar now={30} label="Java" striped={true} animated={true}/></div>
          
        </div>
        <div className={container}>
          <h1 className={containerTitle}>FRC Team 3637, "The Daleks"</h1>
          <p className={containerText}>I'm a programmer on the FIRST Robotics Competition Team 3637 "The Daleks". Last season we made it to district championships at Lehigh University!</p>
        </div>
        <div className={container}>
          <h1 className={containerTitle}>FTC Team 12601, "Robostorm"</h1>
          <p className={containerText}>insert robostorm stuff here</p>
        </div>
        <div className={container}>
          <h1 className={containerTitle}>Unity Games</h1>
          <p className={containerText}>buttons to unity games</p>
        </div>
        <div className={container}>
          <h1 className={containerTitle}>Congressional App Challenge 2020</h1>
          <p className={containerText}>description</p>
        </div>
        <footer>
          <h1 className={footerText}>made you look</h1>
        </footer>
    </main>
  )
}
export default Layout