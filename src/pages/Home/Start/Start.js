import React from 'react';
import './Start.scss'

//Make a footer sub component

function Start(props) {
	return (
		<div className="start">
			<img onClick={()=> {props.pageUp()}} className="page" src={props.page.img} />
			<div className="text-box">
				<p className="text">{props.page.text}</p>
			</div>
		</div>
	)
}

export default Start