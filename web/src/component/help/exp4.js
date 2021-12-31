import React, { Component } from 'react';
import Latex from 'react-latex';
import LatexEQ from '@/component/LatexEq';
import { Typography, Descriptions  } from 'antd';

const { Title, Paragraph } = Typography;


class Exp4 extends Component {
  render() {
    const eq1 = '$v=-\\frac{\\varepsilon_1}{\\varepsilon}$'
    const eq2 = '$G=\\frac{E}{2(1+v)}$'
    const eq3 = '$U_B=\\frac{1}{2}EI_1L\\left(\\kappa-\\kappa_0\\right)^2$'
    const eq4 = '$U_T=\\frac{1}{2}GI_2L\\left(\\tau-\\tau_0\\right)^2$'
    const eq5 = '$\\kappa=\\frac{\\theta\\left(L^2-z^2\\right)^\\frac{1}{2}}{L^2}$'
    const eq6 = '$\\tau=\\frac{z\\theta}{L^2}$'
    const eq7 = '$U=U_B+U_T-Mgz$'
    const eq8 = '$\\frac{\\delta U}{\\delta\\theta}=0$'
    const eq9 = '$\\left(\\frac{z}{L}\\right)^2\\ll1$'
    const eq10 = '$\\frac{\\theta-\\theta_0}{\\theta_0}\\ll1$'
    const eq11 = '$\\frac{\\theta-\\theta_0}{\\theta_0}=\\frac{zz_0-\\frac{z^2\\left(1-v\\right)}{2}-\\frac{{z_0}^2\\left(1+v\\right)}{2}}{L^2\\left(1+v\\right)}$'
    const eq12 = '$z=\\frac{z_0}{1-v}$'
    return (
      <Typography>
        <Title level={2}>
          实验指南
        </Title>
        <Paragraph>
          &emsp; &emsp;在固体力学中，材料的横向变形系数，即泊松比，又称泊松系数。
          材料的横向应变与纵向应变之比就是泊松比。
        </Paragraph>
        <Paragraph>
            &emsp; &emsp;材料沿载荷方向产生伸长(或缩短)变形的同时，
          在垂直于载荷的方向会产生缩短(或伸长)变形。垂直方向上的应变<Latex>$\varepsilon_1$</Latex>
          与载荷方向上的应变<Latex>$\varepsilon$</Latex>之比的负值称为材料的泊松比。以<Latex>$v$</Latex>表示泊松比，
          则<Latex>{eq1}</Latex>。在材料弹性变形阶段内，<Latex>$v$</Latex>是一个常数。理论上，
          各向同性材料的三个弹性常数<Latex>$E$</Latex>（杨氏模量）、<Latex>$G$</Latex>（剪切模量）、
          <Latex>$v$</Latex>中，只有两个是独立的，因为它们之间存在如下关系
        </Paragraph>
        <LatexEQ>
          {eq2}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;当我们求出泊松系数就知道了杨氏模量<Latex>$E$</Latex>
          与剪切模量<Latex>$G$</Latex>的关系。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;对于一端固定的竖直的螺旋形的弹簧，
          初始曲率为<Latex>$\kappa_0$</Latex>，初始扭转系数为<Latex>$\tau_0$</Latex>，
          当弹簧自由端悬挂一质量为M的物体时，进一步产生弯曲与扭转的能量为
        </Paragraph>
        <LatexEQ>
          {eq3}
        </LatexEQ>
        <LatexEQ>
          {eq4}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;其中<Latex>$E$</Latex>为杨氏模量，<Latex>$G$</Latex>为剪切模量，
          <Latex>$I_1$</Latex>、<Latex>$I_2$</Latex>为材料横截面对弯曲中性轴的惯性矩，
          <Latex>$L$</Latex>是弹簧铁丝的长度。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;令弹簧的高度为<Latex>$z$</Latex>，从固定端到自由端螺旋的角度为<Latex>$\theta$</Latex>，
          那么根据螺旋形的几何特征，可以给出<Latex>$\kappa$</Latex>、<Latex>$\tau$</Latex>的表达式，为
        </Paragraph>
        <LatexEQ>
          {eq5}
        </LatexEQ>
        <LatexEQ>
          {eq6}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;那么当整个系统平衡时，能量<Latex>$U$</Latex>为
        </Paragraph>
        <LatexEQ>
          {eq7}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;若弹簧半径为r，由上述公式以及平衡时的条件<Latex>{eq8}</Latex>
          ，并在假设<Latex>{eq9}</Latex>，<Latex>{eq10}</Latex>成立的条件下，
          得到（具体推导过程可自行思考）
        </Paragraph>
        <LatexEQ>
          {eq11}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;其中<Latex>$v$</Latex>为泊松系数，<Latex>$z_0$</Latex>为不悬挂物体时弹簧的高度，
          <Latex>$L$</Latex>为弹簧丝的长度，<Latex>$\theta_0$</Latex>为不悬挂物体时从固定端到自由端螺旋的角度。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;二者成二次函数的关系，当水平旋转角度\theta达到最大值时，有<Latex>{eq12}</Latex>成立。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;悬挂不同质量的物块，
          可以得到弹簧高度与旋转角度的多组数据对，拟合出二者的二次关系就可求出泊松系数。
        </Paragraph>
        <Title level={4}>
          实验数据
        </Title>
        <Descriptions bordered column={2}>
          <Descriptions.Item label="弹簧丝长度"><Latex>$157.08cm$</Latex></Descriptions.Item>
          <Descriptions.Item label="弹簧初始高度"><Latex>$20cm$</Latex></Descriptions.Item>
          <Descriptions.Item label="弹簧初始螺旋角度"><Latex>$20\pi\;rad$</Latex></Descriptions.Item>
          <Descriptions.Item label="弹簧初始匝数">10</Descriptions.Item>
        </Descriptions>
      </Typography>
    );
  }
}

export default Exp4;
