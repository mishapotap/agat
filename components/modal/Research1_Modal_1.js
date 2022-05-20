import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView, Image } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Modal_CloseButton, Research_1_Icon1_big } from "../../assets/svg";
import { research_1_image_1 } from "../../constants/images";

const Research1_Modal_1 = ({modalVisible, setModalVisible}) => {
    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>	
            <View style={styles.centeredView}>
                <Pressable style={styles.close} onPress={() => setModalVisible(!modalVisible)}>
                    <Modal_CloseButton/>
                </Pressable>
                <ScrollView showsVerticalScrollIndicator={false} style={{width: 580}}>
                    <View style={styles.header}>
                        <View style={{alignSelf: 'center'}}><Research_1_Icon1_big/></View>
                        <Text style={flattenStyles.title}>Образование и популяризация{"\n"}космических исследований</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={research_1_image_1}/>
                        </View>
                        <View style={{width: '50%'}}>
                            <Text style={[FONTS.modalTextBoldWhite, {marginBottom: 24}]}>МКС предоставляет уникальную возможность получения новых данных для развития науки и обучения молодежи и специалистов.</Text>
                            <Text style={flattenStyles.paragraph}>Проведение научных экспериментов и тематических уроков из космоса в интересах образования, а также популяризация космических исследований и пропаганда достижений российской космонавтики.</Text>
                        </View>
                    </View>
                    <View style={{width: '100%', marginVertical: 30}}>
                        <Text style={{fontWeight: '600', fontSize: 13, lineHeight: 21, color: COLORS.white, marginBottom: 24}}>Основными целями российской научно-образовательной программы космических экспериментов являются:</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  использование возможностей российского сегмента Международной космической станции для наглядной демонстрации физических законов и явлений;{"\n"}{'\u2022'}  создание условий для привлечения молодежи к самостоятельной научно-исследовательской деятельности под руководством ведущих специалистов предприятий и организаций.</Text>
                        <Text style={{fontWeight: '600', fontSize: 13, lineHeight: 21, color: COLORS.white, marginVertical: 24}}>Реализация предлагаемых экспериментов позволит:</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  повысить качество подготовки молодых специалистов и научных работников аэрокосмического профиля;{"\n"}{'\u2022'}  повысить конкурентоспособность выпускаемых специалистов на рынке труда;{"\n"}{'\u2022'}  увеличить число выпускников вузов, ориентированных на работу после окончания вуза на предприятиях аэрокосмической отрасли и других высокотехнологичных отраслях промышленности;{"\n"}{'\u2022'}  повысить мотивации со стороны студентов проходить целевую подготовку по актуальным научным и техническим направлениям для работы на предприятиях отрасли;{"\n"}{'\u2022'}  повысить научный и педагогический уровень профессорско- преподавательского состава;{"\n"}{'\u2022'}  ввести в общее и высшее образование космическую компоненту;{"\n"}{'\u2022'}  использовать возможности космических систем для обеспечения преподавания дисциплин естественнонаучного профиля;{"\n"}{'\u2022'}  популяризировать достижения космонавтики и повысить престиж космической деятельности.</Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
        backgroundColor: 'rgb(10,20,30)',
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
        position: 'absolute',
        top: 20,
        right: 20,
    },
});

const flattenStyles = StyleSheet.flatten({
    title: [FONTS.modalTitleWhite, {marginVertical: 15}],
    paragraph: [FONTS.modalTextWhite, {marginBottom: 24}],
    listItem: [FONTS.modalListWhite, {paddingLeft: 10}],
})

export default Research1_Modal_1;