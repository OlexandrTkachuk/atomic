import React, { Component } from "react";

export class Item extends Component {
	render() {
		const { onAdd, item, onShowItem } = this.props;
		return (
			<div className="item">
				<img
					src={`./img/${item.img}`}
					alt={item.title}
					width="300"
					height="auto"
					onClick={() => onShowItem(item)}
				/>
				<h2>{item.title}</h2>
				<p>{item.desc}</p>
				<b>{item.price}$</b>
				<div className="add-to-card" onClick={() => onAdd(item)}>
					+
				</div>
			</div>
		);
	}
}

export default Item;
