import React from "react";
import { Modal, StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import { SIZES } from "../../constants";
import { Modal_CloseButton } from "../../assets/svg";
import { WebView } from 'react-native-webview';

const Vimeo_Modal = ({ modalVisible, setModalVisible, data }) => {
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
				<View style={{position: 'absolute', height: SIZES.height, width: SIZES.width, zIndex: 10}}>
                    <TouchableOpacity style={styles.close} activeOpacity={0.3} onPress={() => setModalVisible(!modalVisible)}>
						<Modal_CloseButton />
                    </TouchableOpacity>
                    {data && <WebView source={{ uri: data}} />}
                	{/* <WebView source={{ uri: 'https://player.vimeo.com/video/699711201'}} /> */}
                </View>
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
	close: {
		position: "absolute",
		top: StatusBar.currentHeight + 20,
		right: 20,
		zIndex: 10,
	},
});


export default Vimeo_Modal;
