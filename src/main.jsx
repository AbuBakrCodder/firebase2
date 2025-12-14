import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import GlobalContext from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <GlobalContext>
      <App />
    </GlobalContext>
    <Toaster position="top-center" />
  </>
)
