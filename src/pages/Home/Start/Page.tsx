import React from 'react';
import './Page.scss';

export default function Page(props) {
  return (
    <div className="start">
      <img
        onClick={() => {
          props.pageUp();
        }}
        className="page"
        src={props.page.img}
      />
      <div className="text-box">
        <p className="text">{props.page.text}</p>
      </div>
    </div>
  );
}
