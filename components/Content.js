import React from "react";
import { View } from "react-native";
import { SIZES } from "../constants";

const Content = ({ children, centered, autoHeight }) => {
	return (
		<View
			style={{
				marginLeft: SIZES.width * 0.11,
				width: SIZES.width * 0.89,
				height: autoHeight ? 'auto' : SIZES.height,
				justifyContent: centered ? "center" : null,
			}}
		>
			{children}
		</View>
	);
};


export default Content;
