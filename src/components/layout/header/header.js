import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaTwitter, FaBars, FaTimes, FaGithub, FaLinkedin, FaRss } from 'react-icons/fa'
/* App imports */
import useEvent from '../../hooks/useEvent'
import style from './header.module.less'
import Config from '../../../../config'
import Utils from '../../../utils'
const logo = require('../../../images/icon.png')

const Header = () => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(false)
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(false)

  function toggleFixedHeader() {
    if (!isHeaderCollapsed && window.scrollY > 100) {
      setHeaderCollapsed(true)
    } else if (isHeaderCollapsed && window.scrollY < 100) {
      setHeaderCollapsed(false)
    }
  }

  function toggleMenu() {
    setMenuCollapsed(!isMenuCollapsed)
  }

  useEvent('scroll', toggleFixedHeader)

  return (
    <div
      className={style.container}
      style={isHeaderCollapsed ? { backgroundImage: 'none' } : null}
    >
      <div className={style.titleContainer}>
        <div className={style.logo}>
          <img src={logo} />
        </div>
        <div className={style.title}>
          <Link to={Utils.resolvePageUrl(Config.pages.home)}>
            <h4>{Config.siteTitle}</h4>
          </Link>
        </div>
        <div className={style.menuButton}>
          {isMenuCollapsed ? (
            <FaBars size="30" onClick={toggleMenu} />
          ) : (
            <FaTimes size="30" onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div
        className={[
          style.list,
          isMenuCollapsed ? style.collapsedMenu : style.expandedMenu,
        ].join(' ')}
      >
        <ul>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.home)}>Home</Link>
          </li>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.smartcity)}>Smart City</Link>
          </li>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.smarthome)}>Smart Home</Link>
          </li>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.tag)}>Tags</Link>
          </li>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.about)}>About</Link>
          </li>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.contact)}>Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.facebook}
            >
              <FaFacebookSquare size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.linkedin}
            >
              <FaLinkedin size="30" />
            </a>
          </li>
          <li>
            <Link to={Utils.resolveUrl(Config.social.twitter)}>
              <FaTwitter size="30" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
