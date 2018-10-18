import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class BorderCrossingCameraComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: this.props.imageUrl,
			refreshing: false
		}
		this.refresh = this.refresh.bind(this);
		this.imageLoaded = this.imageLoaded.bind(this);
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
	
	render() {
		const buttonTitle = this.state.refreshing ? "Refreshing" : "Refresh";
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.title}</Text>
				<Image style={styles.image} source={{uri: this.state.imageUrl}} resizeMode="cover" onLoad={this.imageLoaded} />
				<Button style={styles.button} title={buttonTitle} onPress={this.refresh} disabled={this.state.refreshing} />
			</View>
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
