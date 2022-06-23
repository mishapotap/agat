import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { COLORS } from "../../../constants";

const ModuleTechnical = ({ data }) => {
	return (
		<View style={styles.wrapper}>
            {data.title && <Text style={styles.title}>{data.title}</Text>}
            {data.content.map((item) => (
                <View key={item.id} style={styles.item}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.value}>{item.value}</Text>
                </View>
            ))}
		</View>
	);
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 25,
    },
    title: {
        marginBottom: 25,
        // text
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 34,
        letterSpacing: 1,
        color: COLORS.white,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name: {
        flex: 3,
        // text
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 25,
        letterSpacing: 0.9,
        color: COLORS.white,
    },
    hr: {
        marginHorizontal: 20,
        backgroundColor: COLORS.white,
        height: '100%',
        width: StyleSheet.hairlineWidth,
    },
    value: {
        flex: 1,
        // text
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 25,
        letterSpacing: 0.9,
        color: "#3C70BE",
    },
});

export default {
	name: "ModuleTechnical",
	Component: ModuleTechnical,
};
