const TaskModel = require('./task.model').model

module.exports.getTasks = async () => {
  return TaskModel.find({})
}

module.exports.addTask = async (data) => {
  const task = new TaskModel(data)
  return task.save()
}

module.exports.editTask = async (data) => {
  return TaskModel.findOneAndUpdate({_id: data._id}, data)
}

module.exports.deleteTask = async (data) => {
  return await TaskModel.deleteOne({_id: data._id}).exec()
}

module.exports.createFile = async (data) => {
  console.log('Success created file')
  return 'Success created file'
}

module.exports.createFolder = async (data) => {
  console.log('Success created folder')
  throw new Error('Error created folder')
  return 'Success created folder'
}
