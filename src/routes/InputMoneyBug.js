import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, InputItem, List, Modal, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import ModalExample from './ModalExample';

class InputMoneyBug extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  onClick = () => {
    this.props.dispatch(routerRedux.replace({ pathname: '/page1' }));
  }

  render() {
    return (
      <div>
        <Modal
          popup
          visible={this.state.show}
          animationType="fade"
        >
          <ModalExample onClose={() => this.setState({ show: false })} />
        </Modal>
        <List>
          <InputItem
            key={11}
            type="money"
            moneyKeyboardAlign="left"
            extra={<Icon type="search" onClick={() => this.setState({ show: true })} />}
            placeholder="请输入额度"
          >额度</InputItem>
          <InputItem
            key={22}
            type="money"
            moneyKeyboardAlign="left"
            extra="%"
            placeholder="请输入月息"
          >月息</InputItem>
          <Button type="primary" onClick={this.onClick}>确认</Button>
        </List>
      </div>
    );
  }
}

InputMoneyBug.propTypes = {
};

export default connect()(InputMoneyBug);
