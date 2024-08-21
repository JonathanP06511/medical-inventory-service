const ItemService = require('../services/ItemService');

class ItemController {
    constructor() {
        this.itemService = new ItemService();
    }

    async getAllItems() {
        return await this.itemService.getAllItems();
    }

    async getItemById({ id }) {
        return await this.itemService.getItemById(id);
    }

    async createItem({ data }) {
        return await this.itemService.createItem(data);
    }

    async updateItem({ id, data }) {
        return await this.itemService.updateItem(id, data);
    }

    async deleteItem({ id }) {
        return await this.itemService.deleteItem(id);
    }
}

module.exports = ItemController;
