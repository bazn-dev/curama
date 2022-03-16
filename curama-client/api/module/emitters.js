import api from '../api';

export default {
  methods: {
    getModules() {
      this.$socket.emit('getModules');
    }
  }
};
