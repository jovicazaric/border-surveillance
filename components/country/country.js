import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import BordrerCrossingListComponent from '../border-crossing-list/border-crossing-list';

export default class CountryComponent extends React.Component {
	render() {
		return (
			<Collapse>
				<CollapseHeader>
					<View>
						<Text>{this.props.country.name}</Text>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<BordrerCrossingListComponent borderCrossings={this.props.country.borderCrossings} />
				</CollapseBody>
			</Collapse>
		);
	}
}