import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SIZES } from "../constants";
// import { useNavigation } from '@react-navigation/native';

import {
	Navigation_1,
	Navigation_2,
	Navigation_3,
	Navigation_4,
	Navigation_5,
} from "../assets/svg";

const Navigation = ({ navigate }) => {
	// const navigation = useNavigation();
	const [activeNav, setActiveNav] = useState("one");
	const navigation = [
		{
			id: 1,
			active: "one",
			icon: <Navigation_5 activeNav={activeNav} />,
			navigate: "Home",
		},
		{
			id: 2,
			active: "two",
			icon: <Navigation_1 activeNav={activeNav} />,
			navigate: "About",
		},
		{
			id: 3,
			active: "three",
			icon: <Navigation_2 activeNav={activeNav} />,
			navigate: "Research",
		},
		{
			id: 4,
			active: "four",
			icon: <Navigation_3 activeNav={activeNav} />,
			navigate: "ResearchBase",
		},
		{
			id: 5,
			active: "five",
			icon: <Navigation_4 activeNav={activeNav} />,
			navigate: "Mks",
		},
	];
	return (
		<View style={styles.navigation}>
			{navigation.map((item) => (
				<TouchableOpacity
					key={item.id}
					activeOpacity={0.3}
					onPress={() => {
						setActiveNav(`${item.active}`);
						navigate(`${item.navigate}`);
					}}
				>
					<View style={styles.navigation__item}>{item.icon}</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	navigation: {
		position: "absolute",
		left: 0,
		width: 70,
		height: SIZES.height,
		paddingVertical: 10,
		justifyContent: "space-around",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		zIndex: 100,
	},
	navigation__item: {
		alignItems: "center",
	},
});

export default Navigation;
