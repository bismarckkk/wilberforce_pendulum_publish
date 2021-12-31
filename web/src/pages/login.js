import { Select, Form, Input, Button, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import React, {Component} from 'react';
import { connect, Link } from 'umi';
import './login.css'

const { Option } = Select;

@connect(()=>({}))
class Login extends Component {
  state = {m: 's'}
  dispatch = this.props.dispatch

  onSubmit = async (values) => {
    //console.log(values);
    this.dispatch({ type: 'user/login', payload: values })
  };

  onModeChange = (e) => {
    this.setState({m: e})
  }

  componentDidMount() {
    this.dispatch({ type: 'user/init' });
    this.showLoginTips()
  }

  showLoginTips() {
    Modal.info({
      title: '测试账号',
      content: (
        <div>
          <p>该账号仅供测试使用，请选择教师模式登录</p>
          <p>账号：12345</p>
          <p>密码：123456</p>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: 330,
            margin: 'auto',
            position: 'relative',
            top: '40vh',
            transform: 'translateY(-50%)'
          }}
        >
          <Form
            name="normal_login"
            style={{maxWidth: 300}}
            initialValues={{ remember: true, m: 's' }}
            onFinish={this.onSubmit}
          >
            <h1 style={{textAlign: 'center', marginBottom: 24}}>
              韦氏摆在线试验系统
            </h1>
            <Form.Item name="m" rules={[{ required: true }]} style={{marginBottom: 15}}>
              <Select
                placeholder="身份类别"
                onChange={this.onModeChange}
                rules={[{ required: true, message: '请选择身份类型' }]}
              >
                <Option value="t">教师</Option>
                <Option value="s">学生</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="id"
              rules={[{ required: true, message: '请输入登录名' }, { min: this.state.m==='s'?'6':'2', message: '登录名至少6位' }, { max: 20, message: '登录名至多20位' }]}
              style={{marginBottom: 15}}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon'  />}
                placeholder={this.state.m==='s'?'学号':'姓名'}
                autoComplete="username"
              />
            </Form.Item>
            <Form.Item
              name="passwd"
              rules={[{ required: true, message: '请输入密码' }, { min: 6, message: '密码至少6位' }, { max: 20, message: '密码至多20位' }]}
              style={{marginBottom: 20}}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                autoComplete="current-password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item style={{marginBottom: 0}}>
              <Button type="primary" htmlType="submit" style={{width: '100%', marginBottom: 10}}>
                登录
              </Button>
              没有账号？
              <Link to="/register">现在注册</Link>
            </Form.Item>
          </Form>
        </div>
        <div style={{textAlign: 'center', top: '50vh', position: 'relative'}}>
          Online Laboratory ©2021 Created by <a href={'https://github.com/bismarckkk'}>Bismarckkk</a>
        </div>
      </div>
    );
  }
}

export default Login;
