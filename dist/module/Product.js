"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, type, price, amount, date) {
        this._id = 0;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._date = date;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    toString() {
        console.log(` Mã hàng ${this.id}, Tên hàng ${this.name}, Loại hàng ${this.type}, Giá ${this.price}, Số lượng ${this.amount}, Ngày tạo ${this.date} `);
    }
}
exports.Product = Product;
