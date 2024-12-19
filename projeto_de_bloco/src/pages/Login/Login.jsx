import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import logoMobile from '../../assets/logo/MovieFlix_Mobile.png';
import Background from '../../components/Background'; 

function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    navigate('home'); 
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Background imageUrl="../../assets/logo/plano_fundo.png">
      <div style={styles.background}>

        <img src={logoMobile} alt="MovieFlix Logo" style={styles.logo} />

        <form onSubmit={handleLogin} style={styles.formContainer}>
          <div style={styles.inputContainer}>
            <label htmlFor="usuario" style={styles.label}>Usuário</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              style={styles.input}
              placeholder="Digite seu usuário"
            />
          </div>

          <div style={styles.inputContainer}>
            <label htmlFor="senha" style={styles.label}>Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={styles.input}
              placeholder="Digite sua senha"
            />
            <button style={styles.esqueceu} aria-label="Esqueceu seu Usuário ou senha?">
              Esqueceu seu Usuário ou senha?
            </button>
          </div>

          <button type="submit" style={styles.loginButton}>
            Entrar
          </button>
        </form>

        {/* Login com Google */}
        <div style={styles.socialContainer}>
          <button style={styles.googleButton}>
            <FcGoogle size={24} />
            <span>Entrar com o Google</span>
          </button>
          <button style={styles.cadastro} aria-label="Cadastre-se">
            Novo por aqui? Cadastre-se
          </button>
        </div>
      </div>
    </Background>
  );
}

const styles = {
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
    backgroundImage: `url('/caminho/para/a/sua/imagem.jpg')`, // Caminho da imagem de fundo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 0,
    padding: 0,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  formContainer: {
    width: 332,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 400,
    color: '#FFF',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#000',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 16,
    border: 'none',
    borderRadius: 5,
    paddingLeft: 10,
  },
  esqueceu: {
    marginTop: 10,
    background: 'none',
    border: 'none',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 14,
    textAlign: 'left',
    cursor: 'pointer',
  },
  loginButton: {
    width: 332,
    height: 50,
    backgroundColor: '#B11A1A',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 600,
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    marginTop: 30,
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    width: '100%',
    paddingLeft: 38,
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    background: '#000',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
    padding: 10,
    width: 'fit-content',
  },
  cadastro: {
    background: 'none',
    border: 'none',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 14,
    cursor: 'pointer',
    textAlign: 'left',
    paddingLeft: 12,
  },
};

export default Login;
