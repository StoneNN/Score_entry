import { getScoreService } from '@/services/service';



export default{
  namespace:'lists',

  state:[],
  
  effects:{
    *getScoreData({ },{call,put}){
      // console.log('effects:payload:  -----',payload);
      let scoreList = yield call(getScoreService);
      const scoreLists = scoreList.data.scoreTemplate.scoreLists;
      console.log(' ----- getScoreService：',scoreLists);
      yield put({
        type: 'save',
        payload: { scoreLists },
      });
    }
  },

  reducers:{
// ------------ save ------------
    save(state, { payload: { scoreLists } }) {
      console.log(' ----- getScoreService：',scoreLists);
      state = state.concat(scoreLists)
      console.log('------ state -----',state);
      return state;

     
   },
// ------------ add -------------
    add(state,{payload:values}){
      console.log('--- newRecord ---',values);
      let id = state.reduce(
        (previous,current) =>
        previous.id > current.id ? previous:current).id;
      id++;
      console.log('---- NewId ---',id);
      console.log('--- state ---',state);
      console.log('--- newCardNum ---',values.cardNum);
      const cardNum = "第"+values.cardNum+"副";
      var cardNumber =  parseInt(values.cardNum);
      console.log('--------cardNumber-------',cardNumber);
      var vulnerability;
      if (cardNumber === 1 || cardNumber === 8 || cardNumber === 11 || cardNumber === 14 ) {
        console.log('------------------=-=双无');
        vulnerability = "双无";
      } else if (cardNumber === 2 || cardNumber === 5 || cardNumber === 12 || cardNumber === 15) {
        console.log('------------------=-=南北');
        vulnerability = "南北";
      } else if (cardNumber === 3 || cardNumber === 6 || cardNumber === 9 || cardNumber === 16) {
        console.log('------------------=-=东西');
        vulnerability = "东西";
      } else if (cardNumber === 4 || cardNumber === 7 || cardNumber === 10 || cardNumber === 13) {
        console.log('------------------=-=双有');
        vulnerability = "双有";
      }  
      const declare = values.declare;
      const contract = values.contract.join('');
      const leader = values.leader.join('');
      const result = values.result.join('');
      const points = values.points;
      const scoreList = {id,cardNum,vulnerability,declare,contract,leader,result,points};
      console.log('=================== ',scoreList);
      console.log('===================',[...state,scoreList])
      return[...state,scoreList];
    },
     
// ------------ delete ------------
    delete(state,{payload:id}){
      return state.filter(item=>item.id !==id);
    },
  },
};
