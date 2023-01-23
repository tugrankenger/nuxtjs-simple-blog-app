export const state = () =>({
  fetchedPost:[]
})

export const getters = {
  getPosts(state){
    return state.fetchedPost
  }
}

export const mutations = {
  setPosts(state,posts){
    state.fetchedPost = posts
  }
}

export const actions ={
  setPosts(vuexContext, posts){
    vuexContext.commit('setPosts', posts)
  }
}
