const mongoose = require('./index');
const { Schema } = mongoose;

// Importing subschema
const Dish = require('./dish');

const menuCategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
  dishes: {
    type: [Dish],
    required: true,
  },
});

// In this case, the export is just the subschema without model conversion,
// it will be used as a subschema as part of the restaurant model.

module.exports = menuCategorySchema;