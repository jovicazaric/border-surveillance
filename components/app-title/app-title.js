import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppTitleComponent extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.countryTitle}>Bosnia and Herzegovina</Text>
		<Text style={styles.appTitle}>Border crossing surveillance</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	countryTitle: {
		textAlign: 'center',
		fontSize: 20
	},
	appTitle: {
		marginTop: 5,
		textAlign: 'center',
		fontSize: 25
	}
});
