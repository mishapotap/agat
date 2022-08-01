import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const ResearchModalHeader = ({ data }) => {
	return (
		<View style={styles.header}>
			<View style={{ alignSelf: "center" }}>
				{data.icon}
			</View>
			<Text style={flattenStyles.title}>{data.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: COLORS.white,
		marginBottom: 24,
		paddingVertical: 20,
		// alignItems: 'center',
	},
});

const flattenStyles = StyleSheet.flatten({
	title: [FONTS.modalTitleWhite, { marginVertical: 15 }],
});

export default {
	name: "ResearchModalHeader",
	Component: ResearchModalHeader,
};
