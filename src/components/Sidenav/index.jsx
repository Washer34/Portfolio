import React, { useState, useContext } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { BsPerson, BsMoonStars, BsSun } from 'react-icons/bs'
import ThemeContext from '../../theme/themecontext'
import LangContext from '../../lang/langcontext';
import ReactCountryFlag from "react-country-flag"

const Sidenav = () => {
  const mode = useContext(ThemeContext)
  const lang = useContext(LangContext)
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleToggleLanguage = () => {
    lang.toggleLang();
    setNav(!nav)
  };

  const toggleLanguage = () => {
    lang.toggleLang();
  };


  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='nav-burger md:hidden' />
      {
        nav ? (
          <div className="nav-menu">
            <a aria-label='Accueil' onClick={handleNav}
              href="#main" className="nav-link">
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a aria-label='A propos de moi' onClick={handleNav}
              href="#aboutme" className="nav-link">
              <BsPerson size={20} />
              <span className="pl-4">About me</span>
            </a>
            <a aria-label='Les projets' onClick={handleNav}
              href="#projects" className="nav-link">
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a aria-label='Contactez-moi' onClick={handleNav}
              href="#contact" className="nav-link">
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </a>
            {mode.theme === 'light' ? (
              <a aria-label='Mode sombre' onClick={mode.toggleTheme}
                className="nav-link">
                <BsMoonStars size={20} />
                <span className="pl-4">Dark mode</span>
              </a>
            ) : (
              <a aria-label='Mode lumineux' onClick={mode.toggleTheme}
                className="nav-link">
                <BsSun size={20} />
                <span className="pl-4">Light mode</span>
              </a>
            )
            }
            {lang.lang === 'fr' ? (
              <a aria-label='Changer la langue' onClick={handleToggleLanguage}
                className="nav-link">
                <ReactCountryFlag
                  countryCode="FR"
                  svg
                  title="FR" />
                <span className="pl-4">Langue</span>
              </a>
            ) : (
              <a aria-label='Switch language' onClick={handleToggleLanguage}
                className="nav-link">
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  title="GB" />
                <span className="pl-4">Language</span>
              </a>
            )}
          </div>
        )
          : (
            ''
          )
      }

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a aria-label='Accueil' href="#main" className='side-link'>
            <AiOutlineHome size={20} />
          </a>
          <a aria-label='A propos de moi' href="#aboutme" className='side-link'>
            <BsPerson size={20} />
          </a>
          <a aria-label='mes Projets' href="#projects" className='side-link'>
            <AiOutlineProject size={20} />
          </a>
          <a aria-label='Contactez-moi' href="#contact" className='side-link'>
            <AiOutlineMail size={20} />
          </a>{mode.theme === 'light' ? (
            <button
              aria-label='Mode Sombre'
              onClick={mode.toggleTheme}
              className='side-link'
            >
              <BsMoonStars size={20} />
            </button>
          ) : (
            <button
              aria-label='Mode Lumineux'
              onClick={mode.toggleTheme}
              className='side-link'
            >
              <BsSun size={20} />
            </button>
          )}

          {lang.lang === 'fr' ? (
            <button
              aria-label='Langue'
              onClick={toggleLanguage}
              className="nav-lang-link"
            >
              <ReactCountryFlag
                countryCode="FR"
                svg
                title="FR"
              />
            </button>
          ) : (
            <button
              aria-label='Language'
              onClick={toggleLanguage}
              className="nav-lang-link"
            >
              <ReactCountryFlag
                countryCode="GB"
                svg
                title="GB"
              />
            </button>
          )}
        </div>
      </div>


    </div>
  )
}

export default Sidenav