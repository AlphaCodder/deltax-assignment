import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddSong from './components/AddSong';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<Header />
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/addsong' element={< AddSong />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
