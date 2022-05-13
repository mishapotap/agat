import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Video } from "expo-av";

import Orbital from "../assets/svg/Home/Orbital";
import Roscosmos from "../assets/svg/Home/Roscosmos";
// Layout
import Layout from "../layout/Layout";

const Research = () => {
	return (
		<Layout>
			<View style={styles.home__bg__layer}></View>
			<View style={styles.content}>
				<Text style={styles.content__title}>Исследования</Text>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	home__bg: {
		...StyleSheet.absoluteFillObject,
		width: "100%",
		height: "100%",
		zIndex: -2,
	},
	home__bg__layer: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		zIndex: -1,
	},
	content: {
		position: "absolute",
		right: 0,
		width: "89%",
		// marginTop: 0,
		// marginRight: 'auto',
		// marginBottom: 0,
		// marginLeft: 'auto',
	},
	content__title: {
		textAlign: "center",
		paddingTop: 30,
		// text
		fontWeight: "700",
		fontSize: 80,
		lineHeight: 95,
		letterSpacing: 4,
		textTransform: "uppercase",
		color: "#FFFFFF",
	},
});

export default Research;
