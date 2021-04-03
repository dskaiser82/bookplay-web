import React from 'react';

import TextBox from '../Start/TextBox';
import './start.scss';

//Make a footer sub component

function Start(props) {
  return (
    <div className="start">
      <img
        onClick={() => {
          props.pageUp();
        }}
        className="page"
        src={props.page.img}
      />
      <TextBox>
        <p className="text">{props.page.text}</p>
      </TextBox>
    </div>
  );
}

export default Start;
