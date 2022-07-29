import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView, Image, StatusBar, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Modal_CloseButton, Research_1_Icon2_big } from "../../assets/svg";
import { research_1_image_2 } from "../../constants/images";

const Research1_Modal_2 = ({ modalVisible, setModalVisible }) => {
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
				<ScrollView showsVerticalScrollIndicator={false} style={{ width: 580 }}>
					<View style={styles.header}>
						<View style={{ alignSelf: "center" }}>
							<Research_1_Icon2_big />
						</View>
						<Text style={flattenStyles.title}>
							Космическая биология{"\n"}и биотехнология
						</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<View
							style={{ width: "50%", alignItems: "center", justifyContent: "center" }}
						>
							<Image source={research_1_image_2} />
						</View>
						<View style={{ width: "50%" }}>
							<Text style={[FONTS.modalTextBoldWhite, { marginBottom: 24 }]}>
								В условиях микрогравитации рост и трансформация клеток и тканей
								кардинально отличается от развития и роста на Земле.
							</Text>
							<Text style={flattenStyles.paragraph}>
								Анализ результатов, полученных в области космической биотехнологии
								при реализации предыдущих проектов, позволил определить следующие
								перспективные задачи для проведения работ на МКС на современном
								этапе:
							</Text>
						</View>
					</View>
					<View style={{ width: "100%", marginVertical: 30 }}>
						<Text style={flattenStyles.listItem}>
							{"\u2022"} получение фундаментальных знаний о влиянии факторов
							космического полета на биологические объекты (вирусы, бактерии,
							растительные и животные клетки);{"\n"}
							{"\u2022"} получение биообъектов (вирусов, бактерий, растительных и
							животных клеток) с нужными свойствами для использования их в интересах
							медицины, ветеринарии, растениеводства и биотехнологии;{"\n"}
							{"\n"}
							{"\u2022"} исследование биотехнологических и других процессов
							производства медицинской и биотехнологической продукции с целью
							разработки базовых технологий получения биопродукции в условиях космоса,
							а также совершенствования соответствующих наземных производств;{"\n"}
							{"\n"}
							{"\u2022"} технико-экономическое обоснование целесообразности размещения
							производства биотехнологической продукции в условиях космоса;{"\n"}
							{"\n"}
							{"\u2022"} проведение испытаний научной аппаратуры и оборудования для
							проведения исследований по космической биотехнологии, отработка условий
							и необходимого оборудования для обеспечения проведения
							биотехнологических исследований на пилотируемых космических станциях в
							асептических условиях;{"\n"}
							{"\n"}
							{"\u2022"} изучение биодеградирующего действия микроорганизмов,
							находящихся в атмосфере пилотируемых космических станций, на
							конструкционные элементы станции и находящееся в гермообъеме
							оборудование.
						</Text>
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

const flattenStyles = StyleSheet.flatten({
	title: [FONTS.modalTitleWhite, { marginVertical: 15 }],
	paragraph: [FONTS.modalTextWhite, { marginBottom: 24 }],
	listItem: [FONTS.modalListWhite, { paddingLeft: 10 }],
});

export default Research1_Modal_2;
