module.exports.getModules = async (model) => {
  return model.find({})
}

module.exports.addModule = async (model, data) => {
  const task = new model(data)
  return task.save()
}

module.exports.editModule = async (model, data) => {
  return model.findOneAndUpdate({_id: data._id}, data)
}

module.exports.deleteModule = async (model, data) => {
  return await model.deleteOne({_id: data._id}).exec()
}
