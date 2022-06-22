import React from "react";
import { Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Layout from "../components/Layout";
import { COLORS, SIZES } from "../constants";
import { mks_1_background } from "../constants/images";
import { Mks_1_BackButton, Mks_1_Button } from "../assets/svg";

const Mks = () => {
	const navigation = useNavigation();
	return (
		<Layout>
			<ImageBackground style={styles.background} resizeMode={"stretch"} source={mks_1_background}>
				<TouchableOpacity  style={styles.button} activeOpacity={0.3} onPress={() => navigation.navigate('MksScreen')}>
					<Mks_1_Button width={126} height={76}/>
					<Text style={styles.buttonText}>Старт</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.backButton}	activeOpacity={0.3}	onPress={() => navigation.navigate('Home')}>
					<Mks_1_BackButton/>
				</TouchableOpacity>
			</ImageBackground>
        </Layout>
	);
};

const styles = StyleSheet.create({
	background: {
		width: SIZES.width,
		height: SIZES.height,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		position: 'absolute',
		// text
		fontWeight: '400',
		fontSize: 12,
		letterSpacing: 0.8,
		color: COLORS.white,
	},
	backButton: {
		position: 'absolute',
		top: 50,
		right: 50,
	}
});

export default Mks;
