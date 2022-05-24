import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { COLORS, SIZES } from "../constants";
import {ResearchBase_Block_1, ResearchBase_Block_2, Layout} from "../components";
import { researchBase_1_background } from "../constants/images";
import { useNavigation } from '@react-navigation/native';

const ResearchBase = () => {

	const navigation = useNavigation();
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const baseUrl = 'https://agat.avt.promo';

	useEffect(() => {
        fetch(`${baseUrl}/api/baza-issledovaniy/`)
        .then(res => res.json())
        .then((result) => {
            setItems(result.ITEMS);
			// setFilteredItems(result.ITEMS);
            },
        (error) => {
            alert(JSON.stringify(error));
            }
        )
    }, [])

	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground style={styles.background} source={researchBase_1_background}>
					<ResearchBase_Block_1 items={items} setFilteredItems={setFilteredItems}/>
				</ImageBackground>

				<View style={{width: SIZES.width, backgroundColor: 'rgb(28, 28, 28)'}}>
					<ResearchBase_Block_2 navigation={navigation} baseUrl={baseUrl} filteredItems={filteredItems.length ? filteredItems : items}/>
				</View>
			</ScrollView>
		</Layout>
	);
};

const styles = StyleSheet.create({
	background: {
		width: SIZES.width,
		height: SIZES.height,
	},
});

export default ResearchBase;
