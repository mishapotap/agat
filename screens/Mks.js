import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Layout
import Layout from "../components/Layout";
import { COLORS, SIZES } from "../constants";

const Mks = () => {
	return (
		<Layout>
            <View style={styles.content}>
				<Text style={styles.title}>РС МКС</Text>
			</View>
        </Layout>
	);
};

const styles = StyleSheet.create({
	content: {
		paddingLeft: SIZES.width * 0.11,
		height: SIZES.height,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		backgroundColor: 'red',
		textAlign: "center",
		// text
		fontWeight: "700",
		fontSize: 80,
		lineHeight: 95,
		letterSpacing: 4,
		textTransform: "uppercase",
		color: COLORS.white,
	},
});

export default Mks;
