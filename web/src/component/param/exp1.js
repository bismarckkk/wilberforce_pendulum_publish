import React, { Component } from 'react';
import { Col, Row, Radio, Space } from 'antd';
import SliderWithNumber from '@/component/sliderWithNumber';
import { connect } from 'umi';
import Latex from 'react-latex';

@connect(({ param }) => (param))
class Exp1 extends Component {
  onChange = (v) => {
    const data = [
      {m: 0.5, i: 1.2e-4, k: 25, kp: 5e-3},
      {m: 0.5, i: 1.0e-4, k: 25, kp: 5e-3},
      {m: 0.6, i: 1.0e-4, k: 30, kp: 5e-3},
      {m: 0.6, i: 1.0e-4, k: 25, kp: 5e-3},
    ]
    //console.log(data[v.target.value])
    this.props.dispatch({type: 'param/update', payload: data[v.target.value]})
  }

  componentDidMount() {
    this.props.dispatch({type: 'param/update', payload: {m: 0.5, i: 1.2e-4, k: 25, kp: 5e-3}})
  }

  render() {
    const eq1 = '$m=0.5kg\\;\\;I=1.2\\times 10^{-4}kg \\cdot m\\;\\;k=25N/m\\;\\;k\'=5\\times 10^{-3}N/rad$'
    const eq2 = '$m=0.5kg\\;\\;I=1.0\\times 10^{-4}kg \\cdot m\\;\\;k=25N/m\\;\\;k\'=5\\times 10^{-3}N/rad$'
    const eq3 = '$m=0.6kg\\;\\;I=1.0\\times 10^{-4}kg \\cdot m\\;\\;k=30N/m\\;\\;k\'=5\\times 10^{-3}N/rad$'
    const eq4 = '$m=0.6kg\\;\\;I=1.0\\times 10^{-4}kg \\cdot m\\;\\;k=25N/m\\;\\;k\'=5\\times 10^{-3}N/rad$'
    return (
      <div>
        <Radio.Group onChange={this.onChange} style={{marginBottom: 15}} defaultValue={0}>
          <Space direction="vertical">
            <Radio value={0}><Latex>{eq1}</Latex></Radio>
            <Radio value={1}><Latex>{eq2}</Latex></Radio>
            <Radio value={2}><Latex>{eq3}</Latex></Radio>
            <Radio value={3}><Latex>{eq4}</Latex></Radio>
          </Space>
        </Radio.Group>
        <Row gutter={16}>
          <Col span={12}>
            <SliderWithNumber minValue={0} maxValue={0.05} defaultValue={0}
                              dispatch_type={'spring/update'} dispatch_name={'length'} name={'$z_0(m)$'} />
          </Col>
          <Col span={12}>
            <SliderWithNumber minValue={-Math.PI * 2} maxValue={Math.PI * 2} defaultValue={0}
                              dispatch_type={'spring/update'} dispatch_name={'rotate'} name={'$\\theta_0(rad)$'} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Exp1;
