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
    <div style="padding: 10rem;">
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <pre>{{ eventData.maxNumber }}</pre>
      
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

      <p>参加費</p>
      <input
        type="radio"
        id="free"
        value="無料"
        v-model="eventData.price"
      >
      <label for="free">無料</label>
      <input
        type="radio"
        id="paid"
        value="有料"
        v-model="eventData.price"
      >
      <label for="paid">有料</label>
      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option
          v-for="location in locations"
          :key="location
        ">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader.vue';
  import MyAbout from './components/MyAbout.vue';
  import MyHome from './components/MyHome.vue';
  import EventTitle from './components/EventTitle.vue';

  export default {
    data() {
      return {
        number: 14,
        currentComponet: "Home",
        locations: ["東京", "大阪", "名古屋"],
        eventData: {
          title: "",
          maxNumber: 0,
          host: "",
          detail: "",
          isPraivate: false,
          target: [],
          price: "無料",
          location: []
        }
      };
    },
    components: {
    LikeHeader,
    MyAbout,
    MyHome,
    EventTitle
},
    methods: {
      incrementnumber(value) {
        this.number = value;
      }
    },
  }
</script>