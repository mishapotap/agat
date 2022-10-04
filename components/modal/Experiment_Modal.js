import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView, StatusBar } from "react-native";
import { FONTS } from "../../constants";
import { Modal_CloseButton } from "../../assets/svg";
import HTMLView from 'react-native-htmlview';

const Experiment_Modal = ({ modalVisible, setModalVisible, data }) => {
	// const deleteHTMLTags = /(\<(\/?[^>]+)>)/gm
	const htmlContent = data?.text
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
				<ScrollView showsVerticalScrollIndicator={false} style={{width: '70%'}}>
					<View style={styles.header}>
						<Text style={flattenStyles.title}>{data?.name}</Text>
					</View>
					<View style={{ alignSelf: "center"}}>
						<HTMLView value={htmlContent}/>
						{/* <Text style={flattenStyles.paragraph}>{data?.text?.replace(deleteHTMLTags, " ")}</Text> */}
					</View>
				</ScrollView>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		// borderRadius: 30,
		paddingTop: StatusBar.currentHeight,
	},
	header: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "rgba(0, 0, 0, 0.15)",
		marginBottom: 24,
	},
	close: {
		position: "absolute",
		top: StatusBar.currentHeight + 20,
		right: 20,
		zIndex: 10,
	},
});

const flattenStyles = StyleSheet.flatten({
	title: [FONTS.modalTitle, { marginVertical: 15 }],
	paragraph: [FONTS.modalText, { marginBottom: 24 }],
});

export default Experiment_Modal;
