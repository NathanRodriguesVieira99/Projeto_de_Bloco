// import React, { useState } from 'react';

// import { IoMdNotificationsOutline } from "react-icons/io";


// import './_MenuBurguer.scss';

// import ListaPC from '../../Header/ListaPC/ListaPC';

// function MenuBurguer() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false)
//   }

//   return (
//     <div className='burger-menu' >
//       <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
//         <div className="line"> </div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>

//       <nav className={`menu ${isOpen ? 'visible' : ''}`}>
//         <ul>
        
//           <li><a href="#"><IoMdNotificationsOutline /></a></li>
          
//         </ul>
//       </nav>

//       {isOpen && <div className='overlay' onClick={toggleMenu} />}
//       <div className="lista-container">
//         <ListaPC closeMenu={closeMenu} />
//       </div>
//     </div>
//   );
// }

// export default MenuBurguer;
