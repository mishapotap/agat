import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Modal_CloseButton, Research_3_1, Research_3_2, Research_3_3, Research_3_4 } from "../../assets/svg";
import * as Linking from 'expo-linking';

const Research3_Modal_3 = ({modalVisible, setModalVisible}) => {
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
                    <View style={styles.header}>
                        <Text style={flattenStyles.title}>Участники реализации космических исследований</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemHeader}>
                            <Research_3_1/>
                            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
                                <Text style={FONTS.modalTextBold}>Госкорпорация «Роскосмос»</Text>
                                <Pressable onPress={() => Linking.openURL('https://www.roscosmos.ru/')}>
                                    <Text style={styles.link}>www.roscosmos.ru</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Text style={flattenStyles.paragraph}>Роскосмос — государственная корпорация, созданная в августе 2015 года для проведения комплексной реформы ракетно-космической отрасли России.</Text>
                        <Text style={flattenStyles.paragraph}>Госкорпорация «Роскосмос» обеспечивает реализацию государственной политики в области космической деятельности и ее нормативно-правовое регулирование, а также размещает заказы на разработку, производство и поставку космической техники и объектов космической инфраструктуры.</Text>
                        <Text style={flattenStyles.paragraph}>В функции государственной корпорации также входит развитие международного сотрудничества в космической сфере и создание условий для использования результатов космической деятельности в социально-экономическом развитии России.</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemHeader}>
                            <Research_3_2/>
                            <View style={{paddingLeft: 55, justifyContent: 'center'}}>
                                <Text style={FONTS.modalTextBold}>«Организация «Агат»</Text>
                                <Pressable onPress={() => Linking.openURL('https://www.agat-roscosmos.ru/')}>
                                    <Text style={styles.link}>www.agat-roscosmos.ru</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Text style={flattenStyles.paragraph}>Акционерное общество «Организация «Агат» является головной экономической научно-исследовательской организацией ракетно-космической промышленности с 1973 года. Акционерное общество «Организация «Агат» – участник практически всех национальных и международных космических программ.</Text>
                        <Text style={flattenStyles.paragraph}>В настоящее время АО «Организация «Агат» принадлежит головная роль в системных исследованиях экономических проблем, связанных с развитием, разработкой и производством ракетно-космической техники, технико-экономическим обоснованием федеральных космических программ, ценообразованием в сфере ГОЗ, проведением независимой экономической экспертизы проектов вновь создаваемых и модернизируемых средств ракетно-космической техники.</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemHeader}>
                            <Research_3_3/>
                            <View style={{paddingLeft: 20, justifyContent: 'center'}}>
                                <Text style={FONTS.modalTextBold}>Предприятия «ЦНИИмаш»</Text>
                                <Pressable onPress={() => Linking.openURL('https://tsniimash.ru/#1')}>
                                    <Text style={styles.link}>www.tsniimash.ru</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Text style={flattenStyles.paragraph}>Центральный научно-исследовательский институт машиностроения (ЦНИИмаш) – головное предприятие Государственной корпорации по космической деятельности «Роскосмос». ЦНИИмаш занимает ведущее положение в космической инфраструктуре России.</Text>
                        <Text style={flattenStyles.middle}>В состав предприятия входят:</Text>
                        <Text style={flattenStyles.paragraph}>{'\u2022'} Центр управления полётами (ЦУП) – крупное научно-исследовательское подразделение АО «ЦНИИмаш», базовый центр управления космическими полётами Госкорпорации «Роскосмос».</Text>
                        <Text style={flattenStyles.paragraph}>{'\u2022'} Филиал АО «ЦНИИмаш» «Научно-исследовательский институт космоаэрогеологических методов».</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemHeader}>
                            <Research_3_4/>
                            <View style={{paddingLeft: 20, justifyContent: 'center'}}>
                                <Text style={FONTS.modalTextBold}>«РКК «Энергия»</Text>
                                <Pressable onPress={() => Linking.openURL('https://www.energia.ru/')}>
                                    <Text style={styles.link}>www.energia.ru</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Text style={flattenStyles.paragraph}>ПАО "РКК "Энергия" осуществляет деятельность в ракетно-космической отрасли начиная с 1946 года - с даты образования коллектива разработчиков баллистических ракет дальнего действия во главе с Главным конструктором ракетно-космических систем и основоположником практической космонавтики С.П. Королёвым.</Text>
                        <Text style={flattenStyles.paragraph}>Предприятие стало родоначальником практически всех направлений отечественной ракетной и космической техники.</Text>
                        <Text style={flattenStyles.paragraph}>Сегодня ПАО "РКК "Энергия" - ведущее российское ракетно-космическое предприятие, головная организация по пилотируемым космическим системам. Ведёт работы по созданию автоматических космических и ракетных систем (средств выведения и межорбитальной транспортировки), высокотехнологичных систем различного назначения для использования в некосмических сферах.</Text>
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
    },
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        marginBottom: 24,
    },
    itemHeader: {
        flexDirection: 'row',
        marginBottom: 34,
        alignItems: 'center',
    },
    link: {
        // text
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.4,
        color: COLORS.blueText,
    },
});

const flattenStyles = StyleSheet.flatten({
    title: [FONTS.modalTitle, {marginVertical: 15}],
    middle: [FONTS.modalTextBold, {marginBottom: 24, alignSelf: 'center', width: 500}],
    paragraph: [FONTS.modalText, {marginBottom: 24}],
})

export default Research3_Modal_3;