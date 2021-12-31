import { Select, Form, Input, Button, message } from 'antd';
import { LockOutlined, UserOutlined, IdcardOutlined, ShareAltOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons'
import React, {Component} from 'react';
import { Link, history } from 'umi'
import { register, code2teacher } from '@/utils/service';
import './login.css'

const { Option } = Select;

function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] === variable){return pair[1];}
  }
  return false;
}


class Login extends Component {
  state = {m: 't', code: null, name: '正在获取...'}

  onSubmit = async (values) => {
    //console.log(values);
    let res = await register(values)
    if (res.data.error) {
      message.error(res.data.error)
    } else {
      message.success('注册成功，即将跳转到登录页面')
      history.push('/login')
    }
  };

  onModeChange = (e) => {
    this.setState({m: e})
  }

  componentDidMount() {
    let code = getQueryVariable('code')
    if (code) {
      this.setState({
        m: 's',
        code: code,
        name: '正在获取...'
      })
      const that = this
      code2teacher(code).then((e)=>{
        if (!e || e.status !== 200) {
          message.error('获取教师信息失败')
          that.setState({
            name: '获取教师信息失败'
          })
        } else {
          that.setState({
            name: '绑定教师：' + e.data.name
          })
          console.log(e.data.name)
        }
      })
    }
  }

  render() {
    if (getQueryVariable('code')) {
      this.state.m = 's'
    }
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
            onFinish={this.onSubmit}
            initialValues={{m: this.state.m}}
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
              name="name"
              rules={[{ required: true, message: '请输入姓名' }, { min: 2, message: '姓名至少2位' }, { max: 20, message: '姓名至多20位' }]}
              style={{marginBottom: 15}}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon'  />}
                placeholder='姓名'
                autoComplete="username"
              />
            </Form.Item>

            {
              this.state.m === 's' ?
                (
                  <div>
                    <Form.Item
                      name="sid"
                      style={{marginBottom: 15}}
                      rules={[{ required: true, message: '请输入学号' }]}
                    >
                      <Input
                        prefix={<IdcardOutlined className='site-form-item-icon'  />}
                        placeholder='学号'
                        autoComplete="sid"
                      />
                    </Form.Item>
                    {
                      this.state.code ?
                        <Form.Item
                          name="code"
                          style={{marginBottom: 15}}
                        >
                          <Input
                            prefix={<ShareAltOutlined className='site-form-item-icon'  />}
                            placeholder={this.state.name}
                            autoComplete="code"
                            disabled={true}
                          />
                        </Form.Item> :
                        <div />
                    }
                  </div>
                ) :
                (
                  <div>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: 'email',
                          message: '邮箱格式错误！',
                        },
                        {
                          required: true,
                          message: '请输入邮箱！',
                        },
                      ]}
                      style={{marginBottom: 15}}
                    >
                      <Input
                        prefix={<MailOutlined className='site-form-item-icon'  />}
                        placeholder='邮箱'
                        autoComplete="email"
                      />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: '请输入手机号码！',
                        },
                      ]}
                      style={{marginBottom: 15}}
                    >
                      <Input
                        prefix={<MobileOutlined className='site-form-item-icon'  />}
                        placeholder='手机号码'
                        autoComplete="phone"
                      />
                    </Form.Item>
                  </div>
                )
            }

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
            <Form.Item
              name="cPasswd"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '请重复输入一次密码！',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('passwd') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('两次密码不一致！'));
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                autoComplete="current-password"
                placeholder="重复密码"
              />
            </Form.Item>

            <Form.Item style={{marginBottom: 0}}>
              <Button type="primary" htmlType="submit" style={{width: '100%', marginBottom: 10}}>
                注册
              </Button>
              已经有账号？
              <Link to="/login">现在登录</Link>
            </Form.Item>
          </Form>
        </div>
        <div style={{textAlign: 'center', top: '25vh', position: 'relative'}}>
          Online Laboratory ©2021 Created by <a href={'https://github.com/bismarckkk'}>Bismarckkk</a>
        </div>
      </div>
    );
  }
}

export default Login;
