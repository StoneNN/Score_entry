import React from 'react';
import propTypes from 'prop-types';
import {Table,Popconfirm,Button} from 'antd';
import styles from './List_C.css';

const List = ({onDelete,lists})=>{
  console.log('lists--------',lists);

  const columns=[
    {
      title:'序号',
      dataIndex:'id'
    },
    {
      title:'牌',
      dataIndex:'card'
    },
    {
      title:'庄家',
      dataIndex:'dealer'
    },
    {
      title:'定约',
      dataIndex:'contract'
    },
    {
      title:'首攻',
      dataIndex:'leader'
    },
    {
      title:'结果',
      dataIndex:'result'
    },
    {
      title:'得分',
      dataIndex:'points'
    },
    {
      title:'操作',
      render:(record)=>{
        console.log('-----record------',record);
        return(
         <React.Fragment>
          <Popconfirm
            title='确认删除?'
            okText="确认"
            cancelText="取消"
            onConfirm={()=>onDelete(record.id)}
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
  const tempScore = [ 
    {id:1,card:"第1副",dealer:"E",contract:"2H",leader:"S5",result:"=",points:"450"},
    {id:2,card:"第2副",dealer:"W",contract:"3C",leader:"S5",result:"+2",points:"120"},
    {id:3,card:"第3副",dealer:"N",contract:"6S",leader:"S5",result:"-1",points:"230"},
    {id:4,card:"第4副",dealer:"S",contract:"1NT",leader:"S5",result:"-4",points:"210"},
    {id:5,card:"第5副",dealer:"E",contract:"2NT",leader:"S5",result:"+3",points:"330"}
  ]; 
  return(
    <Table
      // dataSource={lists} //默认的lists数据
      dataSource={tempScore}
      columns={columns}
      rowKey={record => record.id}
      pagination={{pageSize:6}}
      className={styles.list1}
    ></Table>
  );
};

List.propTypes={
  onDelete:propTypes.func.isRequired,
  lists:propTypes.array.isRequired
};

export default List;
