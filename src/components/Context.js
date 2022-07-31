import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6H-jxvuxUQ9sgkolWJhc6h1y7TdyV-csVvvzNUbZTJKZip_BSjrXuKkcpQviPhHnoheo&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvD6n7jgSX7xxdlBRwsmelU0FvjqGDvr0IbJgsjgQKCO1rN7nr39n9qqQKrlvIjhN3Qis&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2Y6esOMkd-yp3KnRTKCztGH-ggA2u7fXU29fSr7f_z2HpiQF4nUm87BZfuG9k_7GoYk&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/94f2017d-3be3-4d8e-b3a3-a618c443166e/air-presto-mens-shoes-JlLlWz.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bd58ab4-a823-407f-8f1b-9ea8a4c6c03a/air-max-270-mens-shoes-KkLcGR.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaK3enSYqr1Boe4OzZs_qCSjGZHEvz6C3kTy6UJlHir0PuXJ9oiCgt5vxQV3uj7DOOff8&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0

    };

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })

        if (check) {

            const data = products.filter(product => {
                return product._id === id
            })

            this.setState({ cart: [...cart, ...data] })
        }
        else {
            alert("The product have been added to cart")
        }


    }

    reduction = id => {
        const { cart } = this.state
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })

        this.setState({ cart: cart })
        this.getTotal();
    }


    increase = id => {
        const { cart } = this.state
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1
            }
        })

        this.setState({ cart: cart })
        this.getTotal();
    }

    remove = id => {
        if (window.confirm("Do you really want to delete this item ? ")) {
            const { cart } = this.state
            cart.forEach((item, index) => {
                if (item._id == id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart })
            this.getTotal();
        }

    };


    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count)
        }, 0)
        this.setState({ total: res })
    }


    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    }

    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart !== null) {
            this.setState({ cart: dataCart })
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
        if (dataTotal !== null) {
            this.setState({ total: dataTotal })
        }
    }

    render() {
        const { products, cart, total } = this.state;
        const { addCart, reduction, increase, remove, getTotal } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart, reduction, increase, remove, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }

}