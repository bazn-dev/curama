const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    "title": "String",
    "text": "String",
    "tags": "Array",
    "attachedFiles": "Array",
    "checkList": "Array",
    "isFavorites": "Boolean",
    "color": "String",
    "isArchive": "Boolean",
    "deadline": "Date",
    "isDone": "Boolean",
    "isPrompt": "Boolean",
    "promptDate": "Date",
    "promptPlace": "String",
    "promptPeriodicity": "Number"
  }
);

module.exports = {
  model: mongoose.model('Task', taskSchema),
  schema: taskSchema
};