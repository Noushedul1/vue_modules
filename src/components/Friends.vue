<template>
  <div>
    <div v-for="b in bookPrice" :key="b.id">
      {{b.bname}} | {{b.price}}
    </div>
    <div>
      <h3>hello noushedul islam</h3>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters({
      bookPrice: "bookPrice"
    })
  }
}
</script>

<style>

</style>