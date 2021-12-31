import { Form, Radio, Button, Space } from 'antd';
import React, {Component} from 'react';
import { history, connect } from 'umi'
import './login.css'


@connect(({ user }) => (user))
class Choose extends Component {
  dispatch = this.props.dispatch

  onSubmit = async (v) => {
    if (v.exp !== '5') {
      this.props.dispatch({ type: 'user/choose', payload: parseInt(v.exp) })
      history.push('/')
    } else {
      history.push('/studentData')
    }
  };

  render() {
    if (this.props.name === '') {
      history.push('/login')
    }
    let reviews = this.props.exps.map(v=>(v.review))
    //console.log(reviews)
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
          >
            <h1 style={{textAlign: 'center', marginBottom: 24}}>
              韦氏摆在线试验系统
            </h1>
            <p>选择实验项目：</p>
            <Form.Item name="exp" style={{marginBottom: 15, width: '100%'}} rules={[{required: true, message: '请选择实验项目'}]}>
              <Radio.Group style={{width: '100%'}}>
                <Space direction="vertical" style={{width: '100%'}}>
                  <Radio.Button
                    value="0"
                    style={{width: '100%', textAlign: 'center'}}
                  >
                    耦合条件的观察
                  </Radio.Button>
                  <Radio.Button
                    value="1"
                    style={{width: '100%', textAlign: 'center'}}
                    disabled={!reviews[0] || reviews[0] < 60}
                  >
                    耦合系数的测定
                  </Radio.Button>
                  <Radio.Button
                    value="2"
                    style={{width: '100%', textAlign: 'center'}}
                    disabled={!reviews[1] || reviews[1] < 60}
                  >
                    扭转系数的测定
                  </Radio.Button>
                  <Radio.Button
                    value="3"
                    style={{width: '100%', textAlign: 'center'}}
                    disabled={!reviews[2] || reviews[2] < 60}
                  >
                    泊松系数的测定
                  </Radio.Button>
                  <Radio.Button
                    value="4"
                    style={{width: '100%', textAlign: 'center'}}
                    disabled={!reviews[3] || reviews[3] < 60}
                  >
                    自由探究
                  </Radio.Button>
                  {
                    this.props.m === 't' ?
                      <Radio.Button
                        value="5"
                        style={{width: '100%', textAlign: 'center'}}
                        disabled={!reviews[3] || reviews[3] < 60}
                      >
                        查看学生数据
                      </Radio.Button> : <div/>
                  }
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item style={{marginBottom: 0}}>
              <Button type="primary" htmlType="submit" style={{width: '100%', marginBottom: 10}}>
                确定
              </Button>
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

export default Choose;
