import React from 'react';
import './FraseDia.css';
import "@fontsource/poppins";

const FraseDia = ({ isDarkMode }) => {
  return (
    <div id='fraseDia'>
        <img src={isDarkMode ? "/iconeDark.png" : "/icone.png"} alt="" id='iconeFrase'/>
        <div id='containerFrases'>
          <p id='fraseTitle'>Frase do dia</p>
          <p>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</p>
        </div>
    </div>
  );
};

export default FraseDia;