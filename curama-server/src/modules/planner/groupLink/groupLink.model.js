const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupLinkSchema = new Schema(
    {"name":"String","color":"String"}
);

module.exports = {
    model: mongoose.model('GroupLink', groupLinkSchema),
    schema: groupLinkSchema
};