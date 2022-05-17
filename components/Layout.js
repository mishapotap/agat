import React from "react";
import { View, StyleSheet } from "react-native";
import { SIZES } from "../constants";

const Layout = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: SIZES.width,
		height: SIZES.height,
	},
});

export default Layout;
