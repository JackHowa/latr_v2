import React from 'react';
import { Text, View } from 'react-native';
import CompanyLogo from './src/components/CompanyLogo';

const App = () => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<CompanyLogo />
			<Text style={textStyle}>Hey there</Text>
		</View>);
}

const styles = {
	textStyle: {
		color: "#000000",
		width: 50,
		height: 50,
		backgroundColor: "white"
	},
	viewStyle: {
		height: 100,
		backgroundColor: "#ef5350",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexDirection: "row",
		flex: 1,
		paddingTop: 45
	}
}

export default App;