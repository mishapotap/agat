import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ModuleImage = ({ data }) => {
	return (
		<View style={styles.wrapper}>
            <Image source={data} style={{width: 463, height: 219}}/>
		</View>
	);
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export default {
	name: "ModuleImage",
	Component: ModuleImage,
};
