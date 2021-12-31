import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;


class Exp3 extends Component {
  render() {
    return (
      <Typography>
        <Title level={2}>
          实验指南
        </Title>
        <Paragraph>
          &emsp; &emsp;给定弹簧的弹性系数与物块的质量，调节横杆上的砝码以改变物体的转动惯量，
          当出现完全耦合的现象时，可以根据耦合条件求出弹簧的扭转系数。
        </Paragraph>
      </Typography>
    );
  }
}

export default Exp3;
