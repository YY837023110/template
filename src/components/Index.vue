<template lang="pug">
  .index
    h1 {{msg}}
</template>


<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '使用pug 跟 stylus'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  h1
    color #ff0000
</style>

