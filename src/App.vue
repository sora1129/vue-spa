<template>
  <div>
    <LikeHeader #default="slotProps">
        <p>{{ slotProps }}</p>
        <h2>みなさん</h2>
        <h3>はじめまして</h3>
        <p>よろしくお願いします</p>
        <!-- <template #title></template> -->
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementnumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader.vue';

  export default {
    data() {
      return {
        number: 14,
        title: 'title'
      };
    },
    components: {
      LikeHeader
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