import React, { Component } from 'react';
import Latex from 'react-latex';
import LatexEQ from '@/component/LatexEq';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;


class Exp1 extends Component {
  render() {
    const eq1 = '$Z_{eq}=0$、$\\theta_{eq}=0$'
    const eq2 = '$-\\frac{1}{2} \\varepsilon z \\theta$'
    return (
      <Typography>
        <Title level={2}>
          实验指南
        </Title>
        <Paragraph>
          &emsp; &emsp;威尔伯福斯钟摆（下简称韦氏摆）是一个耦合的机械振荡器，
          是研究耦合运动的重要案例。耦合现象广泛存在于力学、电学、光学等各个领域中，
          在大学物理中占据着重要的地位。
        </Paragraph>
        <Paragraph>
            &emsp; &emsp;考虑一端固定的弹簧，其自由端悬挂一有质量的物体，
            可以绕系统的垂直轴自由旋转。该系统的示意图如下图所示，
            其中<Latex>{eq1}</Latex>表示系统在平衡状态下坐标为0。
        </Paragraph>
        <img src={require('@/assets/help/1.png')} alt={'韦氏摆示意图'} style={{width: '25vw', marginLeft: '5vw'}}/>
        <Paragraph>
          &emsp; &emsp;当拉动物体使得系统偏离平衡位置时，系统会产生两个方向上的运动，
          竖直方向上的平移和水平面上的旋转。有趣的是，两个方向上的运动均为表现为拍现象，
          且二者并不相互独立，而是相互耦合：当竖直方向上的运动逐渐增强（减弱）时，
          水平方向的运动渐渐减弱（增强），且在整体上做周期运动。如图所示。
        </Paragraph>
        <img src={require('@/assets/help/3.png')} alt={'韦氏摆曲线图'} style={{width: '40vw', marginLeft: '5vw'}}/>
        <Paragraph>
          &emsp; &emsp;当满足某一耦合条件时，一个方向的振幅会衰减为0，
          同时另外一个方向的振幅会达到最大，反之亦然，这时候称之为完全耦合。
        </Paragraph>
        <Title level={3}>
          思考题
        </Title>
        <Paragraph>
          &emsp; &emsp;已知系统中存在一种耦合势能的势能
          ，其表达式为<Latex>{eq2}</Latex>。你能否根据拉格朗日方程推导出韦氏摆的动力学微分方程？
          （答案见下一个实验的实验指南）
        </Paragraph>
      </Typography>
    );
  }
}

export default Exp1;
