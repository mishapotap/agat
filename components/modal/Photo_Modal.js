import React from "react";
import { Modal, StyleSheet, View, StatusBar, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { SIZES, COLORS } from "../../constants";
import { Modal_CloseButton } from "../../assets/svg";

const Photo_Modal = ({ modalVisible, setModalVisible, data }) => {
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
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: "100%" }}>
						<View style={styles.container}>
							{data && data.map((image) => (
								<View style={styles.item}>
									<Image source={{uri:`https://agat.avt.promo/${image.SRC}`}} style={styles.image}></Image>
									<Text style={styles.text}>{image.DESCRIPTION}</Text>
								</View>
							))}
						</View>
					</ScrollView>
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
	container: {
		flexDirection: "row",
		width: '100%',
		height: '100%',
		// alignItems: "center",
		// height: 250,
		paddingLeft: 30,
	},
	item: {
		width: 380,
		height: '100%',
		paddingTop: 30,
		// justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		paddingHorizontal: 10,
	},
	image: {
		// width: 526,
		// height: 580,
		width: 229,
		height: 252,
	},
	text: {
		paddingTop: 10,
		// text
		fontWeight: '500',
		fontSize: 11,
		lineHeight: 15,
		color: COLORS.black,
	}
});


export default Photo_Modal;
