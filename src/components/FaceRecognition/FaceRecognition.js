import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, concepts, hasInput }) => {
	return (
		<div className='center'>
			<div className='relative mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
				<div
					className='bounding-box'
					style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
				/>
			</div>
			<div>
				{hasInput ? (
					<div id='concepts' className='mw7 center bg-white br3 pa3 pa4-ns ba b--black-10'>
						{concepts.map((concept, index) => {
							if (index < 5) {
								return (
									<p className='mt3'>
										<a href='goo' className='ttc underline f4 br3 pa3 mr5 dim'>
											{concept['name']}
										</a>{' '}
										{' '}
										<span className='br3 f4 grow underline pa3'>
											{String((Number(concept['value']) * 100).toFixed(4)) + '%'}
										</span>
									</p>
								);
							}
						})}
					</div>
				) : (
					<div />
				)}
			</div>
		</div>
	);
};

export default FaceRecognition;
