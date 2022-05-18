import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Video
import { Video } from "expo-av";
// Layout
import Layout from "../components/Layout";
// Constants
import { Home_1, Home_2 } from "../constants/svg";
import { COLORS, SIZES } from "../constants";

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
			<View style={styles.content}>
				<Text style={styles.text}>
					Национальный {"\n"} орбитальный исследовательский центр
				</Text>
				<View style={styles.logos}>
					<Home_1 />
					<Home_2 />
				</View>
				<Text style={styles.title}>Космос</Text>
				<Text style={styles.subtitle}>Пространство инноваций</Text>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	content: {
		paddingLeft: SIZES.width * 0.11,
		flex: 1,
		alignItems: 'center',
	},
	background: {
		position: "absolute",
		width: SIZES.width,
		height: SIZES.height,
	},
	text: {
		textAlign: "center",
		paddingVertical: 20,
		// text
		fontWeight: "600",
		fontSize: 10,
		lineHeight: 15,
		textTransform: "uppercase",
		color: COLORS.white,
	},
	logos: {
		width: 300,
		flexDirection: "row",
		justifyContent: "space-between",
		alignSelf: "center",
	},
	title: {
		textAlign: "center",
		paddingTop: 30,
		// text
		fontWeight: "700",
		fontSize: 80,
		lineHeight: 95,
		letterSpacing: 4,
		textTransform: "uppercase",
		color: COLORS.white,
	},
	subtitle: {
		width: 400,
		alignSelf: "center",
		textAlign: "right",
		// text
		fontWeight: "700",
		fontSize: 14,
		lineHeight: 17,
		letterSpacing: 2,
		textTransform: "uppercase",
		color: COLORS.white,
	},
});

export default Home;
