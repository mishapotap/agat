import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { COLORS, SIZES } from "../constants";
import {ResearchBase_Block_1, ResearchBase_Block_2, Layout} from "../components";
import { researchBase_1_background } from "../constants/images";
import { useNavigation } from '@react-navigation/native';

const ResearchBase = () => {

	const navigation = useNavigation();
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState();
    const [info, setInfo] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const baseUrl = 'https://orbital-science.space';

	useEffect(() => {
		try {
			// let isMounted = true;
			fetch(`${baseUrl}/api/baza-issledovaniy/?PAGEN_1=1`)
			.then(res => res.json())
			.then((result) => {
				// if (isMounted)
				setPageCount(result.NAV_PAGE_COUNT);
				console.log(pageCount)
				setInfo(result.INFO_COUNT);
				},
			(error) => {
				// alert(JSON.stringify(error));
				alert("Нет доступа к базе данных экспериментов. Пожалуйста, проверьте подключение к сети");
				}
			)
		} catch (err) {
			alert("Нет доступа к базе данных экспериментов. Пожалуйста, проверьте подключение к сети");
		}
    }, [])

	useEffect(() => {
		let array = []
		let urls = new Array(pageCount).fill(1).map((element, index) => `https://orbital-science.space/api/baza-issledovaniy/?PAGEN_1=${index+1}`);
		let requests = urls.map(url => fetch(url));
		Promise.all(requests)
		.then(responses => Promise.all(responses.map(r => r.json())))
		.then(responses => {
			responses.map((result) => {
				array.push(...result.ITEMS)
			})
		})
		.then(() => {
			setItems(array)
		});
	}, [pageCount])

	// useEffect(() => {
	// 	filteredItems.length || alert("Нет категорий под выбранный фильтр")
    // }, [filteredItems])

	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground style={styles.background} source={researchBase_1_background}>
					<ResearchBase_Block_1 items={items} info={info} setFilteredItems={setFilteredItems}/>
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
