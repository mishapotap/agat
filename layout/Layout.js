import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import { Next_arrow } from "../constants/svg";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
	const linkTo = useLinkTo();
	return (
		<View style={styles.container}>
			{/* <Navigation /> */}
			<View style={styles.home}>{children}</View>
			<Pressable style={styles.next__arrow} onPress={() => linkTo("/Home")}>
				<Next_arrow />
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
	next__arrow: {
		position: "absolute",
		right: 0,
		zIndex: 5,
	},
});

export default Layout;
