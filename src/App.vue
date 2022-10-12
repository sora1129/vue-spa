<template>
  <div>
    <LikeHeader>
        <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementnumber"></LikeNumber>
    <button @click="currentComponet='MyHome'">Home</button>
    <button @click="currentComponet='MyAbout'">About</button>
    <keep-alive>
      <component :is="currentComponet"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model.lazy="eventData.title"
      >
      <pre>{{ eventData.title }}</pre>

      <h2>イベントのフォーム</h2>
      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <pre>{{ eventData.maxNumber }}</pre>
      
      <h2>イベントのフォーム</h2>
      <label for="host">主催者</label>
      <input
        id="host"
        type="text"
        v-model.trim="eventData.host"
      >
      <pre>{{ eventData.host }}</pre>
      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p>

      <input
        type="checkbox"
        id="isPraivate"
        v-model="eventData.isPraivate"
      >
      <label for="isPraivate">非公開</label>
      <p>{{ eventData.isPraivate}}</p>

      <p>参加条件</p>
      <input
        type="checkbox"
        id="10"
        value="10代"
        v-model="eventData.target"
      >
      <label for="10">10代</label>
      <input
        type="checkbox"
        id="20"
        value="20代"
        v-model="eventData.target"
      >
      <label for="30">30代</label>
      <input
        type="checkbox"
        id="30"
        value="30代"
        v-model="eventData.target"
      >
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
    </div>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader.vue';
  import MyAbout from './components/MyAbout.vue';
  import MyHome from './components/MyHome.vue';

  export default {
    data() {
      return {
        number: 14,
        currentComponet: "Home",
        eventData: {
          title: "",
          maxNumber: 0,
          host: "",
          detail: "",
          isPraivate: false,
          target: []
        }
      };
    },
    components: {
    LikeHeader,
    MyAbout,
    MyHome
},
    methods: {
      incrementnumber(value) {
        this.number = value;
      }
    },
  }
</script>