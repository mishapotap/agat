import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Layout, ResearchBlock_1, ResearchBlock_2, ResearchBlock_3, ResearchBlock_4 } from "../components";
import {COLORS, SIZES} from '../constants';
import {research_1_background, research_4_background} from '../constants/images';

const Research = () => {
	return (
		<Layout>
			<ScrollView>
				<ImageBackground style={styles.background} source={research_1_background}>
					<ResearchBlock_1/>
				</ImageBackground>

				<View style={{width: SIZES.width, height: SIZES.height, backgroundColor: COLORS.researchBg}}>
					<ResearchBlock_2/>
				</View>

				<View style={{width: SIZES.width, backgroundColor: COLORS.researchBg}}>
					<ResearchBlock_3/>
				</View>
				
				<ImageBackground style={styles.background} source={research_4_background}>
					<ResearchBlock_4/>
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

export default Research;
