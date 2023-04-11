let newOrder = { 
    name: "Pizza",
    price: 90,
    count: 2
}
let user = { 
    name: "Sasha",
    age: 22,
    mail: "Nastya@email.com", 
    orders: [ 
        { 
            name: "IPhone 11", 
            price: 20000,
            count: 1
        },
        { 
            name: "AirPods", 
            price: 7000,
            count: 1
        }
    ],
    sum: 27000
}

user = { 
    ...user,
    orders: [
        ...user.orders,
        {
            ...newOrder
        }
    ],
    sum: user.sum + newOrder.price * newOrder.count,
}

console.log(user)