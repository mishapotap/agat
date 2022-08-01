import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View, ScrollView, StatusBar } from "react-native";
import { COLORS, dummyData } from "../../constants";
import { Modal_CloseButton } from "../../assets/svg";
import { ContentModule } from "../content";
import modules from "../modules";

const Research1_Modal = ({ modalVisible, setModalVisible, itemContent }) => {
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
				<TouchableOpacity style={styles.close} onPress={() => setModalVisible(!modalVisible)}>
					<Modal_CloseButton />
				</TouchableOpacity>
				<ScrollView showsVerticalScrollIndicator={false} style={{ width: "80%" }}>
					{dummyData.research1[itemContent].content.map((item, index) => (
						<ContentModule key={index} data={item} modules={modules.base}/>
					))}
				</ScrollView>
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
		paddingTop: StatusBar.currentHeight,
	},
	header: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: COLORS.white,
		marginBottom: 24,
		paddingVertical: 20,
		// alignItems: 'center',
	},
	close: {
		position: "absolute",
		top: StatusBar.currentHeight + 20,
		right: 20,
		zIndex: 10,
	},
});


export default Research1_Modal;