import React from "react";
import { View } from "react-native";
import { SIZES } from "../constants";

const Content = ({ children, centered, autoHeight, alignCenter }) => {
	return (
		<View
			style={{
				paddingLeft: SIZES.width * 0.11,
				flex: 1,
				// width: SIZES.width * 0.89,
				// height: autoHeight ? 'auto' : SIZES.height,
				// justifyContent: centered ? "center" : null,
				// alignItems: alignCenter ? "center" : null,
				// backgroundColor: 'yellow',
				justifyContent: 'center',
				alignItems: 'center',
				// backgroundColor: 'red'
			}}
		>
			{children}
		</View>
	);
};


export default Content;
