import React from 'react';
import './FraseDiaMobile.css';
import "@fontsource/poppins";

const FraseDiaMobile = ({ isDarkMode, openModal }) => {
  return (
    <button id='fraseDiaMobile' onClick={openModal}>
        <img src={isDarkMode ? "/iconeDark.png" : "/icone.png"} alt="" id='iconeFraseMobile'/>
        <div id='containerFrasesMobile'>
          <p id='fraseTitleMobile'>Frase do dia</p>
        </div>
    </button>
  );
};

export default FraseDiaMobile;