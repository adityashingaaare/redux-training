// import {legacy_createStore} from 'redux';


// const store = legacy_createStore();

const redux =require('redux');
const createStore = redux.legacy_createStore;



const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action
    function buy_cake(){
      return   {
        type: BUY_CAKE
        
         }
    }

    function buy_icecream(){
        return {
            type: BUY_ICECREAM
        }
    }

//reducer

    const initialState = {
        numberOfCakes:20,
        numberOfIceCream:30
    }
    const reducer = (state=initialState,action) =>
    {
        switch(action.type){
            case BUY_CAKE : return{
                ...state,
                numberOfCakes:state.numberOfCakes-1
            }
            case BUY_ICECREAM : return{
                ...state,
                numberOfIceCream:state.numberOfIceCream-3
            }
            default: return state
        }
    }

    //store code 
    const store = createStore(reducer);
    console.log("Initial state is : ",store.getState())
     const unsubscribe = store.subscribe(()=> console.log("Updated State : ",store.getState()))
    

    store.dispatch(buy_cake());
    store.dispatch(buy_icecream());

    unsubscribe();

    
