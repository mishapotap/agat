import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView, Image } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Modal_CloseButton, Research_1_Icon6_big } from "../../assets/svg";
import { research_1_image_6 } from "../../constants/images";

const Research1_Modal_6 = ({ modalVisible, setModalVisible }) => {
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
				<Pressable style={styles.close} onPress={() => setModalVisible(!modalVisible)}>
					<Modal_CloseButton />
				</Pressable>
				<ScrollView showsVerticalScrollIndicator={false} style={{ width: 580 }}>
					<View style={styles.header}>
						<View style={{ alignSelf: "center" }}>
							<Research_1_Icon6_big />
						</View>
						<Text style={flattenStyles.title}>Исследования Земли из космоса</Text>
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
							<Image source={research_1_image_6} />
						</View>
						<View style={{ width: "50%" }}>
							<Text style={[FONTS.modalTextBoldWhite, { marginBottom: 24 }]}>
								Нахождение МКС на низкой околоземной орбите позволяет получать
								уникальные данные о Земле и Космосе.
							</Text>
							<Text style={flattenStyles.paragraph}>
								Международная космическая станция осуществляет свой полет на высотах
								350 - 450 км в ионосфере Земли, которая является чувствительным
								индикатором гелиогеофизических явлений, т.е. явлений, происходящих в
								околоземном космическом пространстве, системе «Солнце-Земля» и в
								системе «литосфера-атмосфера».
							</Text>
						</View>
					</View>
					<View style={{ width: "100%", marginVertical: 30 }}>
						<Text style={[FONTS.modalTextBoldWhite, { marginBottom: 24 }]}>
							Космические исследования расширяют и углубляют знания о Земле,
							окружающем мире, закладывают основы для решения фундаментальных научных,
							народнохозяйственных и прикладных проблем.
						</Text>
						<Text style={flattenStyles.paragraph}>
							Исследования, в том числе и в обеспечение планетных миссий,
							осуществляются оптическими и ИК- методами наблюдений с помощью
							телескопов, размещаемых на борту МКС.
						</Text>
						<Text style={flattenStyles.paragraph}>
							Завершены и выполняются несколько научных экспедиций к Марсу, Венере,
							астероидам, спутникам Юпитера и в систему Сатурна. Сделаны новые
							открытия, появилось много новых научных данных. Ведущими державами в
							области космонавтики рассматриваются стратегии полетов человека на Луну
							и Марс. В случае полета на Марс концепция мониторинга с орбиты Земли,
							актуальная в конце 90-х гг., уступает место валидации с борта МКС
							измерений КА на орбите Марса, поддержке будущих пилотируемых экспедиций.
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
		top: 20,
		right: 20,
		zIndex: 10,
	},
});

const flattenStyles = StyleSheet.flatten({
	title: [FONTS.modalTitleWhite, { marginVertical: 15 }],
	paragraph: [FONTS.modalTextWhite, { marginBottom: 24 }],
	listItem: [FONTS.modalListWhite, { paddingLeft: 10 }],
});

export default Research1_Modal_6;
