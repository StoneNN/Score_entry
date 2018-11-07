export default{
  namespace:'lists',

  state:[
    {id:1,cardNum:"第1副",vulnerability:"双无",declare:"E",contract:"2H",leader:"S5",result:"=",points:"450"},
    {id:2,cardNum:"第2副",vulnerability:"南北",declare:"W",contract:"3C",leader:"S5",result:"+2",points:"120"},
    {id:3,cardNum:"第3副",vulnerability:"东西",declare:"N",contract:"6S",leader:"S5",result:"-1",points:"230"},
    {id:4,cardNum:"第4副",vulnerability:"双有",declare:"S",contract:"1NT",leader:"S5",result:"-4",points:"210"},
    {id:5,cardNum:"第5副",vulnerability:"南北",declare:"E",contract:"2NT",leader:"S5",result:"+3",points:"330"}
  ],
  
  reducers:{
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

    delete(state,{payload:id}){
      return state.filter(item=>item.id !==id);
    },
  },
};
