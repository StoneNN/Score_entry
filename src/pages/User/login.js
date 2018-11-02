import React from 'react';
import { connect } from 'dva';
import styles from './login.css';
import {Button} from 'antd';
import { routerRedux } from 'dva/router';
import NormalLoginForm from '../../components/Login_C';


class InBtn extends React.Component{

  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div className={styles.inButton}>
        <NormalLoginForm />
      </div>
    );
  }
}

InBtn.propTypes = {
};

export default connect()(InBtn);
