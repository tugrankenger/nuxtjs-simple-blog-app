<template>
  <div>
    <Header />
    <Banner />
      <nuxt />
  </div>
</template>

<script>
  import Header from "../components/common/Header.vue"
  import Banner from "../components/common/Banner.vue"

  export default{
    components:{
      Header,
      Banner
    }
  }
</script>