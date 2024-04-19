import React from 'react';
import styles from './ColourPalette.module.css';

const ColourPalette = () => {
  const colours = [
    { hex: '#313c1f', text: '#313c1f' },
    { hex: '#22241d', text: '#22241d' },
    { hex: '#003C43', text: '#003C43' },
    { hex: '#77B0AA', text: '#77B0AA' },
    { hex: '#E3FEF7', text: '#E3FEF7' }
  ];

  return (
    <div className={styles.colourPalletsSelection}>
      {colours.map((colour, index) => (
        <div key={index} className={styles.colourPallet} style={{ backgroundColor: colour.hex }}>
          <span className={styles.colourSpanText}>{colour.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ColourPalette;
