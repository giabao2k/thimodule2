"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemManagement = void 0;
class ItemManagement {
    getAll() {
        return ItemManagement.items;
    }
    createNew(t) {
        ItemManagement.plu++;
        t.$plu = ItemManagement.plu;
        ItemManagement.items.push(t);
    }
    updateByPlu(plu, t) {
        let indexUpdate = this.findByPlu(plu);
        if (indexUpdate !== -1) {
            ItemManagement.items[indexUpdate] = ;
        }
    }
    removeByPlu(plu, t) {
        throw new Error("Method not implemented.");
    }
    findByName(productName) {
        for (let i = 0; i < ItemManagement.items.length; i++) {
            if (ItemManagement.items[i].$productName === productName) {
                return productName;
            }
        }
        return '';
    }
    findByPlu(plu) {
        let index = -1;
        for (let i = 0; i < ItemManagement.items.length; i++) {
            if (ItemManagement.items[i].$plu == plu) {
                index = i;
            }
        }
        return index;
    }
}
exports.ItemManagement = ItemManagement;
ItemManagement.items = [];
ItemManagement.plu = 0;
