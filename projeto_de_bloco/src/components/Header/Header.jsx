import React from 'react'

import logoMobile from '../../assets/logo/MovieFlix_Mobile.png'
import logoDesktop from '../../assets/logo/MovieFlix.png'
import './Header styles/Header.scss'


function Header() {
  return (
    <div className='Odin'>
      <div className="paiDaLista">
        <img className='LogoImg' src={logoMobile} alt="Logo MovieFlix" />
        <img className='LogoImgDesktop' src={logoDesktop} alt="Logo MovieFlix" />
        <ul>
          <li>
            Livros
          </li>
          <li>
            Filmes
          </li>
          <li>
            Minha Lista
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Header