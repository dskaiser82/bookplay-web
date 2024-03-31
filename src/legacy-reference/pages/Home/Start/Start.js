import React, { useEffect } from 'react';
import './Start.scss';
import { debounce } from '../../../helpers/helpers';

//Make a footer sub component

function Start(props) {
  const debouncePageTurnForTodlers = debounce(function () {
    props.pageUp();
  }, 500);

  useEffect(() => {
    document.addEventListener('keydown', debouncePageTurnForTodlers);

    return () => {
      document.removeEventListener('keydown', props.pageUp);
    };
  }, []);

  return (
    <div className="start">
      <img
        onKeyDown={() => {
          props.pageUp();
        }}
        onClick={() => {
          props.pageUp();
        }}
        src={`/beast/img/pages/${props.pageCounter}.png`}
      />
    </div>
  );
}

export default Start;
