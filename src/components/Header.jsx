import React, { useEffect } from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header({ orders, onDelete }) {
	const [cartOpen, setCartOpen] = useState(false);

	const handleKeyDown = (event) => {
		if (event.code === "Escape") {
			setCartOpen(!cartOpen);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	const handleBackDrop = (event) => {
		const { target, currentTarget } = event;

		if (target === currentTarget) {
			setCartOpen(!cartOpen);
		}
	}; // не закриває вікно ордерс

	const toggleCartOpen = () => {
		setCartOpen(!cartOpen);
	};

	const showOrders = (orders) => {
		let totalPrice = orders.reduce(
			(acc, order) => acc + Number.parseFloat(order.price),
			0
		);

		return (
			<div>
				{orders.map((order) => {
					return (
						<Order
							key={order.id}
							order={order}
							onDelete={onDelete}
						/>
					);
				})}

				<p className="totalPrice">
					Сума: {new Intl.NumberFormat().format(totalPrice)} &
				</p>
			</div>
		);
	};

	const showNothing = () => {
		return (
			<div className="empty">
				<h2>Товаро нет</h2>
			</div>
		);
	};

	return (
		<header>
			<div>
				<span className="logo">House staff</span>
				<ul className="nav">
					<li>Про нас</li>
					<li>Конкаткы</li>
					<li>Кабинет</li>
				</ul>

				<FaShoppingCart
					onClick={toggleCartOpen}
					className={`shop-cart-button  ${cartOpen && "active"}`}
				/>

				{cartOpen && (
					<div className="shop-cart" onClick={handleBackDrop}>
						{!orders.length ? showNothing() : showOrders(orders)}
					</div>
				)}
			</div>
			<div className="presentation"></div>
		</header>
	);
}
