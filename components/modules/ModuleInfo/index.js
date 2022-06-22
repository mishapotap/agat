import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const ModuleInfo = ({ data }) => {
	return (
		<View style={styles.wrapper}>
            <View style={styles.column}>
                <Text style={styles.text}>Условное обозначение:</Text>
                <Text style={styles.text}>Старт:</Text>
                <Text style={styles.text}>Стыковка:</Text>
            </View>
			<View style={styles.column}>
                <Text style={[styles.text, {color: "#3C70BE"}]}>{data.symbol || "Нет информации"}</Text>
                <Text style={[styles.text, {color: "#3C70BE"}]}>{data.start || "Нет информации"}</Text>
                <Text style={[styles.text, {color: "#3C70BE"}]}>{data.finish || "Нет информации"}</Text>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
        flexDirection: 'row',
    },
    column: {
        width: '50%',
    },
	text: {
		// text
		fontWeight: "700",
		fontSize: 15,
		lineHeight: 25,
		letterSpacing: 1,
		color: COLORS.white
	}
});

export default {
	name: "ModuleInfo",
	Component: ModuleInfo,
};
