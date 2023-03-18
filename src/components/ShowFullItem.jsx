import React, { Component } from "react";

export class ShowFullItem extends Component {
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (event) => {
		if (event.code === "Escape") {
			this.props.onClose();
		}
	};

	handleBackdropClick = (event) => {
		const { target, currentTarget } = event;

		if (target === currentTarget) {
			this.props.onClose();
		}
	}; 

	render() {
		const { item, onAdd } = this.props;

		return (
			<div className="full-item" onClick={this.handleBackdropClick}>
				<div>
					<img
						src={`./img/${item.img}`}
						alt={item.title}
						height="auto"
					/>
					<h2>{item.title}</h2>
					<p>{item.desc}</p>
					<b>{item.price}$</b>
					<div className="add-to-card" onClick={() => onAdd(item)}>
						+
					</div>
				</div>
			</div>
		);
	}
}

export default ShowFullItem;
