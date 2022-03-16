import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
import Cookies from 'js-cookie';
import store from '../store';

const token = '123';

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO(process.env.WEBSOCKET_SERVER, {
      auth: { token }
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

