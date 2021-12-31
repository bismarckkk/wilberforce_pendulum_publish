import React, { Component } from 'react';
import { Card, Button, Modal, Select, Tooltip } from 'antd';
import { connect } from 'dva';
import { answer, columns } from '@/utils/reivewQuestions';
import { BetaSchemaForm } from '@ant-design/pro-form';
import Exp0 from './param/exp0'
import Exp1 from './param/exp1'
import Exp2 from './param/exp2'
import Exp3 from './param/exp3'
import Exp4 from './param/exp4'
import { QuestionCircleOutlined } from '@ant-design/icons';

@connect(({ param, spring, user }) => ({ ...param, spring, user }))
class Param extends Component {
  dispatch = this.props.dispatch;
  deq = null;
  timer = null;
  state = { formShow: false, mode: 0 }


  startHandle() {
    let p = {
      z0: this.props.spring.length,
      theta0: this.props.spring.rotate,
      m: this.props.m,
      i: this.props.i,
      k: this.props.k,
      kp: this.props.kp,
      rho: this.props.rho,
      mode: this.state.mode
    };

    this.dispatch({ type: 'spring/getSeries', payload: p });
    this.dispatch({ type: 'user/log', payload: { count: 1 } });
  }

  stopHandle() {
    clearInterval(this.timer);
    this.timer = null;
    this.deq = null;
    this.dispatch({ type: 'spring/stop' });
  }

  showForm = (p=true) => {
    this.setState({formShow: p})
  }

  changeHandle(e) {
    this.setState({mode: e.toString()})
  }

  onFinish = async (v) => {
    let res = {}
    const keys = ['1', '2', '3', '4', '5', '6']
    for (let it in v) {
      for (let it1 in keys) {
        if (it1 === it) {
          res[it] = v[it]
          break
        }
      }
    }
    //console.log(res)
    let result = answer[this.props.user.nowExp](res)
    //this.showForm(false)
    //console.log(result)
    Modal.success({
      title: '你已经完成本次实验',
      content: '你本次实验的得分是 ' + (Math.round(result * 100) / 100).toString(),
      onOk: () => {
        this.props.dispatch({
          type: 'user/log',
          payload: {
            review: result
          }
        })
      }
    })
  }

  componentWillUnmount() {
    this.stopHandle()
  }

  render() {
    let startButton = [
      <Button
        type='primary' onClick={() => this.startHandle()} size={'small'}
        style={{ fontSize: 'small' }} key='start'>开始仿真
      </Button>
    ];
    if (this.props.user.name && this.props.user.m === 's' && this.props.user.nowExp < 4 &&
      this.props.user.exps[this.props.user.nowExp].count && this.props.user.exps[this.props.user.nowExp].review < 60) {
      startButton.push(
        <Button onClick={() => {this.showForm()}}  size={'small'}
                style={{ fontSize: 'small', marginLeft: 15 }} key='submit' >
          提交结果
        </Button>
      )
    }
    let stopButton = (<Button type='primary' onClick={() => this.stopHandle()} size={'small'}
                              style={{ fontSize: 'small' }}>停止仿真</Button>);
    // TODO: panel高度自适应
    let Exp=''
    switch (this.props.user.nowExp.toString()) {
      case "0": Exp = <Exp1/>; break;
      case "1": Exp = <Exp2/>; break;
      case "2": Exp = <Exp3/>; break;
      case "3": Exp = <Exp4/>; break;
      case "4": Exp = <Exp0/>; break;
    }
    //console.log(this.props.user.nowExp.toString())
    return (
      <div>
        <Card title={'参数设置'} style={{ width: '100%', height: '100%' }}
              extra={this.props.spring.started ? stopButton : startButton}>
          {Exp}
          <Select defaultValue="0" style={{ width: '50%', marginTop: 15, marginRight: 25 }} onChange={(e) => {this.changeHandle(e)}}>
            <Option value="0">以当前重量平衡位置为零点</Option>
            <Option value="1">以弹簧原长位置为零点</Option>
          </Select>
          <Tooltip title={<div align='center'>{this.state.mode===0?'当前模式下释放位置调整的基准位置为平衡位置':'当前模式下释放位置调整的基准位置为悬挂0.5kg物体时平衡位置'}</div>}
                   style={{paddingLeft: 25}}>
            <QuestionCircleOutlined />
          </Tooltip>
        </Card>
        {
          this.props.user.nowExp < 4 ?
          <BetaSchemaForm
          layoutType='ModalForm'
          visible={this.state.formShow}
          onFinish={this.onFinish}
          onVisibleChange={this.showForm}
          columns={columns[this.props.user.nowExp]}
          />
          : <div />
        }
      </div>
    );
  }
}

export default Param;
