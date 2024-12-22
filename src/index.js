import { createRoot } from "react-dom/client"
import App from './app'
import { BrowserRouter } from "react-router-dom"
import ContextProvider from "./Context/context"

const root = document.getElementById('root')

createRoot(root).render(
  <ContextProvider >
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </ContextProvider>
)