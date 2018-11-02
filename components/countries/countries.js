import React from 'react';
import { StyleSheet, View } from 'react-native';
import CountryComponent from '../country/country';

export default class CountriesComponent extends React.Component {
	render() {
		const countries = this.props.countries.map((country, index, countries) => {
			return (<CountryComponent key={index} country={country} />);
		});

		return (
			<View>
				{countries}
			</View>
		);
	}
}