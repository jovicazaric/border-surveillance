import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import BordrerCrossingListComponent from "../border-crossing-list/border-crossing-list";

export default class CountryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		};
		this.collapseToggled = this.collapseToggled.bind(this);
	}

	collapseToggled() {
		this.setState(currentState => {
			return {
				collapsed: !currentState.collapsed
			};
		});
	}

	getHeaderStyle() {
		return this.state.collapsed ? styles.headerCollapsed : styles.headerDefault; 
	}

	render() {
		return (
			<Collapse style={styles.collapse} isCollapsed={this.state.collapsed} onToggle={this.collapseToggled}>
				<CollapseHeader>
					<View>
						<Text style={this.getHeaderStyle()}>{this.props.country.name}</Text>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<BordrerCrossingListComponent borderCrossings={this.props.country.borderCrossings} />
				</CollapseBody>
			</Collapse>
		);
	}
}

const styles = StyleSheet.create({
	collapse: {
		marginTop: 30,
		borderWidth: 2,
		borderRadius: 15,
		overflow: "hidden"
	},
	headerDefault: {
		textAlign: "center",
		padding: 5,
		fontSize: 30,
		backgroundColor: "#edeaea"
	},
	headerCollapsed: {
		textAlign: "center",
		padding: 5,
		fontSize: 30,
		backgroundColor: "#878787"
	}
});
