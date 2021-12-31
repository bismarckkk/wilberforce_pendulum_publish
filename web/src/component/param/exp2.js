import React, { Component } from 'react';
import { Col, Row } from 'antd';
import SliderWithNumber from '@/component/sliderWithNumber';
import { connect } from 'umi';

@connect(({ param }) => (param))
class Exp2 extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'param/update', payload: {k: 25, kp: 5e-3, i: 1.2e-4, m: 0.5}})
  }
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <SliderWithNumber minValue={0.4} maxValue={0.7} defaultValue={this.props.m}
                            dispatch_type={'param/update'} dispatch_name={'m'} disabled={true} name={'$m(kg)$'} />
          <br />
          <SliderWithNumber minValue={20} maxValue={30} defaultValue={this.props.k}
                            dispatch_type={'param/update'} dispatch_name={'k'} disabled={true} name={'$k(N/m)$'} />
          <br />
          <SliderWithNumber minValue={0} maxValue={0.05} defaultValue={0}
                            dispatch_type={'spring/update'} dispatch_name={'length'} name={'$z_0(m)$'} />
        </Col>
        <Col span={12}>
          <SliderWithNumber minValue={1e-5} maxValue={2e-4} defaultValue={this.props.i}
                            dispatch_type={'param/update'} dispatch_name={'i'} name={'$I(kg \\cdot m)$'} />
          <br />
          <SliderWithNumber minValue={2e-3} maxValue={10e-3} defaultValue={this.props.kp}
                            dispatch_type={'param/update'} dispatch_name={'kp'} disabled={true} name={'$k\'(N/rad)$'} />
          <br />
          <SliderWithNumber minValue={-Math.PI * 2} maxValue={Math.PI * 2} defaultValue={0}
                            dispatch_type={'spring/update'} dispatch_name={'rotate'} name={'$\\theta_0(rad)$'} />
        </Col>
      </Row>
    );
  }
}

export default Exp2;
