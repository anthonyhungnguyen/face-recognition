import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, concepts, hasInput }) => {
	return (
		<div className='center'>
			<div className='relative mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
				{box.map(b => {
					return (
						<div
							className='bounding-box'
							style={{ top: b.topRow, right: b.rightCol, bottom: b.bottomRow, left: b.leftCol }}
						/>
					);
				})}
			</div>
			<div>
				{hasInput ? (
					<div>
						{concepts.map(concept => {
							return (
								<div
									id='concepts'
									className='mw7 center bg-white br3 pa3 pa4-ns ba b--black-10 mt3 shadow-5'>
									{concept.map((c, index) => {
										if (index < 3) {
											return (
												<p className='mt3'>
													<span className='ttc underline f4 br3 pa3 mr5 dim'>
														{c['name']}
													</span>
													<span className='br3 f4 grow underline pa3 dim'>
														{String((Number(c['value']) * 100).toFixed(4)) + '%'}
													</span>
												</p>
											);
										}
									})}
								</div>
							);
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
