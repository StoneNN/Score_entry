import Mock from 'mockjs';

const scoreTemplate = {

    scoreLists:[
        {id:1,cardNum:"第1副",vulnerability:"双无",declare:"E",contract:"2H",leader:"S5",result:"=",points:"450"},
        {id:2,cardNum:"第2副",vulnerability:"南北",declare:"W",contract:"3C",leader:"HK",result:"+2",points:"120"},
        {id:3,cardNum:"第3副",vulnerability:"东西",declare:"N",contract:"6S",leader:"WA",result:"-1",points:"230"},
        {id:4,cardNum:"第4副",vulnerability:"双有",declare:"S",contract:"1NT",leader:"NQ",result:"-4",points:"210"},
        {id:5,cardNum:"第5副",vulnerability:"南北",declare:"E",contract:"2NT",leader:"SA",result:"+3",points:"330"}
      ],
}

var scoreData = Mock.mock(scoreTemplate);
export default {
    'POST /api/score':(req,res)=>{
        res.send({
            scoreTemplate
        });
    }
  };