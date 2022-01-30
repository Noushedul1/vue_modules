<template>
  <div>
      <div v-for="si in sis" :key="si.id">
          {{si}}
      </div>
  </div>
</template>

<script>
export default {
    name: "Sister",
    props: ['sis']
}
</script>

<style>

</style>