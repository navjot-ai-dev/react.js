import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Theme from './component/theme.jsx'

createRoot(document.getElementById('root')).render(
   
     <Theme>
      <BrowserRouter>
      <App />
    </BrowserRouter>

     </Theme>
)
