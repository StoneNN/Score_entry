import React, { Component }from 'react';
import {Table, Row, Col, Popconfirm, Button} from 'antd';
import { connect } from 'dva';

import styles from './List_1_C.css';

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
        console.log('-----record------',record);
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
          <Popconfirm
            title='确认编辑?'
            okText="确认"
            cancelText="取消"
            onConfirm={()=>onModify(record.id)}
          >
            <Button>编辑</Button>
          </Popconfirm>
         </React.Fragment>
        );
      }
    }
  ];
class RecordList extends Component{
    

    onDelete(id){
      console.log('---- onDelete ---',id);
      this.props.dispatch({
        type: 'lists/delete',
        payload: id
      });
    }
    render(){

        return(
            <Table
                dataSource={ this.props.lists }
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
   console.log('--- lists_1_c --- : lists',lists);
   return{
       lists
   }
}

export default connect(
    mapStateToProps
)(RecordList);