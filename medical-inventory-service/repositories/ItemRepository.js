const Item = require('../models/Item');

class ItemRepository {
    async findAll() {
        return await Item.findAll();
    }

    async findById(id) {
        return await Item.findByPk(id);
    }

    async create(itemData) {
        return await Item.create(itemData);
    }

    async update(id, itemData) {
        const item = await this.findById(id);
        if (item) {
            return await item.update(itemData);
        }
        return null;
    }

    async delete(id) {
        const item = await this.findById(id);
        if (item) {
            return await item.destroy();
        }
        return null;
    }
}

module.exports = ItemRepository;
