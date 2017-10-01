import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectInput.css';

export default class SelectInput extends Component {

	constructor(props) {
		super(props);

		this.state = {
      value: props.defaultValue,
      hasFocus: false
		};
	}

	handleChange(e) {
    const value = e.target.value;
    this.setState({value});
    this.props.onChange(value);
  }

  handleFocus(e) {
		this.setState({
			hasFocus: true
		});
	}

	render() {
		const { value } = this.state;

		return (
			<div className="fmz-select">
				<select
          onFocus={this.handleFocus.bind(this)}
					onChange={this.handleChange.bind(this)}
          value={value}
          >
          {this.props.options.map(option => (
						<option key={option.value} value={option.value}>{option.label}</option>
			    ))}
        </select>
			</div>
		);
	}
}

SelectInput.propTypes = {
	options: PropTypes.array
};
