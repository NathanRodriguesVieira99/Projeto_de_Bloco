import { Outlet } from "react-router-dom"

import './styles/global/global.scss'

function App() {

  return (
    <Outlet /> // exibe todas as rotas filhas (Home e Login)
  )
}

export default App
