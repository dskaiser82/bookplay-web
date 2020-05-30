import React from 'react';
import './Menu.scss'

//Make a footer sub component

function Start(props) {
	return (
		<div className="start">
			<img className="page" src={props.img} />
			<div className="text-box">
				<p className="text">{props.text}</p>
			</div>
		</div>
	)
}

export default Start