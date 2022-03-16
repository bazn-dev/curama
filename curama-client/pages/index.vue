<template>
  <div class="index-page">
    <img src="../static/images/eyes.gif">
    <div class="index-page__text" @click="listen">C U R A M A</div>
  </div>
</template>

<script>
  import VSR from 'voice-speech-recognition';

  export default {
    layout: 'empty',
    methods: {
      listen() {
        const recognizer = VSR.voiceSpeechRecognition({
          lang: 'ru-RU',
        });
        recognizer.startRecognition();
        console.log(recognizer.finalRecognizing)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .index-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;

    &__text {
      position: absolute;
      bottom: 30px;
      //color: #FFCC00FF;
      //opacity: .7;
      color: #474747;
    }
  }
</style>
