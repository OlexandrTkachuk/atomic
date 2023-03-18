import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
	render() {
		const { order, onDelete } = this.props;

		return (
			<div className="item">
				<img
					src={`./img/${order.img}`}
					alt={order.title}
					width="300"
					height="auto"
				/>
				<h2>{order.title}</h2>
				<p>{order.price}$</p>
				<FaTrash
					className="delete-icon"
					onClick={() => onDelete(order.id)}
				/>
			</div>
		);
	}
}

export default Order;
