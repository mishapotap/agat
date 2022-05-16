import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// Layout
import Layout from "../layout/Layout";

// Constants
import {SIZES} from '../constants';
// Svg
import { Research_1_circles, Research_1_spaceship } from "../constants/svg";

const Research = () => {
	return (
		<Layout>
			<ScrollView>
				<View style={{width: '100%', height: SIZES.height}}>
					<View style={[styles.background, {backgroundColor: '#060F20'}]}/>
					
					<View style={styles.content}>
						{/* <Text style={styles.content__title}>Исследования</Text> */}
						<View style={{justifyContent: 'center', alignItems: 'center'}}>
							{/* <Research_1_spaceship/> */}
							<View style={{ position: 'absolute', top: 0, height: SIZES.height}}><Research_1_circles/></View>
							<View style={{position: 'absolute', top: SIZES.height/2, left: SIZES.width/2, height: SIZES.height}}><Research_1_spaceship/></View>
						</View>
					</View>
				</View>
			</ScrollView>
		</Layout>
	);
};

const styles = StyleSheet.create({
	background: {
		...StyleSheet.absoluteFillObject,
		width: SIZES.width,
		height: SIZES.height,
		zIndex: -2,
	},
	background_layer: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		zIndex: -1,
	},
	content: {
		position: "absolute",
		right: 0,
		width: "89%",
	},
	content__title: {
		textAlign: "center",
		paddingTop: 30,
		// text
		fontWeight: "700",
		fontSize: 80,
		lineHeight: 95,
		letterSpacing: 4,
		textTransform: "uppercase",
		color: "#FFFFFF",
	},
});

export default Research;
