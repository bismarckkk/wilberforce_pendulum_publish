import { FullscreenOutlined, FullscreenExitOutlined, UserOutlined, SlidersOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Menu, Button, Modal, Dropdown } from 'antd';
import { Link, history } from 'umi';
import React, { Component } from 'react';
import { connect } from 'dva';

const { Header, Content, Footer } = Layout;

@connect(({ user }) => (user))
class Index extends Component {
  state = { fullscreen: false };
  modal = false;

  componentDidMount() {
    const that = this;
    let lastWidth = 0;

    function resizeHandle(width) {
      if (!that.modal && width < 576 && width !== lastWidth) {
        that.modal = true;
        lastWidth = width;
        Modal.warning({
          title: '显示窗口过窄',
          content: '部分内容可能无法完美显示，请调整窗口大小或者将手机转为横屏',
          onOk: () => {
            that.modal = false;
          },
        });
      }
      if (that.modal && width >= 576) {
        Modal.destroyAll();
      }
    }

    let preview = 0;
    if (this.props.name) {
      if (this.props.m === 's' && this.props.nowExp < 4) {
        if (0 <= this.props.nowExp < 4) {
          preview = this.props.exps[this.props.nowExp].preview;
        } else {
          preview = 100
        }
      } else {
        preview = 100;
      }
    }

    if (preview < 60) {
      const timer = setInterval(() => {
        preview = 0;
        if (this.props.name) {
          if (this.props.m === 's' && this.props.nowExp < 4) {
            if (0 <= this.props.nowExp < 4) {
              preview = this.props.exps[this.props.nowExp].preview;
            } else {
              preview = 100
            }
          } else {
            preview = 100;
          }
        }
        if (preview < 60) {
          clearInterval(timer);
        }
        if (preview < 60 && window.location.pathname !== '/help' && window.location.pathname !== '/login') {
          history.push('/help');
        }
      }, 500);
    }

    resizeHandle(window.innerWidth);

    window.addEventListener('resize', () => {
      resizeHandle(window.innerWidth);
    }, false);
  }

  fullScreen() {
    let element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
    this.setState({
      fullscreen: true,
    });
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    this.setState({
      fullscreen: false,
    });
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  render() {
    if (this.props.name === '') {
      history.push('/login')
    }
    const fullButton = (
      <Button type='link' onClick={() => this.fullScreen()} size={'large'}>
        <FullscreenOutlined style={{ color: 'black' }} />
      </Button>
    );
    const unFullButton = (
      <Button type='link' onClick={() => this.exitFullscreen()} size={'large'}>
        <FullscreenExitOutlined style={{ color: 'black' }} />
      </Button>
    );
    const expList = [
      '耦合条件的观察',
      '耦合系数的测定',
      '扭转系数的测定',
      '泊松系数的测定',
      '自由探究',
    ]
    const menu = (
      <Menu>
        <Menu.Item>
          <SlidersOutlined />：{expList[this.props.nowExp]}
        </Menu.Item>
        <Menu.Item>
          <Link to="/choose">
            回到选择菜单
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => {this.props.dispatch({type: 'user/clean'})}}>
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    let preview = 0;
    if (this.props.name) {
      if (this.props.m === 's' && this.props.nowExp < 4) {
        preview = this.props.exps[this.props.nowExp].preview;
      } else {
        preview = 100;
      }
    }
    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', paddingRight: 10 }}>
            <Row>
              <Col lg={4} md={5} sm={7} xs={14}>
                <div>
                  <h3>韦氏摆在线实验系统</h3>
                </div>
              </Col>
              <Col lg={17} md={16} sm={13} xs={3}>
                <Menu theme='light' mode='horizontal' selectedKeys={[window.location.pathname]}>
                  <Menu.Item key='/help'>
                    <Link to='/help'>实验指南</Link>
                  </Menu.Item>
                  <Menu.Item key='/' disabled={preview < 60}>
                    <Link to='/'>实验台</Link>
                  </Menu.Item>
                  <Menu.Item key='/data' disabled={preview < 60}>
                    <Link to='/data'>历史数据</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col md={3} sm={4} xs={7}>
                <div style={{ alignItems: 'right', float: 'right', marginRight: '5%' }}>
                  {
                    this.state.fullscreen ?
                      unFullButton :
                      fullButton
                  }
                  <Dropdown overlay={menu}>
                    <UserOutlined style={{ color: 'black', fontSize: 16, marginLeft: 16 }} />
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Header>
          <Content className='site-layout' style={{ marginTop: 20 }}>
            <div className='site-layout-background'
                 style={{ padding: 24, paddingTop: 48, paddingBottom: 0, minHeight: 'calc(100vh - 114px)' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Online Laboratory ©2021 Created by <a
            href={'https://github.com/bismarckkk'}>Bismarckkk</a></Footer>
        </Layout>
      </div>
    );
  }
}

export default Index;
