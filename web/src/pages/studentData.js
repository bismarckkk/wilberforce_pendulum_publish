import React, { Component } from 'react';
import { Table, Row, Col, Button, message } from 'antd';
import { connect, history } from 'umi'
import { LinkOutlined } from '@ant-design/icons'
import { getShareLink, getStudentData } from '@/utils/service';
import copy from 'copy-to-clipboard';


@connect(({ user }) => (user))
class StudentData extends Component {
  state = {data: [], link: ''}
  columns = [
    {
      title: '姓名',
      width: 150,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },{
      title: '学号',
      width: 150,
      dataIndex: 'sid',
      key: 'sid',
      fixed: 'left',
    },{
      title: '总评成绩',
      width: 100,
      dataIndex: 'result',
      key: 'result',
    },
    {
      title: '耦合条件的探究',
      key: 'exp0',
      children: [
        { title: '预习成绩', dataIndex: 'exp1Preview', key: 'exp1Preview' },
        { title: '实验次数', dataIndex: 'exp1', key: 'exp1' },
        { title: '结果成绩', dataIndex: 'exp1Review', key: 'exp1Review' },
      ]
    },
    {
      title: '耦合系数的测定',
      key: 'exp1',
      children: [
        { title: '预习成绩', dataIndex: 'exp2Preview', key: 'exp2Preview' },
        { title: '实验次数', dataIndex: 'exp2', key: 'exp2' },
        { title: '结果成绩', dataIndex: 'exp2Review', key: 'exp2Review' },
      ]
    },
    {
      title: '扭转系数的测定',
      key: 'exp2',
      children: [
        { title: '预习成绩', dataIndex: 'exp3Preview', key: 'exp3Preview' },
        { title: '实验次数', dataIndex: 'exp3', key: 'exp3' },
        { title: '结果成绩', dataIndex: 'exp3Review', key: 'exp3Review' },
      ]
    },
    {
      title: '泊松系数的测定',
      key: 'exp3',
      children: [
        { title: '预习成绩', dataIndex: 'exp4Preview', key: 'exp4Preview' },
        { title: '实验次数', dataIndex: 'exp4', key: 'exp4' },
        { title: '结果成绩', dataIndex: 'exp4Review', key: 'exp4Review' },
      ]
    },
  ]

  componentDidMount() {
    if (this.props.m !== 't') {
      history.push('/')
    }
    const that = this
    getShareLink().then((e) => {
      that.setState({link: e.data})
    })
    getStudentData().then((e) => {
      //console.log(e.data)
      this.setState({data: e.data})
    })
  }

  render() {
    return (
      <div style={{marginTop: '25px', backgroundColor: '#fff', padding: 25}}>
        <Row style={{marginTop: -5, marginBottom: 5}}>
          <Col span={18}>
            <h2>学生实验数据</h2>
          </Col>
          <Col span={6}>
            <div style={{ alignItems: 'right', float: 'right' }}>
              <Button type={'primary'} onClick={() => {
                copy(window.location.origin + this.state.link)
                message.success('已复制到剪贴板')
              }}>
                <LinkOutlined />学生注册链接
              </Button>
            </div>
          </Col>
        </Row>
        <Table columns={this.columns} bordered size="middle" dataSource={this.state.data} scroll={{ x: 2400 }} />
      </div>
    );
  }
}

export default StudentData;
