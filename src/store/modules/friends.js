const state = {
    friends: [
        {fname: 'farhad',city: 'ctg',id:1,salary: 30000},
        {fname: 'nuhash',city: 'ctg', id:2,salary: 20000},
        {fname: 'arfat',city: 'ctg', id:3,salary: 25000},
        {fname: 'joy',city: 'ctg', id:2,salary: 28000},
      ],
    femaleFriend: [
        {fname: 'Soma',city: 'ctg', age: 16, look: 'pretty',id: 1},
        {fname: 'Ripa',city: 'ctg', age: 17, look: 'beauty',id: 2},
        {fname: 'Ringky',city: 'ctg', age: 17, look: 'cute',id: 3},
    ],
    players: ['tamim','sakib','mustafiz','riyad']
};
const getters = {
    myfriends: (state)=> state.friends,
    femaleFriend: (state)=> state.femaleFriend,
    myplayers: (state)=> state.players
};
const mutations = {
    ADDITION(state){
         state.friends.map((fri)=>{
             fri.salary = fri.salary + 1000
         });
    },
    SUBSTRUCTION(state){
        state.friends.map((fri)=>{
            fri.salary = fri.salary -1000
        });
    },
    ADD_PLAYERS(state,data){
        state.players.push(data);
    },
    DELETE_PLAYERS(state,data){
        state.players.splice(data,1);
    }
};
const actions = {
    addition: ({commit})=>{
        commit('ADDITION');
    },
    substruction: ({commit})=>{
        commit('SUBSTRUCTION');
    },
    addPlayers: ({commit},data)=>{
        commit('ADD_PLAYERS',data);
    },
    deletePlayers: ({commit},data)=>{
        commit('DELETE_PLAYERS',data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}