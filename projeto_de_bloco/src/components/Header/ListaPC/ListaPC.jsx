import React from 'react';
import './_ListaPC.scss';

const ListaPC = ({ closeMenu }) => {
  return (
    <ul className="listaPC">
      <li><a href="" onClick={closeMenu}></a></li>
      <li><a href="" onClick={closeMenu}></a></li>
      <li><a href="" onClick={closeMenu}></a></li>
      <li><a href="" onClick={closeMenu}></a></li>
      <li><a href="" onClick={closeMenu}></a></li>
    </ul>
  );
};

export default ListaPC;
