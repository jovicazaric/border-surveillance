import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppTitleComponent extends React.Component {
	render() {
		const intro = this.props.intro ? <Text style={styles.countryTitle}>{this.props.intro}</Text> : null;
		const main = this.props.main ? <Text style={styles.appTitle}>{this.props.main}</Text> : null;

		return (
			<View>
				{intro}
				{main}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	countryTitle: {
		textAlign: 'center',
		fontSize: 15
	},
	appTitle: {
		marginTop: 5,
		textAlign: 'center',
		fontSize: 20
	}
});
