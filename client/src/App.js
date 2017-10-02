import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrencyInput from './components/CurrencyInput';
import SliderInput from './components/SliderInput';
import SelectInput from './components/SelectInput';
import DisplayGraph from './components/DisplayGraph';
import {
  setInitialSavingsAmount,
  setMonthlyDepositAmount,
  setInterestRate,
  setCurrency,
  setInterestPeriod,
  setMonthlyProjection,
  getMonthlyProjection
} from './actions/app';
import './App.css';

const currencies = [
  {
    symbol: '£',
    code: 'GBP'
  }, {
    symbol: '$',
    code: 'USD'
  }, {
    symbol: '€',
    code: 'EUR'
  }
];

const interestPeriodOptions = [{
    value: 'monthly',
    label: 'Monthly'
  }, {
    value: 'quarterly',
    label: 'Quarterly'
  }, {
    value: 'yearly',
    label: 'Yearly'
  }
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header-banner">
					<h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
				</div>
				<div className="financial-inputs">
					<p className="input-label">How much have you saved?</p>
					<CurrencyInput currencySymbol={'£'} defaultValue={this.props.initialSavingsAmount} onChange={this.props.onInitialSavingsAmountChanged}/>
          <p className="input-label">How much will you save each month?</p>
					<CurrencyInput currencySymbol={'£'} defaultValue={this.props.monthlyDepositAmount} onChange={this.props.onMonthlyDepositAmountChanged}/>
          <p className="input-label">How much interest will you earn per year?</p>
					<SliderInput defaultValue={this.props.interestRate} onChange={this.props.onInterestRateChanged}/>
          <p className="input-label">How often is the interest paid?</p>
          <SelectInput defaultValue={this.props.interestPeriod} options={interestPeriodOptions} onChange={this.props.onInterestPeriodChanged} />
        </div>
        <div className="financial-display">
          <p className="input-label">Choose your display currency:</p>
          <SelectInput defaultValue={this.props.currency} options={
            currencies.map(currency => { return { label: currency.symbol, value: currency.code }; })
          } onChange={this.props.onCurrencyChanged} />
          <DisplayGraph data={this.props.monthlyProjection}/>
        </div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    initialSavingsAmount: state.app.get('initialSavingsAmount'),
    monthlyDepositAmount: state.app.get('monthlyDepositAmount'),
    interestRate: state.app.get('interestRate'),
    currency: state.app.get('currency'),
    interestPeriod: state.app.get('interestPeriod'),
    monthlyProjection: state.app.get('monthlyProjection')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitialSavingsAmountChanged: amount => {
      dispatch(setInitialSavingsAmount(amount));
      dispatch(getMonthlyProjection());
    },
    onMonthlyDepositAmountChanged: amount => {
      dispatch(setMonthlyDepositAmount(amount));
      dispatch(getMonthlyProjection());
    },
    onInterestRateChanged: rate => {
      dispatch(setInterestRate(rate));
      dispatch(getMonthlyProjection());
    },
    onCurrencyChanged: currency => {
      dispatch(setCurrency(currencies.filter(elem => elem.code === currency)[0]));
      dispatch(getMonthlyProjection());
    },
    onInterestPeriodChanged: period => {
      dispatch(setInterestPeriod(period));
      dispatch(getMonthlyProjection());
    },
    onMonthlyProjectionChanged: data => {
      dispatch(setMonthlyProjection(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
