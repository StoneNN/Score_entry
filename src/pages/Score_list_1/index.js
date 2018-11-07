import React, { Component } from 'react';
import { Row, Col, Button,Modal } from 'antd';
import RecordList from '../../components/List_1_C';
import PopRecordNewForm from '../../components/RecoredAdd_1_C';
import styles from './index.css';


class ReaordTable extends Component{
    
   

    render(){
        return(
            <Row>
                <div className={ styles.titleBox }>
                        计分表
                </div> 
                <Col span={2}></Col>
                <Col span={20}>
                  <div className={ styles.addBox } >
                    <PopRecordNewForm className={ styles.newRecoredBtn } />
                  </div>
                           
                  <RecordList/>
                </Col>
                <Col span={2}></Col>
            </Row>
        )
    }
}

export default ReaordTable;