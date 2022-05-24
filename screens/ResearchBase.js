import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { COLORS, SIZES } from "../constants";
import {ResearchBase_Block_1, ResearchBase_Block_2, Layout} from "../components";
import { researchBase_1_background } from "../constants/images";

const ResearchBase = () => {
	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground style={styles.background} source={researchBase_1_background}>
					<ResearchBase_Block_1/>
				</ImageBackground>

				<View style={{width: SIZES.width, backgroundColor: 'rgb(28, 28, 28)'}}>
					<ResearchBase_Block_2/>
				</View>
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

export default ResearchBase;
