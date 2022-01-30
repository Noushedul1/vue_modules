const state = {
      books: [
        {bname: 'web',author: 'akib',id:1,price: 200},
        {bname: 'api',author: 'islam',id:2,price: 300},
        {bname: 'development',author: 'noushedul',id:3,price: 400},
        {bname: 'ux',author: 'brad',id:4,price: 500},
      ],
      sister: ['aki','shaki','mohima']
};
const getters = {
    bookPrice: (state)=>{
        const bookPrice = state.books.map((book)=>{
          return {
            price: book.price/2,
            bname: book.bname
          }
        });
        return bookPrice;
    },
    mysister: (state)=>state.sister
    
};
const mutations = {
    REDUCE_PRICE(state){
        setTimeout(()=>{
          state.fnd.forEach((fr)=>{
            fr.salary = fr.salary /2
          });
        },2000)
      },
      BOOKPRICE_REDUCE: (state)=>{
        state.books.map((book)=>{
          book.price = book.price /2,
          book.bname = `***${book.bname}***`
        });
      }
};
const actions = {
    reducePrice: ({commit})=>{
        commit('REDUCE_PRICE');
      },
      bookpriceReduce: ({commit})=>{
        commit('BOOKPRICE_REDUCE');
      }
};

export default{
    state,
    getters,
    mutations,
    actions
}