import React from "react";
import Layout from "../components/Layout";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";
import { SIZES } from "../constants";
import { HomeBlock_1 } from "../components";

const Home = () => {
	return (
		<Layout>
			<Video
				style={styles.background}
				source={require("../assets/video/main.mp4")}
				resizeMode="cover"
				isLooping={true}
				shouldPlay={true}
			/>
			<View style={styles.backgroundLayer}></View>
			<HomeBlock_1/>
		</Layout>
	);
};

const styles = StyleSheet.create({
	background: {
		position: "absolute",
		width: SIZES.width,
		height: SIZES.height,
		zIndex: -2,
	},
	backgroundLayer: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		zIndex: -1,
	}
});

export default Home;
