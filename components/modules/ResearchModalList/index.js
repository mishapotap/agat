import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "../../../constants";

const ResearchModalList = ({ data }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={flattenStyles.listItem}>
			{data.content.map((item) => (
				<Text style={flattenStyles.listItem} key={item.id}>{"\u2022"} {item.name}{"\n"}</Text>
			))}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
	}
});

const flattenStyles = StyleSheet.flatten({
	listItem: [FONTS.modalListWhite, { paddingLeft: 10 }],
});

export default {
	name: "ResearchModalList",
	Component: ResearchModalList,
};
