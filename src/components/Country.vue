<template>
  <div>
      <div v-for="cnt in country" :key="cnt.id">
          {{cnt}}
      </div>
      <slot name="ak"></slot>
      <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque consectetur facere, rerum quisquam ducimus aut perspiciatis laborum fuga beatae! Provident, esse ipsam. Architecto dicta, et sequi optio perspiciatis accusantium.
      </div>
      <slot name="varsity"></slot>
      <div v-for="friend in friends" :key="friend.id">
          {{friend}}
      </div>
  </div>
</template>

<script>
export default {
    name: "Country",
    props: {
        country: {
            type: String,
            required: false
        },
        friends: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>