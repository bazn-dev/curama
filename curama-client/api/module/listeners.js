export default {
  sockets: {
    getModules(data) {
      this.modules = data;
      console.log('modules', data);
    }
  },
}
