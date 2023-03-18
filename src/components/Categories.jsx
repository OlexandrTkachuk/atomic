import React, { Component } from "react";

const categories = [
	{
		key: "all",
		name: "Всё",
	},
	{
		key: "стулья",
		name: "Стулья",
	},
	{
		key: "столы",
		name: "Столы",
	},
	{
		key: "диваны",
		name: "Диваны",
	},
	{
		key: "шкаф",
		name: "Шкаф",
	},
	{
		key: "комоды",
		name: "Комоды",
	},
	{
		key: "кровати",
		name: "Кровати",
	},
];

export class Categories extends Component {
	state = {
		categories: categories,
	};

	render() {
		const { categories } = this.state;
		const { chooseCategory } = this.props;

		return (
			<div className="categories">
				{categories.map(({ name, key }) => {
					return (
						<div key={key} onClick={() => chooseCategory(key)}>
							{name}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Categories;
