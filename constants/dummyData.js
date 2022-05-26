import {
	ResearchBase_Icon_1,
	ResearchBase_Icon_2,
	ResearchBase_Icon_3,
	ResearchBase_Icon_4,
	ResearchBase_Icon_5,
	ResearchBase_Icon_6,
	Research_2_icon1, Research_2_icon2, Research_2_icon3, Research_2_icon4,
} from "../assets/svg";
import { Navigation_1, Navigation_2, Navigation_3, Navigation_4, Navigation_5 } from "../assets/svg";

const filters = [
	{
		id: 1,
		name: "Космическая биология и биотехнология",
		icon: <ResearchBase_Icon_1 />,
	},
	{
		id: 2,
		name: "Исследование земли и космоса",
		icon: <ResearchBase_Icon_2 />,
	},
	{
		id: 3,
		name: "Физико-химические процессы и материалы в условиях космоса",
		icon: <ResearchBase_Icon_3 />,
	},
	{
		id: 4,
		name: "Человек в космосе",
		icon: <ResearchBase_Icon_4 />,
	},
	{
		id: 5,
		name: "Технологии освоения космического пространства",
		icon: <ResearchBase_Icon_5 />,
	},
	{
		id: 6,
		name: "Образование и популяризация космических исследований",
		icon: <ResearchBase_Icon_6 />,
	},
];

const navigation = [
	{
		id: 1,
		active: "one",
		icon: <Navigation_5 />,
		navigate: "Home",
	},
	{
		id: 2,
		active: "two",
		icon: <Navigation_1 />,
		navigate: "About",
	},
	{
		id: 3,
		active: "three",
		icon: <Navigation_2 />,
		navigate: "Research",
	},
	{
		id: 4,
		active: "four",
		icon: <Navigation_3 />,
		navigate: "ResearchBase",
	},
	{
		id: 5,
		active: "five",
		icon: <Navigation_4 />,
		navigate: "Mks",
	},
];

const research2 = [
	{
		id: "1",
		name: 'Научно-\nфундаментальные',
		icon: <Research_2_icon1/>,
		content: {
			uri: "http://agat.avt.promo/local/templates/cosmos/img/issledovaniya-01-nf.jpg",
			title: "Научно-фундаментальные",
			icon: <Research_2_icon1 />,
			text: "Это глубокое и всестороннее исследование с целью получения новых основополагающих знаний, а также с целью выяснения закономерностей изучаемых явлений.",
		},
	},
	{
		id: "2",
		name: "Технологические",
		icon: <Research_2_icon2/>,
		content: {
			uri: "http://agat.avt.promo/local/templates/cosmos/img/issledovaniya-02-tech.jpg",
			title: "Технологические",
			icon: <Research_2_icon2 />,
			text: "Изучение элементов технологического процесса.",
		},
	},
	{
		id: "3",
		name: "Прикладные",
		icon: <Research_2_icon3/>,
		content: {
			uri: "http://agat.avt.promo/local/templates/cosmos/img/issledovaniya-03-pr.jpg",
			title: "Прикладные",
			icon: <Research_2_icon3 />,
			text: "Используют достижения фундаментальной науки для решения практических задач. Результатом эксперимента является создание и совершенствование новых технологий.",
		},
	},
	{
		id: "4",
		name: "Образовательные",
		icon: <Research_2_icon4/>,
		content: {
			uri: "http://agat.avt.promo/local/templates/cosmos/img/issledovaniya-04-obr.jpg",
			title: "Образовательные",
			icon: <Research_2_icon4 />,
			text: "Изучение исследования явлений и процессов для педагогической системы.",
		},
	},
];

const etaps = [
	{
        number: "Этап 1",
		name: "Программная интерграция КЦР",
		content: [
			{
				id: "1",
				text: "Подача заявки на проведение КЦР",
			},
			{
				id: "2",
				text: "Выдача первичного заключения",
			},
			{
				id: "3",
				text: "Назначение персонального менеджера по сопровождению КЦР",
			},
			{
				id: "4",
				text: "Соглашение о конфиденциальности",
			},
			{
				id: "5",
				text: "ТЭО на КЦР",
			},
			{
				id: "6",
				text: "Заключение НТЭ и категория заявки",
			},
			{
				id: "7",
				text: "Трехстороннее соглашение",
			},
			{
				id: "8",
				text: "Проект ТЗ и исходные данные КЦР",
			},
			{
				id: "9",
				text: "Заключение о технической реализуемости",
			},
			{
				id: "10",
				text: "Заключение о экономической целесообразности",
			},
			{
				id: "11",
				text: "ТЗ на КЦР",
			},
			{
				id: "12",
				text: "Решение о включении КЦР в ДПЦР",
			},
			{
				id: "13",
				text: "Решение о включении КЦР в ЭтПЦР",
			},
			{
				id: "14",
				text: "Контракт на КЦР",
			},
			{
				id: "15",
				text: "Контракты с соисполнителями",
			},
		],
	},
    {
        number: "Этап 2",
		name: "Наземная подготовка",
		content: [
			{
				id: "1",
				text: "ТЗ на НА",
			},
			{
				id: "2",
				text: "Разработка НА",
			},
			{
				id: "3",
				text: "Выпуск программной и методической документации (ПМД)",
			},
			{
				id: "4",
				text: "Планирование проведения КЦР в ЦУП",
			},
			{
				id: "5",
				text: "Подготовка экипажа  и обеспечение планирования КЦР в ЦУП",
			},
			{
				id: "6",
				text: "Подготовка итоговых отчетов  о готовности к провепдению КЦР",
			},
		],
	},
    {
        number: "Этап 3",
		name: "Бортовая реализация",
		content: [
			{
				id: "1",
				text: "Доставка НА на борт РС МКС",
			},
			{
				id: "2",
				text: "Бортовая интеграция НА на РС МКС",
			},
			{
				id: "3",
				text: "Подготовка и проведение КЦР согласно ПМД",
			},
			{
				id: "4",
				text: "Выпуск отчета по результатам КРЦ",
			},
		],
	},
    {   
        number: "Этап 4",
		name: "Анализ результатов и оформление итоговых отчетных документов КЦР",
		content: [
			{
				id: "1",
				text: "Сбор и обработка полученной информации",
			},
			{
				id: "2",
				text: "Передача информации Постановщику КЦР",
			},
			{
				id: "3",
				text: "Выпуск итоговых отчетов",
			},
			{
				id: "4",
				text: "Подготовка информационных материалов для размещения в сводном отчете по выполнению ДПЦР",
			},
            {
				id: "5",
				text: "Хранение результатов КЦР",
			},
		],
	},
];

export default {
	filters,
	navigation,
	research2,
	etaps,
	// quickALinks,
};
