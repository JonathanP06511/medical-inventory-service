const ItemRepository = require('../repositories/ItemRepository');

class ItemService {
    constructor() {
        this.itemRepository = new ItemRepository();
    }

    async getAllItems() {
        return await this.itemRepository.findAll();
    }

    async getItemById(id) {
        return await this.itemRepository.findById(id);
    }

    async createItem(itemData) {
        return await this.itemRepository.create(itemData);
    }

    async updateItem(id, itemData) {
        return await this.itemRepository.update(id, itemData);
    }

    async deleteItem(id) {
        return await this.itemRepository.delete(id);
    }
}

module.exports = ItemService;
