const ItemController = require('../controllers/ItemController');
const itemController = new ItemController();

const resolvers = {
    Query: {
        getAllItems: () => itemController.getAllItems(),
        getItemById: (_, { id }) => itemController.getItemById({ id }),
    },
    Mutation: {
        createItem: (_, { data }) => itemController.createItem({ data }),
        updateItem: (_, { id, data }) => itemController.updateItem({ id, data }),
        deleteItem: (_, { id }) => itemController.deleteItem({ id }),
    }
};

module.exports = resolvers;
