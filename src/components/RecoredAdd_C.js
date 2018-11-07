import React from 'react';
import { Row,Col,Form,Select,Cascader,Input,Button } from 'antd';
import styles from './RecoredAdd_C.css';
import { deflate } from 'zlib';
import { number } from 'prop-types';
import { connect } from 'dva';
// import Input from 'antd-mobile/lib/input-item/Input';

 const FormItem = Form.Item;
 const { Option } = Select;
 const dealData = [
    {
        value:'1',
        label:'1',
        children:[
            {
                value:'S',
                label:'S',
            },
            {
                value:'H',
                label:'H',
            },
            {
                value:'C',
                label:'C',
            },
            {
                value:'D',
                label:'D',
            },
            {
                value:'NT',
                label:'NT',
            }
        ]
    },
    {
        value:'2',
        label:'2',
        children:[
            {
                value:'S',
                label:'S',
            },
            {
                value:'H',
                label:'H',
            },
            {
                value:'C',
                label:'C',
            },
            {
                value:'D',
                label:'D',
            },
            {
                value:'NT',
                label:'NT',
            }
        ]
    },
    {
        value:'3',
        label:'3',
        children:[
            {
                value:'S',
                label:'S',
            },
            {
                value:'H',
                label:'H',
            },
            {
                value:'C',
                label:'C',
            },
            {
                value:'D',
                label:'D',
            },
            {
                value:'NT',
                label:'NT',
            }
        ]
    },
    {
        value:'4',
        label:'4',
        children:[
            {
                value:'S',
                label:'S',
            },
            {
                value:'H',
                label:'H',
            },
            {
                value:'C',
                label:'C',
            },
            {
                value:'D',
                label:'D',
            },
            {
                value:'NT',
                label:'NT',
            }
        ]
    },
    {
        value:'5',
        label:'5',
        children:[
            {
                value:'S',
                label:'S',
            },
            {
                value:'H',
                label:'H',
            },
            {
                value:'C',
                label:'C',
            },
            {
                value:'D',
                label:'D',
            },
            {
                value:'NT',
                label:'NT',
            }
        ]
    },
    {
        value:'6',
        label:'6',
        children:[
            {
                value:'S',
                label:'S',
            },
            {
                value:'H',
                label:'H',
            },
            {
                value:'C',
                label:'C',
            },
            {
                value:'D',
                label:'D',
            },
            {
                value:'NT',
                label:'NT',
            }
        ]
    },
    {
        value:'7',
        label:'7',
        children:[
            {
                value:'S',
                label:'S',
            },
            {
                value:'H',
                label:'H',
            },
            {
                value:'C',
                label:'C',
            },
            {
                value:'D',
                label:'D',
            },
            {
                value:'NT',
                label:'NT',
            }
        ]
    } 
 ];
 const leaderData = [
    {
        value:'S',
        label:'S',
        children:[
            {
                value:'A',
                label:'A',
            },
            {
                value:'2',
                label:'2',
            },
            {
                value:'3',
                label:'3',
            },
            {
                value:'4',
                label:'4',
            },
            {
                value:'5',
                label:'5',
            },
            {
                value:'6',
                label:'6',
            },
            {
                value:'7',
                label:'7',
            },
            {
                value:'8',
                label:'8',
            },
            {
                value:'9',
                label:'9',
            },
            {
                value:'T',
                label:'T',
            },
            {
                value:'J',
                label:'J',
            },
            {
                value:'Q',
                label:'Q',
            },
            {
                value:'K',
                label:'K',
            }          
        ]
    },
    {
        value:'H',
        label:'H',
        children:[
            {
                value:'A',
                label:'A',
            },
            {
                value:'2',
                label:'2',
            },
            {
                value:'3',
                label:'3',
            },
            {
                value:'4',
                label:'4',
            },
            {
                value:'5',
                label:'5',
            },
            {
                value:'6',
                label:'6',
            },
            {
                value:'7',
                label:'7',
            },
            {
                value:'8',
                label:'8',
            },
            {
                value:'9',
                label:'9',
            },
            {
                value:'T',
                label:'T',
            },
            {
                value:'J',
                label:'J',
            },
            {
                value:'Q',
                label:'Q',
            },
            {
                value:'K',
                label:'K',
            }
        ]       
    },
    {
        value:'C',
        label:'C',
        children:[
            {
                value:'A',
                label:'A',
            },
            {
                value:'2',
                label:'2',
            },
            {
                value:'3',
                label:'3',
            },
            {
                value:'4',
                label:'4',
            },
            {
                value:'5',
                label:'5',
            },
            {
                value:'6',
                label:'6',
            },
            {
                value:'7',
                label:'7',
            },
            {
                value:'8',
                label:'8',
            },
            {
                value:'9',
                label:'9',
            },
            {
                value:'T',
                label:'T',
            },
            {
                value:'J',
                label:'J',
            },
            {
                value:'Q',
                label:'Q',
            },
            {
                value:'K',
                label:'K',
            }
        ]    
    },
    {
        value:'D',
        label:'D',
        children:[
            {
                value:'A',
                label:'A',
            },
            {
                value:'2',
                label:'2',
            },
            {
                value:'3',
                label:'3',
            },
            {
                value:'4',
                label:'4',
            },
            {
                value:'5',
                label:'5',
            },
            {
                value:'6',
                label:'6',
            },
            {
                value:'7',
                label:'7',
            },
            {
                value:'8',
                label:'8',
            },
            {
                value:'9',
                label:'9',
            },
            {
                value:'T',
                label:'T',
            },
            {
                value:'J',
                label:'J',
            },
            {
                value:'Q',
                label:'Q',
            },
            {
                value:'K',
                label:'K',
            }
        ]    
    }
 ];
 const resultData = [
    {
        value:'=',
        label:'='
    },
    {
        value:'+',
        label:'+',
        children:[
            {
                value:'1',
                label:'1',
            },
            {
                value:'2',
                label:'2',
            },
            {
                value:'3',
                label:'3',
            },
            {
                value:'4',
                label:'4',
            },
            {
                value:'5',
                label:'5',
            },
            {
                value:'6',
                label:'6',
            },
            {
                value:'7',
                label:'7',
            },
            {
                value:'8',
                label:'8',
            },
            {
                value:'9',
                label:'9',
            },
            {
                value:'10',
                label:'10',
            },
            {
                value:'11',
                label:'11',
            },
            {
                value:'12',
                label:'12',
            }
        ]
    },
    {
        value:'-',
        label:'-',
        children:[
            {
                value:'1',
                label:'1',
            },
            {
                value:'2',
                label:'2',
            },
            {
                value:'3',
                label:'3',
            },
            {
                value:'4',
                label:'4',
            },
            {
                value:'5',
                label:'5',
            },
            {
                value:'6',
                label:'6',
            },
            {
                value:'7',
                label:'7',
            },
            {
                value:'8',
                label:'8',
            },
            {
                value:'9',
                label:'9',
            },
            {
                value:'10',
                label:'10',
            },
            {
                value:'11',
                label:'11',
            },
            {
                value:'12',
                label:'12',
            },
            {
                value:'13',
                label:'13',
            }
        ]
    }
 ];
 
 class RecordNewForm extends React.Component{
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.dispatch({
                type:'lists/add',
                payload:values 
            })
          }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };
        return(
            <div className={styles.box}>
               <div className={styles.titleBox}>
                   打牌信息录入
               </div>
               <Row>
                <Col span={3}></Col>
                <Col span={18} className={styles.inputBox}>
                  <Form onSubmit={this.handleSubmit}>
                {/* 牌号 */}
                    <FormItem
                       {...formItemLayout}
                       label="牌号："
                       hasFeedback
                    >
                      {getFieldDecorator('cardNum', {
                         rules: [
                            { required: true, message: '请填写牌号!' },
                         ],
                       })(
                          <Select placeholder="请填写牌号"  allowClear>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                            <Option value="13">13</Option>
                            <Option value="14">14</Option>
                            <Option value="15">15</Option>
                            <Option value="16">16</Option>
                          </Select>
                       )}
                    </FormItem> 
                {/* 庄家 */}
                    <FormItem
                       {...formItemLayout}
                       label="庄家："
                       hasFeedback
                    >
                      {getFieldDecorator('declare', {
                         rules: [
                            { required: true, message: '请填写庄家!' },
                         ],
                       })(
                          <Select placeholder="请填写庄家" allowClear>
                            <Option value="E">E</Option>
                            <Option value="S">S</Option>
                            <Option value="W">W</Option>
                            <Option value="N">N</Option>
                          </Select>
                       )}
                    </FormItem>
                {/* 定约 */}
                    <FormItem
                        {...formItemLayout}
                        label="定约:"
                        hasFeedback
                    >
                      {getFieldDecorator('contract', {
                         rules: [{ type: 'array', required: true, message: '请填写定约!' }],
                      })(
                          <Cascader style={{textAlign:'left'}} placeholder="请填写定约" options={dealData} />
                        )}
                    </FormItem>
                {/* 首攻 */}
                    <FormItem
                        {...formItemLayout}
                        label="首攻:"
                        hasFeedback
                    >
                      {getFieldDecorator('leader', {
                         rules: [{ type: 'array', required: true, message: '请填写首攻!' }],
                      })(
                          <Cascader style={{textAlign:'left'}} placeholder="请填写首攻" options={leaderData} />
                        )}
                    </FormItem>
                {/* 结果 */}
                    <FormItem
                        {...formItemLayout}
                        label="结果:"
                        hasFeedback
                    >
                      {getFieldDecorator('result', {
                         rules: [{ type: 'array', required: true, message: '请填写结果!' }],
                      })(
                          <Cascader style={{textAlign:'left'}} placeholder="请填写结果" options={resultData} />
                        )}
                    </FormItem>
                {/* 得分 */}
                    <FormItem
                        {...formItemLayout}
                        label="得分:"
                        hasFeedback
                    >
                      {getFieldDecorator('points', {
                         rules: [{ required: true, required: true, message: '请填写得分!' }],
                      })(
                          <Input type="number" placeholder="请填写得分"/>
                        )}     
                    </FormItem> 
                    <FormItem>       
                        <Button type="primary" htmlType="submit" className="login-form-button">
                          提交
                        </Button>
                    </FormItem>
                  </Form>
                </Col>
                <Col span={3}></Col>
               </Row>
            </div>
        )
    }
 }


 const RecoredForm = Form.create()(RecordNewForm);



//  const mapStateToProps = ()=>{
    
//   }
 export default connect(  )(RecoredForm);
