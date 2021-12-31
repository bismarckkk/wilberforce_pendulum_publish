import { Slider, InputNumber, Row, Col } from 'antd';
import React, { Component } from 'react';
import Latex from 'react-latex'
import { connect } from 'umi'

@connect(()=>({}))
class SliderWithNumber extends Component {
  dispatch = this.props.dispatch

  constructor(props) {
    super(props);
    let state = {}
    if (typeof(this.props.minValue) == "undefined") {
      state.minValue = 0
    } else {
      state.minValue = this.props.minValue
    }
    if (typeof(this.props.maxValue) == "undefined") {
      state.maxValue = this.props.minValue + 1
    } else {
      state.maxValue = this.props.maxValue
    }
    if (typeof(this.props.disabled) == "undefined") {
      state.disabled = false
    } else {
      state.disabled = this.props.disabled
    }
    //console.log(state.maxValue, state.minValue, (state.maxValue - state.minValue) / 500)
    if (typeof(this.props.defaultValue) == "undefined") {
      state.inputValue = (this.props.minValue + this.props.maxValue) / 2
    } else {
      state.inputValue = this.props.defaultValue
    }
    state.isDispatch = typeof(this.props.dispatch_type) != "undefined"
    this.state = state
  }

  onChange = value => {
    this.setState({
      inputValue: value,
    });
    if (this.state.isDispatch) {
      let that = this
      this.dispatch({
        type: that.props.dispatch_type,
        payload: {[that.props.dispatch_name]: value}
      })
    }
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row gutter={8}>
        <link href={'//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css'} rel={'stylesheet'}/>
        <Col xl={{span: 6, order:1}} xs={{span: 12, order:1}}>
          <div style={{textAlign: 'center', marginTop: '-5px', marginLeft: '-5px'}}>
            <Latex displayMode={true}>{this.props.name}</Latex>
          </div>
        </Col>
        <Col xl={{span: 12, order:2}} xs={{span: 24, order:3}}>
          <Slider
            min={this.state.minValue}
            max={this.state.maxValue}
            onChange={this.onChange}
            step={(this.state.maxValue - this.state.minValue) / 100}
            value={typeof inputValue === 'number' ? inputValue : 0}
            disabled={this.state.disabled}
          />
        </Col>
        <Col xl={{span: 3, order:3}} lg={{span: 5, order:2}} xs={{span: 6, order:2}}>
          <InputNumber
            min={this.state.minValue}
            max={this.state.maxValue}
            style={{width: '250%'}}
            value={inputValue}
            onChange={this.onChange}
            step={(this.state.maxValue - this.state.minValue) / 10}
            disabled={this.state.disabled}
          />
        </Col>
      </Row>
    );
  }
}

export default SliderWithNumber
