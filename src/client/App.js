import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';

class App extends Component {
	render() {
		return (
			<div  className='container-fluid'>
				<Header />
				{this.props.children}			
			</div>
			
		)
	}
}

export default App;
