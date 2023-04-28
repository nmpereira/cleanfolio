import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CV from './components/Cv/Cv'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

render(
  <ThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/cv' element={<CV />} />
    </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
