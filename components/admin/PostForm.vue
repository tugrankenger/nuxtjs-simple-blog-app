<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width:500px" @submit.prevent="onSubmit">
      <fieldset>
        <legend>Add new post</legend>
        <div class="form-group">
          <label>Author name</label>
          <input v-model="post.author" type="text" class="form-control" placeholder="Enter author name...">
        </div>
        <div class="form-group mt-3">
          <label>Title</label>
          <input v-model="post.title" type="text" class="form-control" placeholder="Enter content title">
        </div>
        <div class="form-group mt-3">
          <label>Sub title</label>
          <input v-model="post.subTitle" type="text" class="form-control" placeholder="Enter sub title">
        </div>
        <div class="form-group mt-3">
          <label>Content text</label>
          <textarea v-model="post.text" cols="30" rows="10" class="form-control" placeholder="Enter content text"></textarea>
        </div>
        <button class="btn btn-danger mt-3">Cancel</button>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        post:{
          author:null,
          title:null,
          subTitle:null,
          text:null
        }
      }
    },
    methods:{
      onSubmit(){
        // console.log(this.post)
        this.$emit('submit', this.post)
      }
    }
  }
</script>