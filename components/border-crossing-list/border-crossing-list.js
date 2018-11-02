import React from 'react';
import BoarderCrossingCamera from '../border-crossing-camera/border-crossing-camera';

export default class BorderCrossingListComponent extends React.Component {
	render() {
		const crossings = this.props.borderCrossings.map((crossing, index, crossings) => {
			return (<BoarderCrossingCamera key={index} data={crossing} />);
		});

		return (
			<React.Fragment>
				{crossings}
			</React.Fragment>
		);
	}
}