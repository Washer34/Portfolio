import { createContext, useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import ThemeContext from './theme/themecontext'

function App() {
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme)
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Sidenav />
        <Main />
        <Aboutme />
        <Projects />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
