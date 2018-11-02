import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

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
				imageUrl: currentState.imageUrl + "?t=" + new Date().getTime(),
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

	render() {
		const title = this.props.data.name + " - " + this.props.data.direction;
		const buttonTitle = this.state.refreshing ? "Refreshing" : "Refresh";

		return (
			<Collapse isCollapsed={this.state.collapsed} onToggle={this.collapseToggled}>
				<CollapseHeader>
					<View>
						<Text>{title}</Text>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<View style={styles.container}>
						<Image style={styles.image} source={{ uri: this.state.imageUrl }} resizeMode="cover" onLoad={this.imageLoaded} />
						<Button style={styles.button} title={buttonTitle} onPress={this.refresh} disabled={this.state.refreshing} />
					</View>
				</CollapseBody>
			</Collapse>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		flex: 1,
		alignItems: 'stretch'
	},
	title: {
		textAlign: 'center',
		fontSize: 20
	},
	image: {
		flex: 1,
		height: 200
	},
	button: {
		marginTop: 20
	}
});
