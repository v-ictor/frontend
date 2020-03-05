export class Product {
    constructor(_id='', name='', price='', category='', stock=''){
        this._id = _id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
    }
    _id: string;
    name: string;
    price: string;
    category: string;
    stock: string
}
