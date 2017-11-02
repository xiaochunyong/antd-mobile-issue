import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, InputItem, List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class InputMoneyBug extends React.Component {

  onClick = () => {
    this.props.dispatch(routerRedux.replace({ pathname: '/page1' }));
  }

  render() {
    return (
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
        <Button type="primary" onClick={this.onClick}>确认</Button>
      </List>

    );
  }
}

InputMoneyBug.propTypes = {
};

export default connect()(InputMoneyBug);
