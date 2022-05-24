import React from "react";
import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	SafeAreaView,
	ScrollView,
	Image,
} from "react-native";
import { FONTS } from "../../constants";
import { about_4_modal } from "../../constants/images";
import { Modal_CloseButton } from "../../assets/svg";

const Experiment_Modal = ({ modalVisible, setModalVisible }) => {
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
				<ScrollView showsVerticalScrollIndicator={false} style={{ width: "80%" }}>
					<View style={styles.header}>
						<Text style={flattenStyles.title}>
							Ценности космических исследований и экспериментов
						</Text>
					</View>
					<View style={{ alignSelf: "center" }}>
						<Text style={flattenStyles.middle}>
							Космические исследования и эксперименты проводятся на Международной
							космической станции (МКС).
						</Text>
						<Text style={flattenStyles.paragraph}>
							МКС представляет собой многоцелевую исследовательскую лабораторию в
							которой проводится широкий спектр научно-прикладных исследований и
							экспериментов различных направлений, отрабатываются новые технологии и
							испытываются новые материалы, исследуются особенности физических и
							биологических процессов, проходят наблюдения за земным покровом и
							атмосферными явлениями, реализуются различные образовательные и
							популяризаторские проекты.
						</Text>
						<Text style={flattenStyles.paragraph}>
							Особые условия космического полёта, недоступные на Земле и возможность
							управлять процессом проведения исследований не только с Земли, но и с
							борта МКС благодаря присутствию на станции человека обеспечивают МКС
							явное преимущество перед наземными исследовательскими комплексами.
						</Text>
						<Text style={flattenStyles.middle}>
							На Российском сегменте МКС (РС МКС) проводятся исследования по следующим
							направлениям:
						</Text>
						<View style={{ marginBottom: 24 }}>
							<Text style={FONTS.modalList}>
								{"\u2022"} Исследование Земли и космоса
							</Text>
							<Text style={FONTS.modalList}>
								{"\u2022"} Космическая биология и биотехнология
							</Text>
							<Text style={FONTS.modalList}>
								{"\u2022"} Физико-химические процессыи материалы в условиях космоса
							</Text>
							<Text style={FONTS.modalList}>{"\u2022"} Человек в космосе</Text>
							<Text style={FONTS.modalList}>
								{"\u2022"} Технологии освоения космического пространства
							</Text>
							<Text style={FONTS.modalList}>
								{"\u2022"} Образование и популяризация космических исследований
							</Text>
						</View>
						<Text style={flattenStyles.middle}>
							Результаты космических исследований на МКС имеют ценность
						</Text>
						<Text style={flattenStyles.paragraph}>
							не только для фундаментальной науки и пилотируемой космонавтики (при
							подготовке к длительным космическим полётам, в том числе, на другие
							небесные тела и планеты, а также для дальнейшего освоения космоса
							человеком).
						</Text>
						<Text style={flattenStyles.paragraph}>
							Уже сегодня определённые методики, технологии, устройства, разработанные
							для нужд космических пилотируемых полётов, находят практическое
							применение и в различных сферах деятельности человека на Земле.
						</Text>
						<Image style={styles.image} source={about_4_modal} />
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
		backgroundColor: "rgb(220, 220, 220)",
		// borderRadius: 30,
	},
	header: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "rgba(0, 0, 0, 0.15)",
		marginBottom: 24,
	},
	image: {
		marginBottom: 30,
		alignSelf: "center",
	},
	close: {
		position: "absolute",
		top: 20,
		right: 20,
		zIndex: 10,
	},
});

const flattenStyles = StyleSheet.flatten({
	title: [FONTS.modalTitle, { marginVertical: 15 }],
	middle: [FONTS.modalTextBold, { marginBottom: 24, alignSelf: "center", width: 500 }],
	paragraph: [FONTS.modalText, { marginBottom: 24 }],
});

export default Experiment_Modal;
