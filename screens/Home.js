import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Video
import { Video } from "expo-av";
// Layout
import Layout from "../layout/Layout";
// Svg
import { Home_1, Home_2 } from "../constants/svg";

const Home = () => {
	return (
		<Layout>
			<Video
				style={styles.home__bg}
				source={require("../assets/video/main.mp4")}
				resizeMode="stretch"
				isLooping={true}
				shouldPlay={true}
			/>
			<View style={styles.home__bg__layer}></View>
			<View style={styles.content}>
				<Text style={styles.content__text}>
					Национальный {"\n"} орбитальный исследовательский центр
				</Text>
				<View style={styles.content_logos}>
					<Home_1 />
					<Home_2 />
				</View>
				<Text style={styles.content__title}>Космос</Text>
				<Text style={styles.content__subtitle}>Пространство инноваций</Text>
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
	},
	content__text: {
		textAlign: "center",
		paddingVertical: 20,

		// text
		fontWeight: "600",
		fontSize: 10,
		lineHeight: 15,
		textTransform: "uppercase",
		color: "#FFFFFF",
	},
	content_logos: {
		flexDirection: "row",
		width: 300,
		alignSelf: "center",
		justifyContent: "space-between",
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
	content__subtitle: {
		width: 400,
		alignSelf: "center",
		textAlign: "right",
		// text
		fontWeight: "700",
		fontSize: 14,
		lineHeight: 17,
		letterSpacing: 2,
		textTransform: "uppercase",
		color: "#FFFFFF",
	},
});

export default Home;
