import React from 'react';
import './Page.scss';

type PageProps = {
  page: { img: string; text: string };
};

export default function Page(props: PageProps) {
  return (
    <div className="start">
      <img className="page" src={props?.page?.img} />
      <div className="text-box">
        <p className="text">{props?.page?.text}</p>
      </div>
    </div>
  );
}
