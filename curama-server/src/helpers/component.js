const mongoose = require('mongoose')
const Schema = mongoose.Schema

class Component {
  constructor(name, schema) {
    this._name = name
    this._model = mongoose.model(name, new Schema(schema))
  }
  
  get name() {
    return this._name
  }
  
  set name(value) {
    this._name = value
  }
  
  get model() {
    return this._model
  }
  
  set model(value) {
    this._model = value
  }
  
  async get() {
    return this.model.find({})
  }
  
  async add(data) {
    const newData = new this.model(data)
    return newData.save()
  }
  
  async edit(data) {
    return this.model.findOneAndUpdate({_id: data._id}, data)
  }
  
  async delete(data) {
    return await this.model.deleteOne({_id: data._id}).exec()
  }
}

module.exports = Component
