<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
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