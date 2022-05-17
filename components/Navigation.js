import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

// Navigation
// import { useNavigation } from '@react-navigation/native';

// Svg
import { SIZES } from "../constants";
import { Navigation_1, Navigation_2, Navigation_3, Navigation_4, Navigation_5 } from "../constants/svg";

const Navigation = ({ navigate }) => {
	// const navigation = useNavigation();
	return (
		<View style={styles.navigation}>
            <Pressable onPress={() => navigate("Home")}>
				<View style={styles.navigation__item}>
					<Navigation_5 />
				</View>
			</Pressable>
			<Pressable onPress={() => navigate("About")}>
				<View style={styles.navigation__item}>
					<Navigation_1 />
				</View>
			</Pressable>
			<Pressable onPress={() => navigate("Research")}>
				<View style={styles.navigation__item}>
					<Navigation_2 />
				</View>
			</Pressable>
			<Pressable onPress={() => navigate("ResearchBase")}>
				<View style={styles.navigation__item}>
					<Navigation_3 />
				</View>
			</Pressable>
			<Pressable onPress={() => navigate("Mks")}>
				<View style={styles.navigation__item}>
					<Navigation_4 />
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	navigation: {
		position: "absolute",
		left: 0,
		width: SIZES.width * 0.11,
		height: SIZES.height,
		justifyContent: "space-around",
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		zIndex: 100,
	},
	navigation__item: {
		alignItems: "center",
	},
});

export default Navigation;
