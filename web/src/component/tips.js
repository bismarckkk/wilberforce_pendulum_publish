import React, { Component } from 'react';
import { Affix, Button, Modal } from 'antd';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { connect } from 'umi';
import { columns, answer } from '@/utils/preivewQuestions';

@connect(({ user }) => (user))
class Tips extends Component {
  timer = null;
  state = { formShow: false }

  componentDidMount() {
    let preview = 0;
    if (this.props.name) {
      if (this.props.m === 's') {
        if (this.props.nowExp < 4) {
          preview = this.props.exps[this.props.nowExp].preview;
        } else {
          preview = 100
        }
      } else {
        preview = 100;
      }
    }
    if (!this.props.exps[this.props.nowExp].previewUnlock && preview < 60) {
      const that = this;
      Modal.info({
        title: '请先阅读实验指南后再进行操作', content: '实验台和实验历史在阅读实验指南两分钟后后解锁', onOk: function() {
          Modal.destroyAll();
          if (!that.timer) {
            that.timer = setInterval(() => {
              let sec = that.props.sec + 1;
              let min = that.props.min;
              if (sec >= 60) {
                sec = 0;
                if (min <= 0) {
                  min += 1;
                } else {
                  min += 1;
                  clearInterval(that.timer);
                }
              }
              that.props.dispatch({
                type: 'user/updateTime',
                payload: {
                  min: min,
                  sec: sec,
                },
              });
            }, 1000);
          }
        },
      });
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null
    }
  }

  showForm = (p=true) => {
    this.setState({formShow: p})
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
    let result = 0
    //console.log(res)
    for (let it in res) {
      if (answer[this.props.nowExp][it] && JSON.stringify(answer[this.props.nowExp][it]) === JSON.stringify(res[it])) {
        result += 100 / Object.keys(answer[this.props.nowExp]).length
      }
    }
    this.showForm(false)
    if (result < 60) {
      this.props.dispatch({
        type: 'user/log',
        payload: {
          preview: result
        }
      })
      Modal.warning({
        title: '你没有通过本次预习测试',
        content: '你本次预习测试的得分是 ' + (Math.round(result * 100) / 100).toString()
      })
    } else {
      Modal.success({
        title: '你成功通过本次预习测试',
        content: '你本次预习测试的得分是 ' + (Math.round(result * 100) / 100).toString(),
        onOk: () => {
          this.props.dispatch({
            type: 'user/log',
            payload: {
              preview: result
            }
          })
        }
      })
    }
  }

  render() {
    let preview = 0;
    if (this.props.name) {
      if (this.props.m === 's') {
        if (this.props.nowExp < 4) {
          preview = this.props.exps[this.props.nowExp].preview;
        } else {
          preview = 100
        }
      } else {
        preview = 100;
      }
    }
    //console.log(columns,this.props.nowExp,columns[this.props.nowExp])
    return (
      <div>
        <Affix style={{ position: 'absolute', top: 60, right: 50, display: preview < 60 ? 'block' : 'none'}} offsetTop={84}>
          {
            !this.props.exps[this.props.nowExp].previewUnlock ?
              <Button>
                已经阅读{this.props.min}分{this.props.sec}秒
              </Button> :
              <Button type='primary' onClick={() => {this.showForm()}}>
                点击进入预习测试
              </Button>
          }
        </Affix>
        {
          this.props.nowExp < 4 ?
            <BetaSchemaForm
              layoutType='ModalForm'
              visible={this.state.formShow}
              onFinish={this.onFinish}
              onVisibleChange={this.showForm}
              columns={columns[this.props.nowExp]}
            />
            : <div />
        }
      </div>
    );
  }
}

export default Tips;
