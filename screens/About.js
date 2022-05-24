import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Layout, AboutBlock_1, AboutBlock_2, AboutBlock_3, AboutBlock_4 } from "../components";
import {about_1_background, about_2_background, about_4_background} from '../constants/images';
import {SIZES} from '../constants';


const About = () => {
	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground style={styles.background} source={about_1_background}>
					<AboutBlock_1/>
				</ImageBackground>

				<ImageBackground style={styles.background} source={about_2_background}>
					<AboutBlock_2/>
				</ImageBackground>
				
				<View style={styles.background}>
					<AboutBlock_3/>
				</View>

				<ImageBackground style={styles.background} source={about_4_background}>
					<AboutBlock_4/>
				</ImageBackground>
			</ScrollView>
		</Layout>
	);
};

const styles = StyleSheet.create({
	background: {
		width: SIZES.width,
		height: SIZES.height,
	},
});



export default About;
