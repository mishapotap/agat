import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView, Image } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Modal_CloseButton, Research_1_Icon5_big } from "../../assets/svg";
import { research_1_image_5 } from "../../constants/images";

const Research1_Modal_5 = ({modalVisible, setModalVisible}) => {
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
                        <View style={{alignSelf: 'center'}}><Research_1_Icon5_big/></View>
                        <Text style={flattenStyles.title}>Физико-химические процессы{"\n"}и материалы в условиях космоса</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={research_1_image_5}/>
                        </View>
                        <View style={{width: '50%'}}>
                            <Text style={[FONTS.modalTextBoldWhite, {marginBottom: 24}]}>Физические и химические свойства и процессы в условиях микрогравитации изменяются и полученные данные применяются в различных сферах.</Text>
                            <Text style={flattenStyles.paragraph}>Программа исследований и экспериментов по данному направлению включает эксперименты по следующим областям исследований:</Text>
                        </View>
                    </View>
                    <View style={{width: '100%', marginVertical: 30}}>
                        <Text style={flattenStyles.listItem}>{'\u2022'}  рост кристаллов;{"\n"}{'\u2022'}  синтез полупроводниковых эпитаксиальных гетероструктур;{"\n"}{'\u2022'}  процессы получения новых материалов;{"\n"}{'\u2022'}  процессы возникновения упорядоченных структур, невозможные или затрудненные в условиях гравитации;{"\n"}{'\u2022'}  физика горения и синтеза в условиях космоса;{"\n"}{'\u2022'}  физика жидкости, фазовых переходов и явления переноса;{"\n"}{'\u2022'}  физика низких температур.</Text>
                        <Text style={flattenStyles.paragraph}>{"\n"}Данные о физических условиях в космическом пространстве на орбите МКС важны как для исследования собственно околоземного космического пространства на этих высотах, так и, главным образом, для практических целей космонавтики.</Text>
                        <Text style={flattenStyles.paragraph}>Поэтому здесь главной задачей является изучение процесса взаимодействия, влияния на МКС факторов околоземного космического пространства.</Text>
                        <Text style={flattenStyles.paragraph}>Исследования радиационной, электромагнитной обстановки на орбите, собственной внешней атмосферы станции нужны для оценки их влияния на безопасность экипажа, космическую аппаратуру и материалы станции.</Text>
                        <Text style={flattenStyles.paragraph}>Эти эксперименты, как правило, носят комплексный характер, в них участвуют ученые из разных областей науки: медицины, физики космических лучей, геофизики, материаловедения, а также разработчики космической техники.</Text>
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
    listItem: [FONTS.modalListWhite, {paddingLeft: 10}],
})

export default Research1_Modal_5;