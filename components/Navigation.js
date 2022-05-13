import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

// Navigation
// import { useNavigation } from '@react-navigation/native';

// Svg
import SidebarIcon_1 from "../assets/svg/sidebar/SidebarIcon_1";
import SidebarIcon_2 from "../assets/svg/sidebar/SidebarIcon_2";
import SidebarIcon_3 from "../assets/svg/sidebar/SidebarIcon_3";
import SidebarIcon_4 from "../assets/svg/sidebar/SidebarIcon_4";

const Navigation = ({navigate}) => {
    // const navigation = useNavigation();
    
	return (
        <View style={styles.navigation}>
            <Pressable onPress={() => navigate('About')}>
                <View style={styles.navigation__item}>
                    <SidebarIcon_1 />
                </View>
            </Pressable>
            <Pressable onPress={() => navigate('Research')}>
                <View style={styles.navigation__item}>
                    <SidebarIcon_2 />
                </View>
            </Pressable>
            <Pressable onPress={() => navigate('ResearchBase')}>
                <View style={styles.navigation__item}>
                    <SidebarIcon_3 />
                </View>
            </Pressable>
            <Pressable onPress={() => navigate('Mks')}>
                <View style={styles.navigation__item}>
                    <SidebarIcon_4 />
                </View>
            </Pressable>
        </View>
	);
};

const styles = StyleSheet.create({
	navigation: {
		position: "absolute",
		left: 0,
		width: "11%",
		height: "100%",
		justifyContent: "space-around",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		zIndex: 1000,
	},
	navigation__item: {
		alignItems: "center",
	},
});

export default Navigation;
