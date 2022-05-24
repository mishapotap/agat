import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView, Image } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Modal_CloseButton, Research_1_Icon3_big } from "../../assets/svg";
import { research_1_image_3 } from "../../constants/images";

const Research1_Modal_3 = ({ modalVisible, setModalVisible }) => {
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
							<Research_1_Icon3_big />
						</View>
						<Text style={flattenStyles.title}>Человек в космосе</Text>
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
							<Image source={research_1_image_3} />
						</View>
						<View style={{ width: "50%" }}>
							<Text style={[FONTS.modalTextBoldWhite, { marginBottom: 24 }]}>
								На МКС проводятся исследования о воздействии космических условий на
								организм человека.
							</Text>
							<Text style={flattenStyles.paragraph}>
								С момента освоения человечеством космического пространства возникло
								новое направление знаний – космическая биология и медицина.
							</Text>
						</View>
					</View>
					<View style={{ width: "100%", marginVertical: 30 }}>
						<Text style={flattenStyles.paragraph}>
							За годы своего развития космическая биология внесла крупный вклад в
							успехи фундаментальных наук о жизни, в частности, в гравитационную
							биологию, которая исследует зависимость структуры, функции и поведения
							живых организмов от величины и направления гравитационных воздействий.
						</Text>
						<Text style={flattenStyles.paragraph}>
							Сопоставление реакций биологических объектов, различающихся размерами и
							средой обитания на условия микро-, гипо-, нормо- и гипергравитации
							обогатило науку первыми, но весьма важными сведениями о границах и
							формах проявления их гравитационной зависимости.
						</Text>
						<Text style={flattenStyles.paragraph}>
							Данные гравитационной биологии позволили оценить физиологические,
							медицинские и социальные последствия измененных гравитационных условий,
							с которыми сталкивается человек под воздействием побочных эффектов
							научно-технического прогресса.
						</Text>
						<Text style={flattenStyles.paragraph}>
							Эти же данные вооружают медицинскую науку и здравоохранение информацией
							о перспективных направлениях защиты населения от этих последствий.
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
});

export default Research1_Modal_3;
