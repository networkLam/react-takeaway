import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const takeawayStore = createSlice({
    name:"takeaway",
    // 开始的状态
    initialState:{
        foodsList:[],
        activityIndex:0,
        heightArr:[]
    },
    reducers:{
        setFoods(state,actions){
            state.foodsList = actions.payload;
        },
        setActivite(state,actions){
            state.activityIndex = actions.payload;
        },
        setHeight(state,actions){
            state.heightArr.push(actions.payload)
        }
    }
})

const {setFoods,setActivite,setHeight} = takeawayStore.actions;

// 异步获取数据
const fetchFoods = ()=>{
    return async (dispatch)=>{
       const res = await axios.get('http://localhost:3004/takeaway');
       dispatch(setFoods(res.data)) ;
    }
}

const reducers = takeawayStore.reducer;

export {fetchFoods,setActivite,setHeight};

export default reducers;