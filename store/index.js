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
  nuxtServerInit(vuexContext, context){
    vuexContext.commit('setPosts', [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        subTitle: 'Lorem i',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente voluptatum rerum fuga quis. Eos voluptas autem reprehenderit ratione esse?',
        author: 'tugrankenger'
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet 222',
        subTitle: 'Lorem i 222',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente voluptatum rerum fuga quis. Eos voluptas autem reprehenderit ratione esse?',
        author: 'tugrankenger'
      }
    ])
  },
  setPosts(vuexContext, posts){
    vuexContext.commit('setPosts', posts)
  }
}
