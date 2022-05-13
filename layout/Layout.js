import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import Next from "../assets/svg/Next";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
	const linkTo = useLinkTo();
	return (
		<View style={styles.container}>
			{/* <Navigation /> */}
			<View style={styles.home}>{children}</View>
			<Pressable style={styles.next__button} onPress={() => linkTo("/Home")}>
				<Next />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// ...StyleSheet.absoluteFillObject,
		height: "100%",
		width: "100%",
	},
	home: {
		width: "100%",
		height: "100%",
	},
	next__button: {
		position: "absolute",
		right: 0,
		zIndex: 5,
	},
});

export default Layout;
