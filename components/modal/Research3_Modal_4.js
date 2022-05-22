import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, SafeAreaView, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Modal_CloseButton } from "../../assets/svg";

const Research3_Modal_4 = ({modalVisible, setModalVisible}) => {
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
                <ScrollView showsVerticalScrollIndicator={false} style={{width: '80%'}}>
                    <Text style={flattenStyles.title}>Основные роли и функции участников исследований</Text>
                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>Роль</Text>
                            <Text style={styles.itemTitleText}>Организация</Text>
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Уполномоченный орган {"\n"}по космической деятельности</Text>
                            <Text style={styles.subtitleText}>Госкорпорация "Роскосмос"</Text>
                        </View>
                        <Text style={styles.function}>Функции</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  устанавливает показатели эффективности для Оператора ККЭ;{"\n"}{'\u2022'}  контролирует деятельность Оператора ККЭ;{"\n"}{'\u2022'}  подписывает трехсторонние соглашения о намерениях с Оператором ККЭ и Постановщиками ККЭ;{"\n"}{'\u2022'}  подписывает решения о включении ККЭ в ДПЦР;{"\n"}{'\u2022'}  утверждает квоты на выделение ресурсов РС МКС для ККЭ;{"\n"}{'\u2022'}  организует деятельность Комиссии по кооперации;{"\n"}{'\u2022'}  обеспечивает постановку РИД на баланс.</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>Роль</Text>
                            <Text style={styles.itemTitleText}>Организация</Text>
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Постановщик КЦР</Text>
                            <Text style={styles.subtitleText}>Юр.лицо</Text>
                        </View>
                        <Text style={styles.function}>Функции</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  создает или заказывает ЦА (НА);{"\n"}{'\u2022'}  подает заявку на включение ККЭ в ДПЦР;
                        разрабатывает документы, необходимые для обоснования реализуемости и включения ККЭ в ДПЦР;{"\n"}{'\u2022'}  заключает с Оператором ККЭ и Корпорацией трехстороннее соглашение на реализацию проекта ККЭ;{"\n"}{'\u2022'}  согласовывает ТЗ на ККЭ;{"\n"}{'\u2022'}  разрабатывает совместно с Организацией по эксплуатации ТЗ на ЦА (НА);{"\n"}{'\u2022'}  заключает с Оператором ККЭ договор на реализацию ККЭ;{"\n"}{'\u2022'}  заключает договоры с Партнерами по реализации исходя из условий присвоенной категории ККЭ;{"\n"}{'\u2022'}  обеспечивает организацию всех мероприятий в части, касающейся наземной экспериментальной отработки ЦА (НА);{"\n"}{'\u2022'}  разрабатывает совместно с Партнерами по реализации НТД по проведению ККЭ на борту РС МКС;{"\n"}{'\u2022'}  проводит обработку и анализ результатов ККЭ и выпуск отчетов по ККЭ.</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>Роль</Text>
                            <Text style={styles.itemTitleText}>Организация</Text>
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Оператор КЦР</Text>
                            <Text style={styles.subtitleText}>АО «Организация «Агат»</Text>
                        </View>
                        <Text style={styles.function}>Функции</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  осуществляет поиск и привлечение потенциальных Постановщиков ККЭ;{"\n"}{'\u2022'}  организует проведение экспертизы реализуемости ККЭ и интеграцию ККЭ в ДПЦР совместно с Организацией по НТСопр и Организацией по эксплуатации;{"\n"}{'\u2022'}  обеспечивает ранжирование (рейтингование) ККЭ для определения сравнительной приоритетности их реализации;{"\n"}{'\u2022'}  готовит и заключает трехсторонние соглашения с Корпорацией и Постановщиками ККЭ на реализацию ККЭ;{"\n"}{'\u2022'}  заключает договоры с Постановщиками ККЭ, Партнерами по реализации, Организацией по НТСопр, Организацией по эксплуатации на реализацию ККЭ, исходя из условий присвоенной категории ККЭ;{"\n"}{'\u2022'}  согласовывает ТЗ на ККЭ;{"\n"}{'\u2022'}  осуществляет общее управление проектом реализации ККЭ на всех этапах ЖЦ;{"\n"}{'\u2022'}  управляет правами на РИД ККЭ в интересах Корпорации;{"\n"}{'\u2022'}  обеспечивает достижение показателей эффективности деятельности Оператора ККЭ, установленных Корпорацией;{"\n"}{'\u2022'}  представляет в Корпорацию предложения по установлению квот на проведение ККЭ;{"\n"}{'\u2022'}  представляет в Корпорацию отчетность о деятельности Оператора ККЭ;{"\n"}{'\u2022'}  инициирует рассмотрение в Комиссии по кооперации Корпорации вопросов, связанных с возникновением конфликта интересов между участниками ККЭ;{"\n"}{'\u2022'}  участвует в коммерциализации результатов ККЭ (если это установлено договором с Постановщиком ККЭ).</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>Роль</Text>
                            <Text style={styles.itemTitleText}>Организация</Text>
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Организация по эксплуатации</Text>
                            <Text style={styles.subtitleText}>ПАО «РКК «Энергия»</Text>
                        </View>
                        <Text style={styles.function}>Функции</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  осуществляет анализ технической реализуемости ККЭ и выпуск заключения о технической реализуемости;{"\n"}{'\u2022'}  согласует ТЗ на ККЭ;{"\n"}{'\u2022'}  выпускает (совместно с Постановщиком ККЭ) ТЗ на ЦА (НА);{"\n"}{'\u2022'}  сопровождает разработку и испытания ЦА (НА);{"\n"}{'\u2022'}  обеспечивает доставку ЦА (НА) на борт РС МКС;{"\n"}{'\u2022'}  обеспечивает планирование, реализацию и возврат результатов ККЭ с выпуском всех требуемых нормативно-методических документов;{"\n"}{'\u2022'}  проводит экспертизу материалов Оператора ККЭ по обоснованию размера квот на выделение ресурсов для проведения ККЭ;{"\n"}{'\u2022'}  заключает договоры с Оператором ККЭ или Постановщиками ККЭ исходя из условий присвоенной категории ККЭ на оказание услуг по реализации ККЭ;{"\n"}{'\u2022'}  участвует при необходимости в совещаниях Комиссии по кооперации Корпорации.</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>Роль</Text>
                            <Text style={styles.itemTitleText}>Организация</Text>
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Организация по НТСопр.</Text>
                            <Text style={styles.subtitleText}>АО «ЦНИИмаш»</Text>
                        </View>
                        <Text style={styles.function}>Функции</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  организует проведение экспертизы технической реализуемости ККЭ;{"\n"}{'\u2022'}  обеспечивает проведение экспертизы экономической целесообразности проведения ККЭ;{"\n"}{'\u2022'}  разрабатывает ТЗ на ККЭ и обеспечивает его согласование с участниками ККЭ;{"\n"}{'\u2022'}  согласует ТЗ на ЦА (НА);{"\n"}{'\u2022'}  обеспечивает на основании решений Корпорации включение ККЭ в ДПЦР и ЭПЦР;{"\n"}{'\u2022'}  заключает договоры с Оператором ККЭ или Постановщиками ККЭ исходя из условий присвоенной категории ККЭ на оказание услуг по реализации ККЭ;{"\n"}{'\u2022'}  участвует при необходимости в совещаниях Комиссии по кооперации Корпорации.</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.itemTitleText}>Роль</Text>
                            <Text style={styles.itemTitleText}>Организация</Text>
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Организация по ТЭ экспертизе</Text>
                            <Text style={styles.subtitleText}>АО «Организация «Агат»</Text>
                        </View>
                        <Text style={styles.function}>Функции</Text>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  проводит экспертизу экономической целесообразности ККЭ;{"\n"}{'\u2022'}  выдает и направляет заключение в Организацию по НТСопр.</Text>
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
    close: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 10,
    },
    item: {
        marginBottom: 40,
    },
    itemTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: '#232F40',
        height: 50,
        marginBottom: 15,
    },
    itemTitleText: {
        width: '50%',
        // text
        fontWeight: '700',
        fontSize: 11,
        lineHeight: 20,
        letterSpacing: 0.3,
        color: COLORS.white,
    },
    subtitle: {
        flexDirection: 'row',
        paddingHorizontal: 40,
        marginBottom: 20,
    },
    subtitleText: {
        width: "50%",
        // text
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 21,
        color: COLORS.black,
    },
    function: {
        marginBottom: 10,
        // text
        fontWeight: '700',
        fontSize: 11,
        lineHeight: 20,
        letterSpacing: 0.3,
        color: COLORS.black,
    },
});

const flattenStyles = StyleSheet.flatten({
    title: [FONTS.modalTitle, {marginVertical: 15}],
    listItem: [FONTS.modalList, {paddingLeft: 10}],
})

export default Research3_Modal_4;