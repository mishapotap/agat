import React, {useState} from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { SIZES } from "../constants";

// Navigation
// import { useNavigation } from '@react-navigation/native';

// Svg
import { Navigation_1, Navigation_2, Navigation_3, Navigation_4, Navigation_5 } from "../assets/svg";

const Navigation = ({ navigate }) => {
	// const navigation = useNavigation();
	const [activeNav, setActiveNav] = useState('one');
	return (
		<View style={styles.navigation}>
            <Pressable onPress={() => {
				setActiveNav('one');
				navigate("Home");
			}}>
				<View style={styles.navigation__item}>
					<Navigation_5 activeNav={activeNav}/>
				</View>
			</Pressable>
			<Pressable onPress={() => {
				setActiveNav('two');
				navigate("About");
			}}>
				<View style={styles.navigation__item}>
					<Navigation_1 activeNav={activeNav}/>
				</View>
			</Pressable>
			<Pressable onPress={() => {
				setActiveNav('three');
				navigate("Research");
			}}>
				<View style={styles.navigation__item}>
					<Navigation_2 activeNav={activeNav}/>
				</View>
			</Pressable>
			<Pressable onPress={() => {
				setActiveNav('four');
				navigate("ResearchBase");
			}}>
				<View style={styles.navigation__item}>
					<Navigation_3 activeNav={activeNav}/>
				</View>
			</Pressable>
			<Pressable onPress={() => {
				setActiveNav('five');
				navigate("Mks");
			}}>
				<View style={styles.navigation__item}>
					<Navigation_4 activeNav={activeNav}/>
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
