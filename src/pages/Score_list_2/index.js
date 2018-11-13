import React, { Component } from 'react';
import { Row, Col, Button,Modal } from 'antd';
import RecordList from '../../components/List_1_C';
import PopRecordNewForm from '../../components/RecoredAdd_2_C';
import styles from './index.css';


class ReaordTable extends Component{
    
    state = {
        modalVisible: false,
    }
    
    setModalVisible(modalVisible) {
        console.log('---------------');
        this.setState({ modalVisible });
    }

    render(){
        return(
            <Row>
                <div className={ styles.titleBox }>
                        计分表
                </div> 
                <Col span={2}></Col>
                <Col span={20}>
                  <div className={ styles.addBox } >
                    <Button 
                      className={ styles.newRecoredBtn } 
                      type="primary"
                      onClick={() => this.setModalVisible(true)}
                    >
                      添加记录
                    </Button>
                    <Modal
                      title="打牌信息录入"
                      centered
                      footer={null}
                      visible={this.state.modalVisible}
                      onOk={() => this.setModalVisible(false)}
                      onCancel={() => this.setModalVisible(false)}
                    >
                      <PopRecordNewForm className={ styles.newRecoredBtn } />
                    </Modal>
                    
                  </div>
                           
                  <RecordList/>
                </Col>
                <Col span={2}></Col>
            </Row>
        )
    }
}

export default ReaordTable;