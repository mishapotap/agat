import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView, Image } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Modal_CloseButton, Research_1_Icon4_big } from "../../assets/svg";
import { research_1_image_4 } from "../../constants/images";

const Research1_Modal_4 = ({modalVisible, setModalVisible}) => {
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
                        <View style={{alignSelf: 'center'}}><Research_1_Icon4_big/></View>
                        <Text style={flattenStyles.title}>Технологии освоения{"\n"}космического пространства</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={research_1_image_4}/>
                        </View>
                        <View style={{width: '50%'}}>
                            <Text style={[FONTS.modalTextBoldWhite, {marginBottom: 24}]}>На МКС проводятся исследования по изучению новых технологий и свойств материалов для будущих космических экспедиций.</Text>
                            <Text style={flattenStyles.paragraph}>Одним из направлений повышения эффективности и снижения стоимости космической деятельности является создание и применение энергодвигательных установок различных типов.</Text>
                        </View>
                    </View>
                    <View style={{width: '100%', marginVertical: 30}}>
                        <Text style={flattenStyles.paragraph}>Исследования, проведенные в области космической энергетики, дают основание надеяться, что в будущем можно будет продемонстрировать работоспособность космической электростанции мощностью 5 МВт, которая, получая электроэнергию с помощью солнечных батарей, передает ее в виде СВЧ-излучения на Землю.</Text>
                        <Text style={flattenStyles.paragraph}>Также существуют проекты создания на солнечно синхронной околоземной орбите группировки из космических электростанций, которая могла бы передавать на Землю гигаватты электроэнергии.</Text>
                        <Text style={flattenStyles.paragraph}>Внедрение результатов технических экспериментов позволяет обеспечить совершенствование и повышение эффективности функционирования бортовых систем РС МКС, использование принципиально новых высоконадежных и пожаробезопасных конструкционных материалов для создания космической техники, обоснованное продление гарантийных сроков ее эксплуатации, отработку методов использования робототехнических устройств и дистанционного управления ими для проведения сложных технических операций на борту космических комплексов, создание средств эффективного получения, накопления и передачи энергии в космосе, а также перспективных двигательных установок, отработку технологии, методов и средств разворачивания крупногабаритных конструкций, создание специального целевого оборудования для обеспечения выполнения перспективных научных исследований.</Text>
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
        zIndex: 10,
    },
});

const flattenStyles = StyleSheet.flatten({
    title: [FONTS.modalTitleWhite, {marginVertical: 15}],
    paragraph: [FONTS.modalTextWhite, {marginBottom: 24}],
})

export default Research1_Modal_4;