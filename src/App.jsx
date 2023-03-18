import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

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
	state = {
		orders: [],
		items: items,
		currentItems: [],
		showFullItem: false,
		fullItem: {},
	};

	componentDidMount() {
		this.setState({ currentItems: [...this.state.items] });
	}

	addToOrder = (item) => {
		let isInArray = false;

		this.state.orders.forEach((order) => {
			if (order.id === item.id) {
				isInArray = true;
			}
		});

		if (!isInArray) {
			this.setState({ orders: [...this.state.orders, item] });
		}
	};

	deleteFromOrder = (id) => {
		this.setState({
			orders: this.state.orders.filter((order) => order.id !== id),
		});
	};

	chooseCategory = (key) => {
		if (key === "all") {
			this.setState({ currentItems: [...this.state.items] });
			return;
		}

		if (key !== "" && key !== "all") {
			this.setState({
				currentItems: [
					...this.state.items.filter((item) => item.category === key),
				],
			});
		}
	};

	onShowItem = (item) => {
		this.setState({ fullItem: item });
		this.setState({ showFullItem: !this.state.showFullItem });
	};

	onClose = () => {
		this.setState({ showFullItem: !this.state.showFullItem });
	};

	render() {
		const { orders, currentItems, showFullItem, fullItem } = this.state;

		return (
			<div className="wrapper">
				<Header orders={orders} onDelete={this.deleteFromOrder} />
				<Categories chooseCategory={this.chooseCategory} />
				<Items
					items={currentItems}
					onAdd={this.addToOrder}
					onShowItem={this.onShowItem}
				/>

				{showFullItem && (
					<ShowFullItem
						item={fullItem}
						onAdd={this.addToOrder}
						onShowItem={this.onShowItem}
						onClose={this.onClose}
					/>
				)}
				<Footer />
			</div>
		);
	}
}

export default App;
