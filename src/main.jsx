import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Redux/store.js'

createRoot(document.getElementById('root')).render(
<StrictMode>

  <Provider store={Store}> {/* Provider component makes sure 'store' prop we are passing accessible every where in application*/}

    <App />

  </Provider>

 </StrictMode>,
)
