import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, ImageBackground } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Modal_CloseButton, Research_2_icon2 } from "../../assets/svg";

const Research2_Modal_2 = ({modalVisible, setModalVisible}) => {
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
                <ImageBackground source={{ uri: "http://agat.avt.promo/local/templates/cosmos/img/issledovaniya-02-tech.jpg" }} style={{ width: SIZES.width, height: SIZES.height, justifyContent: 'flex-end'}}>
                    <View backgroundColor={COLORS.black}>
                        <Text style={[FONTS.modalTitleWhite, {width: 500, paddingLeft: 100, marginTop: 20}]}>Технологические</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 30}}>
                            <View style={styles.icon}>
                                <Research_2_icon2/>
                            </View>
                            <Text style={[FONTS.modalTextBoldWhite, {width: 400}]}>Изучение элементов технологического процесса.</Text>
                        </View>
                    </View>
                </ImageBackground>
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
    close: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 10,
    },
    icon: {
        margin: 30,
    }
});

export default Research2_Modal_2;