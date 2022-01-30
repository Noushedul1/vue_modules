<template>
  <div>
      <div v-for="f in myfriends" :key="f.id">
        {{f.salary}} || {{f.city}} || {{f.fname}}
      </div>
      <button @click="substruction">substruction</button>
      <button @click="addition">addition</button>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, eveniet.
      </div>
      <div v-for="female in femaleFriend" :key="female.id">
        {{female.fname}} || {{female.look}}
      </div>
      <!-- start players  -->
      <input type="text" v-model="playersName"> 
      <button @click="addPlayers(playersName)">add players</button>
      <div v-for="(p,index) in myplayers" :key="index">
        {{p}}
        <button @click="deletePlayers(index)">delete players</button>
      </div>
      <h4>{{playersName}}</h4>
      <!-- end players  -->
      <div v-for="s in mysister" :key="s.id">
        {{s}}
      </div>
      <Sister :sis="mysister"/>
      <component :is="allcomp">
      </component>
      <button @click="allcomp='One'">one</button>
      <button @click="allcomp='Two'">two</button>
      <button @click="allcomp='Three'">three</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import Sister from '../components/Sister.vue';
import One from '../components/One.vue';
import Two from '../components/Two.vue';
import Three from '../components/Three.vue';
export default {
    name: "Friend",
    components: {
      Sister,
      One,
      Two,
      Three
    },
    data(){
      return {
        playersName: '',
        allcomp: "One"
      }
    },
    methods: {
      ...mapActions({
        addition: "addition",
        substruction: "substruction",
        addPlayers: "addPlayers",
        deletePlayers: "deletePlayers"
      })
    },
    computed: {
      ...mapGetters({
        myfriends: "myfriends",
        femaleFriend: "femaleFriend",
        myplayers: "myplayers",
        mysister: "mysister"
      })
    }
}
</script>

<style>

</style>