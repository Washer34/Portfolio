import { createContext, useState, useEffect } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import ThemeContext from './theme/themecontext'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LangContext from './lang/langcontext'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


function App() {
  const storedTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(storedTheme)

  const storedLang = localStorage.getItem('lang') || 'fr';
  const [lang, setLang] = useState(storedLang)
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'fr' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang)
    i18n.changeLanguage(newLang)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
    });
    i18n.changeLanguage(storedLang)
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, toggleLang }}>
        <div className="App" id={theme}>
          <Sidenav />
          <Main />
          <Aboutme />
          <Projects />
          <Contact />
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
