import React from 'react';
import { connect } from 'dva';
import { List, InputItem, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class ModalExample extends React.Component {

  render() {
    return (
      <div>
        <List>
          <InputItem
            key={11}
            type="money"
            moneyKeyboardAlign="left"
            extra="万"
            placeholder="请输入额度"
          >额度</InputItem>
          <InputItem
            key={22}
            type="money"
            moneyKeyboardAlign="left"
            extra="%"
            placeholder="请输入月息"
          >月息</InputItem>
          <Button type="primary" onClick={this.props.onClose}>确认</Button>
        </List>
      </div>
    );
  }
}

ModalExample.propTypes = {
};

export default connect()(ModalExample);
