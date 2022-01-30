import { createStore } from 'vuex';
import product from './modules/product';
import friends from './modules/friends';

export default createStore({
  modules: {
    product,
    friends
  }
})
