"use strict";
class Item {
    constructor($productName, $sectors, $price, $amount, $dateCreated, $descriptionItem) {
        this.plu = 0;
        this.productName = $productName;
        this.sectors = $sectors;
        this.price = $price;
        this.amount = $amount;
        this.dateCreated = $dateCreated;
        this.descriptionItem = $descriptionItem;
    }
    get $plu() {
        return this.plu;
    }
    get $productName() {
        return this.productName;
    }
    get $sectors() {
        return this.sectors;
    }
    get $price() {
        return this.price;
    }
    get $amount() {
        return this.amount;
    }
    get $dateCreated() {
        return this.dateCreated;
    }
    get $descriptionItem() {
        return this.descriptionItem;
    }
    set $plu(value) {
        this.plu = value;
    }
    set $productName(value) {
        this.productName = value;
    }
    set $sectors(value) {
        this.sectors = value;
    }
    set $price(value) {
        this.price = value;
    }
    set $amount(value) {
        this.amount = value;
    }
    set $dateCreated(value) {
        this.dateCreated = value;
    }
    set $descriptionItem(value) {
        this.descriptionItem = value;
    }
}
