import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrencyInput from './components/CurrencyInput';
import SliderInput from './components/SliderInput';
import DisplayGraph from './components/DisplayGraph';
import {
  setInitialSavingsAmount,
  setMonthlyDepositAmount,
  setInterestRate
} from './actions/app';
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
					<CurrencyInput defaultValue={this.props.initialSavingsAmount} onChange={this.props.onInitialSavingsAmountChanged}/>
          <p className="input-label">How much will you save each month?</p>
					<CurrencyInput defaultValue={this.props.monthlyDepositAmount} onChange={this.props.onMonthlyDepositAmountChanged}/>
          <p className="input-label">How much interest will you earn per year?</p>
					<SliderInput defaultValue={this.props.interestRate} onChange={this.props.onInterestRateChanged}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    initialSavingsAmount: state.app.get('initialSavingsAmount'),
    monthlyDepositAmount: state.app.get('monthlyDepositAmount'),
    interestRate: state.app.get('interestRate')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitialSavingsAmountChanged: amount => {
      dispatch(setInitialSavingsAmount(amount));
    },
    onMonthlyDepositAmountChanged: amount => {
      dispatch(setMonthlyDepositAmount(amount));
    },
    onInterestRateChanged: rate => {
      dispatch(setInterestRate(rate));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
