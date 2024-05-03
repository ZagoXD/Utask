import React from 'react';
import './ModalMessage.css';
import "@fontsource/poppins";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ModalMessage = ({ isDarkMode, closeModal }) => {
  return (
    <div className="modalFrase">
      <div className={isDarkMode? "modal-content-telaDark" : "modal-content-Frase"}>
        <div id='containerTitleModalFrase'>
            <div id='phrase'>
                <img src={isDarkMode ? "/iconeMobileDark.png" : "/iconeMobileLight.png"} alt=""/>
                <p>Frase do dia</p>
            </div>
            <button className="btnfecharTask" onClick={closeModal}><HighlightOffIcon/></button>
        </div>
        <p>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</p>
      </div>
    </div>
  );
};

export default ModalMessage;