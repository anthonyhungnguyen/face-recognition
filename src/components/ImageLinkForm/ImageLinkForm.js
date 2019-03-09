import React, { Component } from 'react';
import './LinkImageForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div className='dib'>
			<p className='f3'>{'This Magic Brain will detect faces in your pictures, give it a try.'}</p>
			<div className='center dib'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 div white bg-dark-gray' onClick={onSubmit}>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;