import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';
import particlesOptions from '../components/Particles/Particles';
import Clarifai from 'clarifai';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';

const app = new Clarifai.App({
	apiKey : '44f13c287b804911800fa6d5b1a8bcd9'
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input      : '',
			imageUrl   : '',
			box        : {},
			route      : 'signin',
			isSignedIn : false
		};
	}

	calculateFaceLocation = response => {
		const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol   : width + clarifaiFace.left_col * width,
			topRow    : clarifaiFace.top_row * height,
			rightCol  : 2 * width - clarifaiFace.right_col * width,
			bottomRow : height - clarifaiFace.bottom_row * height
		};
	};

	displayFaceBox = box => {
		this.setState({ box: box });
	};

	onInputChange = event => this.setState({ input: event.target.value });

	onSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
			.catch(err => console.log(err));
	};

	onRouteChange = route => {
		this.setState({ route: route });
		if (route === 'signout') {
			this.setState({ isSignedIn: false });
		} else if (route === 'home') {
			this.setState({ isSignedIn: true });
		}
	};

	render() {
		const { input, box, imageUrl, route, isSignedIn } = this.state;
		return (
			<div className='App tc courier ma0 pa0'>
				<Particles params={particlesOptions} className='particles fixed top-0 bottom-0 left-0 right-0' />
				<Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
				{route === 'home' ? (
					<div>
						<Logo />
						<Rank />
						<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
						<FaceRecognition box={box} imageUrl={imageUrl} />
					</div>
				) : this.state.route === 'signin' ? (
					<SignIn onRouteChange={this.onRouteChange} />
				) : (
					<Register onRouteChange={this.onRouteChange} />
				)}
			</div>
		);
	}
}

export default App;
