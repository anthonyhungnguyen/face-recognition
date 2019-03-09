import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='relative center'>
			<div className='mt2'>
				<img id='inputimage' src={imageUrl} alt='' width='500px' height='auto' className='shadow-5' />
				<div
					className='bounding-box'
					style={{ top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow }}
				/>
			</div>
		</div>
	);
};

export default FaceRecognition;
