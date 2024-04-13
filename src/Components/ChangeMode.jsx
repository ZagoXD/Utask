import React from 'react';
import './ChangeMode.css';

const ChangeMode = ({ toggleMode, isDarkMode }) => {
  return (
    <>
      <button onClick={toggleMode}>
        {isDarkMode ? (
          <img src="/Darkmode.png" alt="Dark Mode" />
        ) : (
          <img src="/Lightmode.png" alt="Light Mode" />
        )}
      </button>
    </>
  );
};

export default ChangeMode;