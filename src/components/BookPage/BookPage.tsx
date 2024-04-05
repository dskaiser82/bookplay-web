import React from 'react';
import { PageType } from '../Story/types';
import './BookPage.scss';

type BookPageProps = {
  page: PageType;
};

export default function BookPage(props: BookPageProps) {
  return (
    <div className="start">
      <img className="page" src={props?.page?.img} />
      <div className="text-box">
        <p className="text">{props?.page?.text}</p>
      </div>
    </div>
  );
}
