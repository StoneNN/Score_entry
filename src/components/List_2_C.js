import React, { Component }from 'react';
import {Table, Row, Col, Popconfirm, Button} from 'antd';
import { connect } from 'dva';

import styles from './List_2_C.css';


class RecordList extends Component{
    
 
    componentDidMount(){
      console.log('-=-=-=-=-=-= getScoreData');
      this.props.dispatch({
        type:'lists/getScoreData',
      });
    }
    onDelete(id){
      console.log('---- onDelete ---',id);
      this.props.dispatch({
        type: 'lists/delete',
        payload: id
      });
    }
    onModify(record){
      console.log('---- onModify ---',record);
      this.props.dispatch({
        type:'popForms/modalVisibleAction',
        payload:{ 
          modalVisible:true,
          curentRecord:record
         }
      });
    }
    render(){
      const columns=[
        {
          title:'牌号',
          dataIndex:'cardNum',
          align:"center",
        },
        {
          title:'局况',
          dataIndex:'vulnerability',
          align:"center",
        },
        {
          title:'庄家',
          dataIndex:'declare',
          align:"center" 
        },
        {
          title:'定约',
          dataIndex:'contract',
          align:"center" 
        },
        {
          title:'首攻',
          dataIndex:'leader',
          align:"center" 
        },
        {
          title:'结果',
          dataIndex:'result',
          align:"center" 
        },
        {
          title:'得分',
          dataIndex:'points',
          align:"center" 
        },
        {
          title:'操作',
          align:"center", 
          render:(record)=>{
            console.log('-------- currentRecord ---------',record);
            console.log('-------- currentRecord.id ---------',record.id);
            return(
             <React.Fragment>
              <Popconfirm
                title='确认删除?'
                okText="确认"
                cancelText="取消"
                onConfirm={()=>this.onDelete(record.id)}
              >
                <Button>删除</Button>
              </Popconfirm> 
              <Button onClick={()=>this.onModify(record)} >编辑</Button>
             </React.Fragment>
            );
          }
        }
      ];
      console.log('---this.props.lists ----',this.props);
        return(
            <Table
                dataSource={ this.props.lists.length >0 ? this.props.lists : []}
                columns={columns}
                rowKey={record => record.id}
                pagination={{pageSize:6}}
                className={styles.RecordList}
                // bordered 
            >
            </Table>
        );
    }
}


// export default RecordList;

const mapStateToProps = ({lists}) =>{
   console.log('--- lists_2_c --- : lists',lists);
   return{
       lists
   }
}

export default connect(
    mapStateToProps
)(RecordList);