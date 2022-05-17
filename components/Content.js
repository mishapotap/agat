import React from "react";
import { View, StyleSheet } from "react-native";
import { SIZES } from "../constants";

const Content = ({ children }) => {
	return <View style={styles.content}>{children}</View>;
};

const styles = StyleSheet.create({
	content: {
        marginLeft: SIZES.width * 0.11,
        height: SIZES.height,
		position: "absolute",
		width: SIZES.width * 0.89,
		right: 0,
	},
});

export default Content;
