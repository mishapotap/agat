import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ImageBackground, StatusBar } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Modal_CloseButton } from "../../assets/svg";

const Research2_Modal = ({ modalVisible, setModalVisible, content }) => {
	return (
		<Modal
			statusBarTranslucent={true}
			animationType="slide"
			transparent={false}
			visible={modalVisible}
			supportedOrientations={["landscape"]}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}
		>
			<View style={styles.centeredView}>
				<Pressable style={styles.close} onPress={() => setModalVisible(!modalVisible)}>
					<Modal_CloseButton />
				</Pressable>
				<ImageBackground source={{ uri: content.uri }} style={styles.imageBackground}>
					<View backgroundColor={COLORS.black}>
						<Text style={flattenStyles.title}>{content.title}</Text>
						<View style={styles.contentWrap}>
							<View style={styles.icon}>{content.icon}</View>
							<Text style={flattenStyles.text}>{content.text}</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgb(10,20,30)",
		// borderRadius: 30,
	},
	close: {
		position: "absolute",
		top: StatusBar.currentHeight + 20,
		right: 30,
		zIndex: 10,
	},
	imageBackground: {
		width: SIZES.width,
		height: SIZES.height,
		justifyContent: "flex-end",
	},
	contentWrap: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 30,
	},
	icon: {
		margin: 30,
	},
});

const flattenStyles = StyleSheet.flatten({
	title: [FONTS.modalTitleWhite, { width: 500, paddingLeft: 100, marginTop: 20 }],
	text: [FONTS.modalTextBoldWhite, { width: 400 }],
});

export default Research2_Modal;
