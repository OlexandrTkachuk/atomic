import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
	render() {
		const { items, onAdd, onShowItem } = this.props;
		return (
			<main>
				{items.map((item) => {
					return (
						<Item
							key={item.id}
							item={item}
							onAdd={onAdd}
							onShowItem={onShowItem}
						/>
					);
				})}
			</main>
		);
	}
}

export default Items;
