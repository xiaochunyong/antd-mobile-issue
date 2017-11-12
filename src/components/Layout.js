import React from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import { connect } from 'dva';
import { routerRedux, withRouter } from 'dva/router';

function Layout({ dispatch, children, history }) {
  function renderBar(tabs) {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={<div
              style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div
              style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
            }
            selected={tabs.isMy}
            onPress={() => dispatch(routerRedux.push('/'))}
          >
            {tabs.isMy ? children : null}
          </TabBar.Item>
          <TabBar.Item
            title="订单"
            key="订单"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selected={tabs.isOrder}
            onPress={() => dispatch(routerRedux.push({ pathname: '/order' }))}
          >
            {tabs.isOrder ? children : null}
          </TabBar.Item>
          <TabBar.Item
            title="产品"
            key="产品"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selected={tabs.isProduct}
            onPress={() => dispatch(routerRedux.push('/product'))}
          >
            {tabs.isProduct ? children : null}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
  const { location } = history;


  let selected = 'isMy';
  switch (location.pathname) {
    case '/':
      selected = 'isMy';
      break;
    case '/order':
      selected = 'isOrder';
      break;
    case '/product':
      selected = 'isProduct';
      break;
    case '/tool':
      selected = 'isTool';
      break;
    case '/setting':
      selected = 'isSetting';
      break;
    default:
      selected = 'isBack';
      break;
  }
  const tabs = { [selected]: true };

  if (!tabs.isBack) {
    return renderBar(tabs);
  }
  return children;
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(Layout));
