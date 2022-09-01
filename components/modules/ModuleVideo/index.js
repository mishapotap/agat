import React from "react";
import { Video } from "expo-av";
import { View, StyleSheet } from "react-native";
// import { SIZES } from "../../../constants";

const ModuleVideo = ({ data }) => {
	return (
		<View style={styles.wrapper}>
            <Video
                style={styles.video}
                source={data}
                resizeMode="contain"
                // useNativeControls
                isLooping={true}
                shouldPlay={true}
            />
		</View>
	);
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        // width: SIZES.width,
        // height: SIZES.height * 0.7,
        // width: 463,
        // height: 219,
        width: 337,
        height: 250,
        // 1080 x 800 размер видео
    },
});

export default {
	name: "ModuleVideo",
	Component: ModuleVideo,
};
