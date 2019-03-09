import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import particlesOptions from './components/Particles/Particles';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
	apiKey : '44f13c287b804911800fa6d5b1a8bcd9'
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input : ''
		};
	}

	onInputChange = event => this.setState({ input: event.target.value });

	onSubmit = () => {
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
			function(response){
				console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
			},
			function(err){
				// there was an error
			}
		);
	};

	render() {
		const { input } = this.state;
		return (
			<div className='App tc courier ma0 pa0'>
				<Particles params={particlesOptions} className='particles fixed top-0 bottom-0 left-0 right-0' />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
				<FaceRecognition imageUrl={input} />
			</div>
		);
	}
}

export default App;
