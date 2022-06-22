import React, {useState} from "react";
import { Modal, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, dummyData } from "../../constants";
import { mks_1_modalbackground } from "../../constants/images";
import { Mks_1_BackButton, Mks_1_StructureCircle } from "../../assets/svg";
import { MksButton } from "../content";
import { ScrollView } from "react-native-gesture-handler";

const MksScreen_Modal_1 = ({modalVisible, setModalVisible, navigation}) => {
    const [aboutContent, setAboutContent] = useState(false);
    const [structureContent, setStructureContent] = useState(false);
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        supportedOrientations={["landscape"]}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>	
            <View style={styles.centeredView}>
                {/* <ImageBackground style={styles.background} resizeMode={"stretch"} source={mks_1_modalbackground}> */}
                    
                    {aboutContent ? (
                        // О модуле
                        <>
                            <TouchableOpacity style={styles.backButton2} activeOpacity={0.3}	onPress={() => setAboutContent(!aboutContent)}>
                                <Mks_1_BackButton/>
                            </TouchableOpacity>
                            <Text style={styles.buttonText}>О паопвадопвап модуле</Text>
                        </>
                        ) : structureContent ? (
                        // Состав МКС
                            <>
                                <TouchableOpacity style={styles.backButton2} activeOpacity={0.3}	onPress={() => setStructureContent(!structureContent)}>
                                    <Mks_1_BackButton/>
                                </TouchableOpacity>
                                <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%', paddingLeft: 40}}>
                                    <View style={styles.structureTitle}>
                                        <Text style={{fontWeight: '600', fontSize: 20, letterSpacing: 1, color: '#3C70BE'}}>Состав МКС</Text>
                                        
                                    </View>
                                    {dummyData.mksStructure.map((block) => (
                                        <TouchableOpacity key={block.id} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                                            <View style={{justifyContent: "center", alignItems: 'center', marginRight: 20}}>
                                                <Mks_1_StructureCircle/>
                                                <Text style={{position: 'absolute', fontWeight: '700', fontSize: 17, color: '#0066FF'}}>{block.id}</Text>
                                            </View>
                                            <Text style={styles.structureText}>{block.name}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </>
                        )
                        : (
                        // Основное меню
                        <ImageBackground style={styles.background} resizeMode={"stretch"} source={mks_1_modalbackground}>
                            <TouchableOpacity style={styles.backButton}	activeOpacity={0.3}	onPress={() => setModalVisible(!modalVisible)}>
                                <Mks_1_BackButton/>
                            </TouchableOpacity>
                            <View style={{flexDirection: "row", justifyContent: 'space-evenly', width: '80%'}}>
                                <MksButton width={84} height={50} onPressHandler={() => setAboutContent(!aboutContent)}>
                                    <Text style={styles.buttonText}>О модуле</Text>
                                </MksButton>
                                <MksButton width={84} height={50} onPressHandler={() => setStructureContent(!structureContent)}>
                                    <Text style={styles.buttonText}>Состав модуля</Text>
                                </MksButton>
                                <MksButton width={84} height={50} onPressHandler={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.buttonText}>Видео</Text>
                                </MksButton>
                                <MksButton width={84} height={50} onPressHandler={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.buttonText}>Космические исследования</Text>
                                </MksButton>
                            </View>
                        </ImageBackground>

                    )}
			    {/* </ImageBackground> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
        backgroundColor: 'rgba(17, 24, 37, 0.9)',
        paddingVertical: 20,
        paddingHorizontal: 35,
	},
    background: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
    backButton: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
    backButton2: {
		position: 'absolute',
        zIndex: 10,
		top: 30,
		right: 30,
	},
    buttonText: {
        position: 'absolute',
        textAlign: 'center',
        // text
        fontWeight: '400',
        fontSize: 8,
        letterSpacing: 0.5,
        color: COLORS.white,
    },
    structureText: {
        // text
        fontWeight: '500',
        fontSize: 13,
        letterSpacing: 0.9,
        color: COLORS.white,
    },
    structureTitle: {
        width: '100%',
        height: 50,
    }

});

// const flattenStyles = StyleSheet.flatten({
//     title: [FONTS.modalTitle, {marginVertical: 15}],
//     middle: [FONTS.modalTextBold, {marginBottom: 24, alignSelf: 'center', width: 500}],
//     paragraph: [FONTS.modalText, {marginBottom: 24}],
// })

export default MksScreen_Modal_1;