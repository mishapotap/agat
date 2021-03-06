import React from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, dummyData } from "../../constants";
import { Modal_BackButton, Modal_CheckBox, Modal_CheckBox_disabled } from "../../assets/svg";

const ResearchBase_Modal_1 = ({ modalVisible, setModalVisible, items, setFilteredItems }) => {
	const filterArray = (filter) => {
		setFilteredItems(
			items.filter((item) => {
				// console.log(item?.PROPERTIES?.spisoknapravisled);
				// console.log(filter);
				// console.log(item?.PROPERTIES?.spisoknapravisled === filter);
				return item?.PROPERTIES?.spisoknapravisled === filter;
			})
		);
	};

	return (
		<Modal
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
					<Modal_BackButton />
				</TouchableOpacity>
				<View style={styles.container}>
					<TouchableOpacity>
						<View style={styles.item}>
							<View style={styles.topBox}>
								<Modal_CheckBox />
							</View>
							<Text style={styles.text}>Текущие</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setFilteredItems([]);
							setModalVisible(!modalVisible);
						}}
					>
						<View style={styles.item}>
							<View style={styles.topBox}>
								<Modal_CheckBox_disabled />
							</View>
							<Text style={styles.text}>Завершенные</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.hr}></View>

					{dummyData.filters.map((filter) => (
						<TouchableOpacity
							key={filter.id}
							onPress={() => {
								filterArray(filter.name);
								setModalVisible(!modalVisible);
							}}
						>
							<View style={styles.item}>
								<View style={styles.box}>{filter.icon}</View>
								<Text style={styles.text}>{filter.name}</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgb(16,28,45)",
		// borderRadius: 30,
	},
	close: {
		position: "absolute",
		top: 30,
		right: 30,
		zIndex: 10,
	},
	container: {
		width: 500,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	item: {
		width: 250,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	hr: {
		height: StyleSheet.hairlineWidth,
		width: "100%",
		backgroundColor: COLORS.white,
		marginVertical: 15,
	},
	topBox: {
		width: 53,
		height: 53,
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		width: 53,
		height: 53,
		borderRadius: 13,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: COLORS.white,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		marginLeft: 15,
		width: 170,
		// text
		fontWeight: "500",
		fontSize: 11,
		lineHeight: 15,
		color: COLORS.white,
	},
});

export default ResearchBase_Modal_1;
