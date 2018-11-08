import Mock from 'mockjs';

const scoreTemplate = {

    scoreLists:[
        {id:1,cardNum:"第1副",vulnerability:"双无",declare:"E",contract:"2H",leader:"S5",result:"=",points:"450"},
        {id:2,cardNum:"第2副",vulnerability:"南北",declare:"W",contract:"3C",leader:"HK",result:"+2",points:"120"},
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