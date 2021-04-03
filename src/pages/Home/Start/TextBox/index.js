import React from 'react';

import './styles.scss';

const textBox = ({ children }) => {
  return (
    <div className="wolf_box.png">
      <img src="/wolf/img/wolf_box.png" />
      {children}
    </div>
  );
};

export default textBox;
