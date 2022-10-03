import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity, StatusBar } from "react-native";
import { COLORS, dummyData } from "../../constants";
import { Modal_BackButton, Modal_CheckBox, Modal_CheckBox_disabled } from "../../assets/svg";
import { useEffect } from "react";

const ResearchBase_Modal_1 = ({ modalVisible, setModalVisible, items, setFilteredItems }) => {

	const [activeStatus, setActiveStatus] = useState();
	const [activeIcon, setActiveIcon] = useState();

	const filterArray = () => {
		setFilteredItems(
			items.filter((item) => {
				return item?.PROPERTIES?.spisoknapravisled === activeIcon && item?.PROPERTIES?.statusexp === activeStatus 
			})
		);
	};

	useEffect(() => {
		if (activeStatus && activeIcon) {
			filterArray()
			setModalVisible(!modalVisible)
		}
	}, [activeStatus, activeIcon])


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
					<Modal_BackButton />
				</TouchableOpacity>
				<View style={styles.container}>
					<TouchableOpacity onPressIn={() => setActiveStatus("Реализуется")}>
						<View style={styles.item}>
							<View style={styles.topBox}>
								{activeStatus === "Реализуется" ? <Modal_CheckBox /> : <Modal_CheckBox_disabled />} 
							</View>
							<Text style={styles.text}>Реализуются</Text>
						</View>
					</TouchableOpacity>
					{/* <TouchableOpacity onPress={() => { setActive("Завершен"); setFilteredItems([]); setModalVisible(!modalVisible);}}> */}
					<TouchableOpacity onPressIn={() => setActiveStatus("Завершен")}>
						<View style={styles.item}>
							<View style={styles.topBox}>
							{activeStatus === "Завершен" ? <Modal_CheckBox /> : <Modal_CheckBox_disabled />}
							</View>
							<Text style={styles.text}>Завершенные</Text>
						</View>
					</TouchableOpacity>
					{/* Планируемые */}
					<TouchableOpacity onPressIn={() => setActiveStatus("Планируется")}>
						<View style={styles.item}>
							<View style={styles.topBox}>
							{activeStatus === "Планируется" ? <Modal_CheckBox /> : <Modal_CheckBox_disabled />}
							</View>
							<Text style={styles.text}>Планируемые</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.hr}></View>

					{dummyData.filters.map((filter) => (
						<TouchableOpacity
							key={filter.id}
							onPress={() => {
								setActiveIcon(filter.name)
								// filterArray(filter.name);
								// setModalVisible(!modalVisible);
							}}
						>
							<View style={styles.item}>
								<View style={[styles.box, activeIcon === filter.name && {backgroundColor: '#00AAFF'}]}>{filter.icon}</View>
								<Text style={styles.text}>{filter.name}</Text>
							</View>
						</TouchableOpacity>
					))}
					<TouchableOpacity style={styles.buttonWrapper} onPress={() => {
								setActiveStatus()
								setActiveIcon()
								setFilteredItems(items)
								setModalVisible(!modalVisible)
							}}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Сбросить фильтра</Text>
						</View>
					</TouchableOpacity>
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
		paddingTop: StatusBar.currentHeight,
	},
	close: {
		position: "absolute",
		top: 30,
		right: 30,
		zIndex: 10,
	},
	container: {
		width: 660,
		flexDirection: "row",
		flexWrap: "wrap",
		// backgroundColor: 'red',
	},
	item: {
		width: 220,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		// backgroundColor: 'yellow',
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
		width: 140,
		// text
		fontWeight: "500",
		fontSize: 11,
		lineHeight: 15,
		color: COLORS.white,
	},
	buttonWrapper: {
		width: '100%',
		marginTop: 10,
	},
	buttonText: {
		// text
		fontWeight: "500",
		fontSize: 11,
		lineHeight: 15,
		color: COLORS.white,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: 200,
		height: 35,
		borderRadius: 15,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: COLORS.white,
	}
});

export default ResearchBase_Modal_1;
