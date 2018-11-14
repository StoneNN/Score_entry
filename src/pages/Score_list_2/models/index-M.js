export default{

    namespace:'popForms',
  
    state:{
      modalVisible: false,
      curentRecord:{ }
    },


    effcets:{
      
    },

    reducers:{
      modalVisibleAction(state,{payload:{modalVisible,curentRecord}}){
        console.log('---- modalVisible，curentRecord ----',modalVisible,curentRecord);
        // console.log('---- record ----',record);
        // return {modalVisible:modalVisible.visible};
        return {...state,modalVisible,curentRecord};
      }
    },
  };
  