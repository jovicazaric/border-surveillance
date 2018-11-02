import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

export default class BorderCrossingCameraComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: this.props.data.imageUrl,
			collapsed: false,
			refreshing: false
		};
		this.refresh = this.refresh.bind(this);
		this.imageLoaded = this.imageLoaded.bind(this);
		this.collapseToggled = this.collapseToggled.bind(this);
	}

	imageLoaded() {
		this.setState(currentState => {
			return {
				refreshing: false
			};
		});
	}

	refresh() {
		this.setState(currentState => {
			return {
				imageUrl: this.props.data.imageUrl + "?t=" + new Date().getTime(),
				refreshing: true
			};
		});
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
		const title = this.props.data.name + " - " + this.props.data.direction;
		const buttonTitle = this.state.refreshing ? "Refreshing" : "Refresh";

		return (
			<Collapse isCollapsed={this.state.collapsed} onToggle={this.collapseToggled} style={styles.collapse}>
				<CollapseHeader>
					<View>
						<Text style={this.getHeaderStyle()}>{title}</Text>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<View style={styles.collapseBody}>
						<Image style={styles.image} source={{ uri: this.state.imageUrl }} resizeMode="cover" onLoad={this.imageLoaded} />
						<View style={styles.buttonView}>
							<Button style={styles.button} title={buttonTitle.toUpperCase()} onPress={this.refresh} disabled={this.state.refreshing} color="black" />
						</View>
					</View>
				</CollapseBody>
			</Collapse>
		);
	}
}

const styles = StyleSheet.create({
	collapse: {
		marginTop: 10,
		borderWidth: 1,
		borderRadius: 15,
		overflow: "hidden"
	},
	headerDefault: {
		padding: 5,
		textAlign: "center",
		fontSize: 20,
		backgroundColor: "#edeaea"
	},
	headerCollapsed: {
		padding: 5,
		textAlign: "center",
		fontSize: 20,
		backgroundColor: "#878787"
	},
	collapseBody: {
		flex: 1,
		alignItems: "stretch",
	},
	image: {
		flex: 1,
		height: 225
	},
	buttonView: {
		backgroundColor: "#dbfdff"
	}
});
