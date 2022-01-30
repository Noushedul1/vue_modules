<template>
  <div>
    <!-- book start  -->
    <h1>First part : </h1>
    <div v-for="b in bookPrice" :key="b.id">
      {{b.price}} | {{b.bname}}
    </div>
    <button @click="bookpriceReduce">bookpriceReduce</button>
    <!-- book end  -->
    <h2>Second part : </h2>
    <Friends />
    <h5>friedns</h5>
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi at voluptatem aut doloribus odio ipsa possimus ut repellat officia vel.
    </div>
    <div v-for="myfriend in myfriends" :key="myfriend.id">
      {{myfriend.age}}
    </div>
  </div>
</template>

<script>
import Friends from '../components/Friends.vue';
import {mapState,mapGetters,mapActions,} from 'vuex';
export default {
  name: 'BookPrice',
  components: {
    Friends
  },
  data(){
    return {

    }
  },
  methods: {
    ...mapActions({
      bookpriceReduce: "bookpriceReduce"
    }),
  },
  computed: {
    ...mapState({
      friends: "friends"
    }),
    ...mapGetters({
      bookPrice: "bookPrice",
      myfriends: "myfriends"
    })
  }
}
</script>

<style>

</style>