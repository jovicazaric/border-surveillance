import React from "react";
import { StyleSheet, View } from "react-native";
import BoarderCrossingCamera from "../border-crossing-camera/border-crossing-camera";

export default class BorderCrossingListComponent extends React.Component {
	render() {
		const crossings = this.props.borderCrossings.map((crossing, index, crossings) => {
			return (<BoarderCrossingCamera key={index} data={crossing} />);
		});

		return (
			<View style={styles.crossings}>
				{crossings}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	crossings: {
		padding: 5
	}
});