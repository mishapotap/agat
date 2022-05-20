import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Modal_CloseButton } from "../../assets/svg";

const Research3_Modal_1 = ({modalVisible, setModalVisible}) => {
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
                <ScrollView showsVerticalScrollIndicator={false} style={{width: "80%"}}>
                    <View style={styles.header}>
                        <Text style={flattenStyles.title}>Порядок проведения космических исследований и экспериментов на РС МКС</Text>
                    </View>
                    <View style={{alignSelf: 'center', marginBottom: 30}}>
                        <Text style={flattenStyles.middle}>Порядок реализации космических исследований и экспериментов состоит из следующих действий</Text>
                        <Text style={styles.point}>1. Регистрация на сайте</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  После регистрации, будет предоставлен доступ в Личный кабинет для дальнейшей работы над проведением исследований и экспериментов.</Text>
                        <Text style={styles.point}>2. Выполнение исследования и эксперимента</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  В личном кабинете необходимо оформить заполнить форму заявки и научно-технического обоснования эксперимента.</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  После рассмотрения заявки и научно-технического обоснования, направляется заключение о проведении первичной экспертизы технической реализуемости и назначен персональный менеджер.</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  Далее подписывается соглашение о конфиденциальности и направляется технико-экономическое обоснование предлагаемого эксперимента. Формируется пакте договорных документов.</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  Разрабатывается техническое задание на проведение эксперимента, осуществляется анализ технической реализуемости эксперимента, формируется итоговое заключение.</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  Проводится по технико-экономическая экспертиза экономической целесообразности эксперимента, формируется итоговое заключение.</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  Утверждается техническое задание, эксперимент включается в план работ на борту МКС (ДПЦР).</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  В соответствии с договором и разработанной документацией выполняется исследование, эксперимент на борту МКС.</Text>
                        <Text style={styles.point}>3. Результат проведённого исследования и эксперимента</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  В завершающей стадии предоставляется итоговый отчет с полученными результатами и отчетные документы.</Text>
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
        backgroundColor: "rgb(220, 220, 220)",
		// borderRadius: 30,
	},
    header: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        marginBottom: 24,
    },
    point: {
        marginBottom: 24,
        // text
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 28,
        letterSpacing: 0.7,
        color: COLORS.black,
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
});

const flattenStyles = StyleSheet.flatten({
    listItem: [FONTS.modalList, {marginBottom: 8, paddingLeft: 30}],
    title: [FONTS.modalTitle, {marginVertical: 15}],
    middle: [FONTS.modalTextBold, {marginBottom: 24, alignSelf: 'center', width: 500}],
})

export default Research3_Modal_1;