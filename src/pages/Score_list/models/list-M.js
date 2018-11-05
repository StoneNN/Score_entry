export default{
  namespace:'lists',

  state:[
    {id:1,cardNum:"第1副",declare:"E",contract:"2H",leader:"S5",result:"=",points:"450"},
    {id:2,cardNum:"第2副",declare:"W",contract:"3C",leader:"S5",result:"+2",points:"120"},
    {id:3,cardNum:"第3副",declare:"N",contract:"6S",leader:"S5",result:"-1",points:"230"},
    {id:4,cardNum:"第4副",declare:"S",contract:"1NT",leader:"S5",result:"-4",points:"210"},
    {id:5,cardNum:"第5副",declare:"E",contract:"2NT",leader:"S5",result:"+3",points:"330"}
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
      const declare = values.declare;
      const contract = values.contract.join('');
      const leader = values.leader.join('');
      const result = values.result.join('');
      const points = values.points;
      return[...state,{id,cardNum,declare,contract,leader,result,points}];
    },

    delete(state,{payload:id}){
      return state.filter(item=>item.id !==id);
    },
  },
};
