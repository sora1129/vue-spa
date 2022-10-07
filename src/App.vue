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
        currentComponet: "Home"
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

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>