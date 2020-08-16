import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: '',
            price: 0,
            gender: 'M',
            products: []
        };
        // this.handleClick= this.handleClick.bind(this) w twalli matessta3mlch el bind melouta
    }
    handleProduct = (event) => {
        this.setState({ product: event.target.value });
    }
    handlePrice = (event) => {
        this.setState({ price: +event.target.value });
        // ?: +: trodo number or parseInt(X,10)
    }
    handleGender = (event) => {
        this.setState({ gender: event.target.value });
    }
    handleClick(event) {
        event.preventDefault();
        const newP = {
            product: this.state.product,
            price: this.state.price,
            gender: this.state.gender
        }
        this.setState({ products: [newP, ...this.state.products] }, () => {
            console.log(this.state.products);
        });
    }
    handleDeleteByName(name) {
        const filtredData = this.state.products.filter(item => item.product !== name);
        this.setState({ products: [...filtredData] });
        console.log(filtredData);
    }
    render() {
        return (
            <div>
                <input onChange={this.handleProduct} type="text" name="product" placeholder="Product" /><br />
                <input onChange={this.handlePrice} type="number" name="price" placeholder="Price" /><br />
                <div onChange={this.handleGender}>
                    H: <input type="radio" name="gender" value="M" defaultChecked /><br />
                    F: <input type="radio" name="gender" value="F" /><br />
                </div>
                {/* 
                bch n3adi parametre this.handleClick.bind(this, arg1,...)
                wela ()=>{this.handleClick(arg1,...)}
                */}
                <button onClick={this.handleClick.bind(this)}>Add</button>
                <br />
                {
                    this.state.products.map((item, index) => {
                        return <div key={index}>
                            {/* {(item.gender === 'M') ?  : <h3>*item: {item.product} / Price: {item.price} / Gender: {item.gender}</h3>} */}
                            {
                                <h3 onClick={this.handleDeleteByName.bind(this, item.product)} >
                                    {(item.gender === 'M') ? "-" : "*"}item: {item.product} / Price: {item.price} / Gender: {(item.gender === 'M') ? "Homme" : "Femme"}
                                </h3>
                            }
                        </div>;
                    })
                }
            </div>
        );
    }
}
export default Todo;