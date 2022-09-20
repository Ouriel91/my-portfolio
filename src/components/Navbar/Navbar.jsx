import {useState} from 'react'
import './Navbar.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import {images} from '../../constants'


function Navbar() {
  const [toggle, setToggle] = useState(false)

  const navItems = ['home', 'about', 'work', 'skills', 'contact']
  const renderNavItemsNav = navItems.map(item => 
  <li key={`${item}-nav`} className="app__flex p-text">
    <div />
    <a href={`#${item}`}>{item}</a>
  </li>)
  
  const renderNavItemsMenu = navItems.map(item => 
    <li key={`${item}-menu`}>
      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
    </li>)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.ouriel} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {renderNavItemsNav}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)}/>
        {toggle && (
          <motion.div
            whileInView={{x: [300,0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}>
            <HiX onClick={() => setToggle(false)}/>
            <ul>
              {renderNavItemsMenu}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar