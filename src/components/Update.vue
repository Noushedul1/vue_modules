<template>
  <div>
      <p>{{count}}</p>
      <button @click="countValue">update</button>
  </div>
</template>

<script>
import mycounter from '../mixins/counter';
export default {
    name: "Update",
    mixins: [mycounter]
}
</script>

<style>

</style>