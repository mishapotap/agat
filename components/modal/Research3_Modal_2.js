import React from "react";
import { Modal,	StyleSheet,	Text, View, ScrollView,	TouchableOpacity, StatusBar } from "react-native";
import { COLORS, FONTS, dummyData } from "../../constants";
import { About_1_arrow, Modal_CloseButton } from "../../assets/svg";

const Research3_Modal_2 = ({ modalVisible, setModalVisible }) => {
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
				<View style={styles.header}>
					<Text style={flattenStyles.title}>
						Этапы жизненного цикла космических исследований
					</Text>
				</View>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: "100%"}}>
					<View style={styles.container}>
					{dummyData.etaps.map((etap) => (
						<View key={etap.name} style={styles.etap}>
							<View style={styles.etapTitle}>
								<Text style={styles.etapTitleText}><Text style={{color: "#0066FF"}}>{etap.number}. </Text>{etap.name}</Text>
								<About_1_arrow/>
							</View>
							<View style={styles.etapTimeline}>
								{etap.content.map((item) => (
									<View key={item.id} style={{flexDirection: "row", width: 170, height: 240, alignItems: (item.id % 2) ? 'flex-end' : 'flex-start'}}>
										<Text style={styles.timelineItemNumber}>{item.id}</Text>
										<Text style={styles.timelineText}>{item.text}</Text>
										<View style={[styles.timelineHr, {top: (item.id % 2) ? null : 90, bottom: (item.id % 2) ? 90 : null}]}></View>
										<View style={styles.timelineHrMain}></View>
										<View style={styles.timelineCircle}></View>
									</View>
								))}
							</View>
						</View>
					))}
					</View>
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
		backgroundColor: COLORS.white,
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
		right: 30,
		zIndex: 10,
	},
	container: {
		flexDirection: "row",
		alignItems: "center",
		height: 250,
		marginLeft: 70,
	},
	etap: {
		marginRight:  150,
	},
	etapTitle: {
		alignItems: 'center',
		flexDirection: "row",
		marginBottom: 30,
	},
	etapTitleText: {
		marginRight: 15,
		// text
		fontWeight: '600',
		fontSize: 15,
		lineHeight: 18,
		letterSpacing: 0.5,
		color: COLORS.black,
	},
	etapTimeline: {
		flexDirection: "row",
	},
	
	timelineText: {
		height: 90,
		// text
		fontWeight: '500',
		fontSize: 11,
		lineHeight: 15,
		color: COLORS.black,
	},
	timelineHr: {
		position: 'absolute',
		left: 15,
		// bottom: 70,
		// top: 70,
		height: 15,
		marginVertical: 8,
		width: StyleSheet.hairlineWidth,
		backgroundColor: COLORS.black,
	},
	timelineHrMain: {
		position: 'absolute',
		top: 120,
		width: '100%',
		height: StyleSheet.hairlineWidth,
		backgroundColor: COLORS.black,
	},
	timelineCircle: {
		position: 'absolute',
		left: 11.5,
		top: 116.5,
		width: 7,
		height: 7,
		borderRadius: 50,
		backgroundColor: "#7D7D7D",
	},
	timelineItemNumber: {
		height: 90,
		marginRight: 10,
		// text
		fontWeight: '500',
		fontSize: 11,
		lineHeight: 15,
		color: "#0066FF",
	},
});

const flattenStyles = StyleSheet.flatten({
	title: [FONTS.modalTitle, { marginVertical: 15 }],
});

export default Research3_Modal_2;
