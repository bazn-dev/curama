<template>
  <div class="ma-3">
    <v-layout>
      <v-flex xs4 class="pr-2">
        <v-text-field
          label="URL"
          type="text"
          required
          v-model="data.url"
          autocomplete="off"
          autofocus></v-text-field>
      </v-flex>
      <v-flex xs6 class="pr-2">
        <v-text-field
          label="Method"
          type="text"
          required
          v-model="data.method"
          autocomplete="off"
          autofocus></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn dark block @click="send">Send</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-textarea
          label="Request Data"
          type="text"
          required
          v-model="data.requestData"
          autocomplete="off"
          autofocus></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-textarea
          label="Response Data"
          type="text"
          required
          v-model="data.responseData"
          autocomplete="off"
          autofocus></v-textarea>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
          url: 'http://localhost:8080',
          method: '',
          requestData: '{}',
          responseData: ''
        }
      };
    },
    sockets: {
      connect: function () {
        console.log('socket connected');
      },
      getTasks: function (data) {
        console.log(data);
      }
    },
    methods: {
      send () {
        this.$socket.emit(this.data.method, JSON.parse(this.data.requestData))
        this.sockets.subscribe(this.data.method, data => {
          console.log(data)
          this.data.responseData = JSON.stringify(data);
        });
      }
    }
  }
</script>
