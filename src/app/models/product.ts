export default class product {
    name: String;
    description: String;
    quantity: Number;
    price: Number;

    constructor (
        name: String,
        description: String,
        quantity: Number,
        price: Number
    ) {
            this.name = name;
            this.description = description;
            this.quantity = quantity;
            this.price = price;
    }
}