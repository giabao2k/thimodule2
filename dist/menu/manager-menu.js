"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const rl = __importStar(require("readline-sync"));
const productManagement_1 = require("../management/productManagement");
const Product_1 = require("../module/Product");
class Menu {
    constructor() {
        this.products = new productManagement_1.ProductManagement();
    }
    menu() {
        console.log('---NHẬP LỰA CHỌN CỦA BẠN---');
        console.log('1. Hiển thị tất cả hàng hóa ');
        console.log('2. Tìm kiếm hàng hoá');
        console.log('3. Thêm 1 mặt hàng mới');
        console.log('4. Chỉnh sửa thông tin của mặt hàng');
        console.log('5. Xoá một mặt hàng khỏi ứng dụng');
        console.log('0. Thoát !!');
    }
    showAllProduct() {
        let listProduct = this.products.getAll();
        console.log(listProduct);
    }
    findProduct() {
        let name = rl.question('Nhập sản phẩm bạn cần tìm ');
        let index = this.products.findByName(name);
        if (index = -1) {
            console.log('Sản phẩm cần tìm không tồn tại ');
        }
        else {
            console.log(this.products.getAll()[index]);
        }
    }
    addName() {
        let name = '';
        let isValidName = true;
        do {
            name = rl.question('Nhập tên sản phẩm mới ');
            let current = this.products.findByName(name);
            if (current != -1) {
                isValidName = false;
                console.log('Tên tài khoản đã tồn tại');
            }
            else {
                isValidName = true;
            }
        } while (!isValidName);
        return name;
    }
    addProduct() {
        let name = this.addName();
        let type = rl.question('Nhập loại hàng ');
        let price = +rl.question('Nhâp giá sản phẩm mới');
        let amount = +rl.question('Nhập số lượng hàng nhập kho ');
        let date = rl.question('Nhập ngày nhập ');
        return new Product_1.Product(name, type, price, amount, date);
    }
    run() {
        let choice = '-1';
        do {
            this.menu();
            choice = rl.question(' Nhâp lựa chọn của bạn ');
            switch (choice) {
                case '1':
                    this.showAllProduct();
                    break;
                case '2':
                    this.findProduct();
                    break;
                case '3':
                    {
                        let product = this.addProduct();
                        this.products.addNewProduct(product);
                        console.log('Thêm sản phẩm thành công');
                    }
                    break;
                case '4':
                    {
                        let name = rl.question('Nhập tên sản phẩm bạn muốn chỉnh sửa ');
                        let product = this.addProduct();
                        this.products.updateProduct(name, product);
                    }
                    break;
                case '5':
                    {
                        let name = rl.question('Nhập tên sản phẩm bạn muốn xóa ');
                        this.products.delProduct(name);
                    }
                    break;
            }
        } while (choice != '0');
    }
}
exports.Menu = Menu;
