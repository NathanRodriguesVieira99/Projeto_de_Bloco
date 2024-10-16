import React from 'react'

import logoMobile from '../../assets/logo/MovieFlix_Mobile.png'
import logoDesktop from '../../assets/logo/MovieFlix.png'
// import MenuBurguer from './MenuBurguer/MenuBurguer'

import './Header styles/_Header.scss'

window.addEventListener('scroll', function () {
  const scrollSection = document.getElementById('scrollSection');

  if (window.scrollY > 0) {
    scrollSection.classList.add('scrolled');
  } else {
    scrollSection.classList.remove('scrolled');
  }
});


function Header() {
  return (
    <div className='Odin'>
      <div className="scroll-section" id="scrollSection"></div>
      <div className="paiDaLista">
        <img className='LogoImg' src={logoMobile} alt="Logo MovieFlix" />
        <img className='LogoImgDesktop' src={logoDesktop} alt="Logo MovieFlix" />
        <ul>
          <li>
            Séries
          </li>
          <li>
            Filmes
          </li>
          <li>
            Minha Lista
          </li>
        </ul>
        {/* <MenuBurguer /> */}
      </div>
    </div>

  )
}

export default Header