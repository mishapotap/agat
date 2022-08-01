import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FONTS } from "../../../constants";

const ResearchImageWithText = ({ data }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageBlock}>
				<Image source={data.image} />
			</View>
			<View style={styles.textBlock}>
				<Text style={flattenStyles.paragraphFirst}>{data.firstText}</Text>
				<Text style={flattenStyles.paragraph}>{data.secondText}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 24,
	},
	imageBlock: {
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
	textBlock: {
		width: "50%",
	},
});

const flattenStyles = StyleSheet.flatten({
	paragraphFirst: [FONTS.modalTextBoldWhite, { marginBottom: 24 }],
	paragraph: [FONTS.modalTextWhite, { marginBottom: 24 }],
});

export default {
	name: "ResearchImageWithText",
	Component: ResearchImageWithText,
};
