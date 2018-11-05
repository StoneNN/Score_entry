import React from 'react';
import propTypes from 'prop-types';
import {Table, Popconfirm, Button, Row, Col} from 'antd';
import styles from './List_C.css';

const List = ({onDelete,lists})=>{
  console.log('lists--------',lists);

  const columns=[
    {
      title:'序号',
      dataIndex:'id',
      align:"center" 
    },
    {
      title:'牌',
      dataIndex:'cardNum',
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

  return(
    <Row>
      <Col span={1}></Col>
      <Col span={22}>
        <Table
          // dataSource={lists} //默认的lists数据
          dataSource={lists}
          columns={columns}
          rowKey={record => record.id}
          pagination={{pageSize:6}}
          className={styles.list1}
          // bordered
          
        >
        </Table>
      </Col>
      <Col span={1}></Col>
    </Row>
    
  );
};

List.propTypes={
  onDelete:propTypes.func.isRequired,
  lists:propTypes.array.isRequired
};

export default List;
