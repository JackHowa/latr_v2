import React from 'react';
import { View, Text } from 'react-native';

const CompanyLogo = () => {
	const { viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text>Logo Here</Text>
		</View>);


}; 

const styles = {
	viewStyle: {
		width: 50,
		height: 50
	}
}

export default CompanyLogo;

