import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import AppTitleComponent from './components/app-title/app-title';
import CountriesComponent from './components/countries/countries';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		this.setState(currentState => {
			return {
				title: {
					main: "Border crossing surveillance",
					intro: "Serbia, Bosnia and Herzegovina"
				},
				countries: [
					{
						name: "Serbia",
						borderCrossings: []
					},
					{
						name: "Bosnia and Herzegovina",
						borderCrossings: [
							{
								name: "Raca",
								direction: "Entrance",
								imageUrl: "http://139.59.212.224/AMSRS_02_GP_RA02/slika.jpg"
							},
							{
								name: "Raca",
								direction: "Exit",
								imageUrl: "http://139.59.212.224/AMSRS_02_GP_RA01/slika.jpg"
							}
						]
					}
				]
			}
		});
	}

	render() {
		return (
			<ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={true}>
				<AppTitleComponent intro={this.state.title.intro} main={this.state.title.main} />
				<CountriesComponent countries={this.state.countries} />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		margin: 50,
		marginLeft: 10,
		marginRight: 10,
		flex: 1
	}
});