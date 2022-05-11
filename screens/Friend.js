import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Friend = ({ route }) => (
	<View style={styles.container}>
		<Text>Друг {route.params.name}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Friend;
