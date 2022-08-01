import React, {useState} from "react";
import { Modal, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, StatusBar } from "react-native";
import { Video } from "expo-av";
import { COLORS, FONTS, SIZES, dummyData } from "../../constants";
import { mks_1_modalbackground, mks_1_starship, mks_1_starship_left, mks_1_starship_right } from "../../constants/images";
import { Mks_1_BackButton, Mks_1_StructureCircle } from "../../assets/svg";
import { MksButton, ContentModule } from "../content";
import { ScrollView } from "react-native-gesture-handler";
import modules from "../modules";

const ScienceScreen_Modal_1 = ({modalVisible, setModalVisible, navigation}) => {
    const [aboutContent, setAboutContent] = useState(false);
    const [structureContent, setStructureContent] = useState(false);
    const [videoContent, setVideoContent] = useState(false);
    const [structureId, setStructureId] = useState("");
    const [structureContentItem, setStructureContentItem] = useState(false);
    return (
        <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        supportedOrientations={["landscape"]}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>	
            <View style={styles.centeredView}>

                    {aboutContent ? (
                        // О модуле
                        <>
                            <TouchableOpacity style={styles.backButton2} activeOpacity={0.3} onPress={() => setAboutContent(!aboutContent)}>
                                <Mks_1_BackButton/>
                            </TouchableOpacity>
                            <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%', paddingLeft: 40}}>
                                {dummyData.scienceAboutInfo.content.map((item, index) => (
                                    <ContentModule key={index} data={item} modules={modules.base}/>
                                ))}
                            </ScrollView>
                        </>
                        ) : structureContent ? (
                        // Состав МКС
                            <>
                                {structureContentItem ? (
                                    <>
                                        <TouchableOpacity style={styles.backButton2} activeOpacity={0.3} onPress={() => setStructureContentItem(!structureContentItem)}>
                                            <Mks_1_BackButton/>
                                        </TouchableOpacity>
                                        <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%', paddingLeft: 40}}>
                                            {dummyData.scienceStructure[structureId].content.map((item, index) => (
                                                <ContentModule key={index} data={item} modules={modules.base}/>
                                            ))}
                                        </ScrollView>
                                    </>
                                ) : (
                                    <>
                                        <TouchableOpacity style={styles.backButton2} activeOpacity={0.3} onPress={() => setStructureContent(!structureContent)}>
                                            <Mks_1_BackButton/>
                                        </TouchableOpacity>
                                        <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%', paddingLeft: 40}}>
                                            <View style={styles.structureTitle}>
                                                <Text style={{fontWeight: '600', fontSize: 20, letterSpacing: 1, color: '#3C70BE'}}>Внешние компоненты модуля Наука</Text>
                                            </View>
                                            {dummyData.scienceStructure.map((block) => (
                                                <TouchableOpacity key={block.id} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}} 
                                                onPress={() => {
                                                    setStructureId(block.id - 1);
                                                    setStructureContentItem(!structureContentItem)}}>
                                                    <View style={{justifyContent: "center", alignItems: 'center', marginRight: 20}}>
                                                        <Mks_1_StructureCircle/>
                                                        <Text style={{position: 'absolute', fontWeight: '700', fontSize: 17, color: '#0066FF'}}>{block.id}</Text>
                                                    </View>
                                                    <Text style={styles.structureText}>{block.name}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </>
                                )}
                            </>
                        ) : videoContent ? (
                        // Видео
                        <>
                            <TouchableOpacity style={styles.backButton2} activeOpacity={0.3} onPress={() => setVideoContent(!videoContent)}>
                                <Mks_1_BackButton/>
                            </TouchableOpacity>
                            <Video
                                style={styles.videoBackground}
                                source={require("../../assets/video/main.mp4")}
                                resizeMode="cover"
                                useNativeControls
                                isLooping={true}
                                shouldPlay={true}
                            />
                        </>
                        ) : (
                        // Основное меню
                        <ImageBackground style={styles.background} resizeMode={"stretch"} source={mks_1_modalbackground}>
                            <TouchableOpacity style={styles.backButton}	activeOpacity={0.3}	onPress={() => setModalVisible(!modalVisible)}>
                                <Mks_1_BackButton/>
                            </TouchableOpacity>
                            <View style={{flexDirection: "row", justifyContent: 'space-evenly', width: '80%', marginBottom: 50}}>
                                <MksButton width={84} height={50} onPressHandler={() => setAboutContent(!aboutContent)}>
                                    <Text style={styles.buttonText}>О модуле</Text>
                                </MksButton>
                                <MksButton width={84} height={50} onPressHandler={() => setStructureContent(!structureContent)}>
                                    <Text style={styles.buttonText}>Состав модуля</Text>
                                </MksButton>
                                <MksButton width={84} height={50} onPressHandler={() => setVideoContent(!videoContent)}>
                                    <Text style={styles.buttonText}>Видео</Text>
                                </MksButton>
                                <MksButton width={84} height={50} onPressHandler={() => {
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('Research')
                                    }}>
                                    <Text style={styles.buttonText}>Космические исследования</Text>
                                </MksButton>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: 'space-evenly', width: '60%'}}>
                                <MksButton bottomText={"Вид слева"} width={84} height={50} onPressHandler={() => {
                                    setModalVisible(!modalVisible);
                                    // navigation.navigate('Research')
                                    }}>
                                    <Image style={{position: 'absolute', width: 72, height: 40, left: 10, top: 5}} source={mks_1_starship_left}/>
                                </MksButton>
                                <MksButton bottomText={"Общий вид"} width={84} height={50} onPressHandler={() => {
                                    setModalVisible(!modalVisible);
                                    // navigation.navigate('Research')
                                    }}>
                                    <Image style={{position: 'absolute', width: 72, height: 40}} source={mks_1_starship}/>
                                </MksButton>
                                <MksButton bottomText={"Вид справа"} width={84} height={50} onPressHandler={() => {
                                    setModalVisible(!modalVisible);
                                    // navigation.navigate('Research')
                                    }}>
                                    <Image style={{position: 'absolute', width: 72, height: 40, right: 10, top: 5}} source={mks_1_starship_right}/>
                                </MksButton>
                            </View>
                        </ImageBackground>
                    )}
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
        paddingTop: StatusBar.currentHeight,
	},
    videoBackground: {
		position: "absolute",
		width: SIZES.width,
		height: SIZES.height,
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
		top: 20,
		right: 35,
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

export default ScienceScreen_Modal_1;