import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, ScrollView, Image } from "react-native";
import { SIZES, FONTS } from "../constants";
import {about_4_modal} from '../constants/images';
import { Modal_CloseButton } from "../constants/svg";

const About_Modal_4 = ({modalVisible, setModalVisible}) => {
    return (
        <Modal
        // style={{width: SIZES.width, height: SIZES.height}}
        style={{flex: 1, margin: 0}}
        animationType="slide"
        // transparent={false}
        // transparent={true}
        visible={modalVisible}
        supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>	
            <View style={styles.centeredView}>
                {/* <View style={styles.modal}> */}
                    <View style={styles.header}>
                        <Text style={flattenStyles.title}>Ценности космических {"\n"}исследований и экспериментов</Text>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <View style={{backgroundColor: 'blue'}}>
                                <Modal_CloseButton/>
                            </View>
                        </Pressable>
                    </View>
                    <ScrollView>
                        <View style={{alignItems: 'center'}}>
                            <Text style={flattenStyles.middle}>Космические исследования и эксперименты проводятся{"\n"}на Международной космической станции (МКС).</Text>
                            <Text style={flattenStyles.paragraph}>МКС представляет собой многоцелевую исследовательскую лабораторию в которой проводится широкий спектр научно-прикладных исследований и экспериментов различных направлений, отрабатываются новые технологии и испытываются новые материалы, исследуются особенности физических и биологических процессов, проходят наблюдения за земным покровом и атмосферными явлениями, реализуются различные образовательные и популяризаторские проекты.</Text>
                            <Text style={flattenStyles.paragraph}>Особые условия космического полёта, недоступные на Земле и возможность управлять процессом проведения исследований не только с Земли, но и с борта МКС благодаря присутствию на станции человека обеспечивают МКС явное преимущество перед наземными исследовательскими комплексами.</Text>
                            <Text style={flattenStyles.middle}>На Российском сегменте МКС (РС МКС) проводятся{"\n"}исследования по следующим направлениям:</Text>
                            {/* ВСТАВИТЬ */}
                            <Text style={flattenStyles.middle}>Результаты космических исследований на МКС{"\n"}имеют ценность</Text>
                            <Text style={flattenStyles.paragraph}>не только для фундаментальной науки и пилотируемой космонавтики (при подготовке к длительным космическим полётам, в том числе, на другие небесные тела и планеты, а также для дальнейшего освоения космоса человеком).</Text>
                            <Text style={flattenStyles.paragraph}>Уже сегодня определённые методики, технологии, устройства, разработанные для нужд космических пилотируемых полётов, находят практическое применение и в различных сферах деятельности человека на Земле.</Text>
                            <Image style={styles.image} source={about_4_modal}/>
                        </View>
                    </ScrollView>
                {/* </View> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
        backgroundColor: "rgb(220, 220, 220)",
		borderRadius: 30,
	},
	modal: {
        // width: SIZES.width,
		// width: SIZES.width,
		// height: SIZES.height,
		backgroundColor: "rgb(220, 220, 220)",
		borderRadius: 30,
	},
    header: {
        backgroundColor: 'yellow',
        // flex: 1,
        // width: 500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    },
    image: {
        marginBottom: 30,
    },
});

const flattenStyles = StyleSheet.flatten({
    title:  [FONTS.modalTitle, {flex: 1, backgroundColor: 'red'}],
    middle: [FONTS.modalTextBold, {marginBottom: 24, textAlign: 'left', width: 380}],
    paragraph: [FONTS.modalText, {marginBottom: 24, width: 500}],
})

export default About_Modal_4;