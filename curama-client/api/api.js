import io from 'socket.io-client';

class Api {
  constructor () {
    this.socket = io(process.env.WEBSOCKET_SERVER);
  }
}

export default new Api();
