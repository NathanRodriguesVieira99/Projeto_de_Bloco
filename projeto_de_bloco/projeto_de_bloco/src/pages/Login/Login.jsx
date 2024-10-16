import { useNavigate } from "react-router-dom"

// isaac vai trabalhar aqui

import './_Login.scss'

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('clicou para logar');   // função pra logar e ir pra página inicial, só descomentar e usar quando precisar
    return navigate('home')
  }

  return (
    <div>
      <h1>TELA DE LOGIN</h1>
      <button onClick={handleLogin}>LOGAR</button>
      {/*  chame esse onClick no botão de login que vc fizer, qualquer coisa me chama ass: nathan */}
    </div>
  )
}

export default Login