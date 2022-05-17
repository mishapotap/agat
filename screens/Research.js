import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

// Components
import { Content, Layout } from "../components";

// Constants
import {COLORS, SIZES} from '../constants';
// Svg
import { Research_1_circles, Research_1_spaceship } from "../constants/svg";
import {research_1_background} from '../constants/images';

const Research = () => {
	return (
		<Layout>
			<ScrollView>
				<View style={{width: SIZES.width, height: SIZES.height, justifyContent: 'flex-end'}}>
					<Image style={styles.background} source={research_1_background}/>
					<Content>
							<Text style={styles.research__title}>Исследования {'\n'}в космосе</Text>
					</Content>
				</View>
				<View style={{width: SIZES.width, height: SIZES.height, justifyContent: 'center', backgroundColor: '#060F20'}}>
					<Content>
							<View style={{width:300}}>
								<Text style={{fontWeight: '600', fontSize: 17, lineHeight: 24, letterSpacing: 0.9, color: COLORS.white}}>Цель развития космических исследований - выход российской науки на ведущие позиции в ключевых направлениях наук о космосе</Text>
							</View>
					</Content>
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
	research__title: {
		padding: 40,
		fontWeight: "800",
		fontSize: 26,
		lineHeight: 33,
		letterSpacing: 1,
		color: COLORS.white,
	},
});

export default Research;
