import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, ScrollView, Image } from "react-native";
import { SIZES, FONTS } from "../constants";
import {about_4_modal} from '../constants/images';
import { Modal_CloseButton } from "../constants/svg";

const ModalWhite = () => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<Modal
				// style={{width: SIZES.width, height: SIZES.height}}
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>	
				<View style={styles.centeredView}>
						<SafeAreaView style={styles.modalView}>
							<View style={{ flexDirection: 'row', alignItems: 'center'}}>
								<Text style={[FONTS.modalTitle, {flex: 1}]}>Ценности космических {"\n"}исследований и экспериментов</Text>
								<Pressable onPress={() => setModalVisible(!modalVisible)}>
									<View style={{}}>
										<Modal_CloseButton/>
									</View>
								</Pressable>
							</View>
							<View style={{width: '100%', height: StyleSheet.hairlineWidth, backgroundColor: 'rgba(0, 0, 0, 0.15)'}}></View>
							<ScrollView>
								<View style={{alignItems: 'center'}}>
									<Text style={[FONTS.modalTextBold, {marginBottom: 24, textAlign: 'left'}]}>Космические исследования и эксперименты проводятся{"\n"}на Международной космической станции (МКС).</Text>
									<Text style={[FONTS.modalText, {marginBottom: 24, width: 500}]}>МКС представляет собой многоцелевую исследовательскую лабораторию в которой проводится широкий спектр научно-прикладных исследований и экспериментов различных направлений, отрабатываются новые технологии и испытываются новые материалы, исследуются особенности физических и биологических процессов, проходят наблюдения за земным покровом и атмосферными явлениями, реализуются различные образовательные и популяризаторские проекты.</Text>
									<Text style={[FONTS.modalText, {marginBottom: 24, width: 500}]}>Особые условия космического полёта, недоступные на Земле и возможность управлять процессом проведения исследований не только с Земли, но и с борта МКС благодаря присутствию на станции человека обеспечивают МКС явное преимущество перед наземными исследовательскими комплексами.</Text>
									<Text style={[FONTS.modalTextBold, {marginBottom: 24, textAlign: 'left', width: 380}]}>На Российском сегменте МКС (РС МКС) проводятся{"\n"}исследования по следующим направлениям:</Text>
									{/* ВСТАВИТЬ */}
									<Text style={[FONTS.modalTextBold, {marginBottom: 24, textAlign: 'left', width: 380}]}>Результаты космических исследований на МКС{"\n"}имеют ценность</Text>
									<Text style={[FONTS.modalText, {marginBottom: 24, width: 500}]}>не только для фундаментальной науки и пилотируемой космонавтики (при подготовке к длительным космическим полётам, в том числе, на другие небесные тела и планеты, а также для дальнейшего освоения космоса человеком).</Text>
									<Text style={[FONTS.modalText, {marginBottom: 24, width: 500}]}>Уже сегодня определённые методики, технологии, устройства, разработанные для нужд космических пилотируемых полётов, находят практическое применение и в различных сферах деятельности человека на Земле.</Text>
									<Image style={{marginBottom: 10}} source={about_4_modal}/>
								</View>
							</ScrollView>
						</SafeAreaView>
				</View>
			</Modal>
			<Pressable onPress={() => setModalVisible(true)}>
				<View style={{marginTop: 20, justifyContent: 'center', width: 370, height: 33, borderColor: 'rgba(0, 170, 255, 0.47)', borderWidth: 1, borderRadius: 13}}>
					<Text style={{textAlign: 'center', fontWeight: '400', fontSize: 11,lineHeight: 14, letterSpacing: 0.4, color: "rgba(255, 255, 255, 0.65)"}}>Ценности исследований и экспериментов в космосе</Text>
				</View>
			</Pressable>
		</>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		backgroundColor: "rgb(220, 220, 220)",
		borderRadius: 30,
		width: SIZES.width,
		height: SIZES.height,
	},
});

export default ModalWhite;
