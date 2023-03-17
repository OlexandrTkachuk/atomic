import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

const items = [
	{
		id: 1,
		title: "стул серый",
		img: "стул.webp",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "стулья",
		price: "49.99",
	},
	{
		id: 2,
		title: "стол",
		img: "стол.jpg",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "столы",
		price: "149.00",
	},
	{
		id: 3,
		title: "Диван",
		img: "диван.jpg",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "диваны",
		price: "249.00",
	},
	{
		id: 4,
		title: "Шкаф",
		img: "шкаф.webp",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "шкаф",
		price: "329.00",
	},
	{
		id: 5,
		title: "Рабочий стол",
		img: "рабочий-стол.webp",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "столы",
		price: "289.00",
	},
	{
		id: 6,
		title: "Комод",
		img: "комод.jpg",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "комоды",
		price: "129.00",
	},
	{
		id: 7,
		title: "Пуф",
		img: "пуф.jpeg",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "стулья",
		price: "89.00",
	},
	{
		id: 8,
		title: "Кровать",
		img: "кровать.webp",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "кровати",
		price: "176.00",
	},
	{
		id: 9,
		title: "Шкаф",
		img: "шкаф.webp",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!",
		category: "шкаф",
		price: "329.00",
	},
];

class App extends Component {
	state = { items: items };

	render() {
		return (
			<div className="wrapper">
				<Header />
				<Items items={this.state.items} />
				<Footer />
			</div>
		);
	}
}

export default App;
