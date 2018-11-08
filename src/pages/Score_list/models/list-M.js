import { getScoreService } from '@/services/service';



export default{
  namespace:'lists',

  state:[  ],
  
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
      return { ...state, scoreLists };
   },
// ------------ add ------------
    add(state,{payload:values}){
      console.log('--- newRecord ---',values);
      let id = state.reduce(
          (previous,current) => previous.id > current.id ? previous:current
        ).id;
        
      id++;
      console.log('---- NewId ---',id);
      console.log('--- state ---',state);
      console.log('--- newCardNum ---',values.cardNum);
      const cardNum = "第"+values.cardNum+"副";
      var vulnerability;
      if (id+1 === 1 || id+1 === 8 || id+1 === 11 || id+1 === 14 ) {
        console.log('------------------=-=双无');
        vulnerability = "双无";
      } else if (id+1 === 2 || id+1 === 5 || id+1 === 12 || id+1 === 15) {
        console.log('------------------=-=南北');
        vulnerability = "南北";
      } else if (id+1 === 3 || id+1 === 6 || id+1 === 9 || id+1 === 16) {
        console.log('------------------=-=东西');
        vulnerability = "东西";
      } else if (id+1 === 4 || id+1 === 7 || id+1 === 10 || id+1 === 13) {
        console.log('------------------=-=双有');
        vulnerability = "双有";
      }  
      const declare = values.declare;
      const contract = values.contract.join('');
      const leader = values.leader.join('');
      const result = values.result.join('');
      const points = values.points;
      return[...state,{id,cardNum,vulnerability,declare,contract,leader,result,points}];
    },
     
// ------------ delete ------------
    delete(state,{payload:id}){
      return state.filter(item=>item.id !==id);
    },
  },
};
