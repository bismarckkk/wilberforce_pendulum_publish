import React, { Component } from 'react';
import { Typography } from 'antd';
import Latex from 'react-latex'

const { Paragraph } = Typography;

class LatexP extends Component {
  render() {
    return (
      <Paragraph>
        <Latex>
          {this.props.children}
        </Latex>
      </Paragraph>
    );
  }
}

export default LatexP;
