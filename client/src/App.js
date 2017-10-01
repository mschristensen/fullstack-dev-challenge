import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrencyInput from './components/CurrencyInput';
import SliderInput from './components/SliderInput';
import DisplayGraph from './components/DisplayGraph';
import { setInitialSavingsAmount } from './actions/app';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header-banner">
					<h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
				</div>
				<div className="financial-inputs">
					<p className="input-label">How much have you saved?</p>
					<CurrencyInput defaultValue={0} onChange={this.props.onInitialSavingsAmountChanged}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    initialSavingsAmount: state.initialSavingsAmount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitialSavingsAmountChanged: amount => {
      dispatch(setInitialSavingsAmount(amount));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
