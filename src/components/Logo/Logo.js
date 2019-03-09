import React, { Component } from 'react';
import Tilt from 'react-tilt';
import ava from './ava.jpg';
import './Logo.css';

export default class Logo extends Component {
	render() {
		return (
			<div className='ma4 mt0'>
				<Tilt className='Tilt br2 shadow-2' options={{ max: 25 }} style={{ height: 250, width: 250 }}>
					<div className='Tilt-inner'>
						<img src={ava} alt='logo' />
					</div>
				</Tilt>
			</div>
		);
	}
}
