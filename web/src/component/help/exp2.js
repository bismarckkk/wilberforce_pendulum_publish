import React, { Component } from 'react';
import Latex from 'react-latex';
import LatexEQ from '@/component/LatexEq';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;


class Exp2 extends Component {
  render() {
    const eq1 = '$U_B=\\frac{1}{2}EI_1L\\left(\\kappa-\\kappa_0\\right)^2$'
    const eq2 = '$U_T=\\frac{1}{2}GI_2L\\left(\\tau-\\tau_0\\right)^2$'
    const eq3 = '$\\kappa=\\frac{\\theta\\left(L^2-z^2\\right)^\\frac{1}{2}}{L^2}$'
    const eq4 = '$\\tau=\\frac{z\\theta}{L^2}$'
    const eq5 = '$\\frac{\\delta U}{\\delta z}=0$'
    const eq6 = '$\\frac{\\delta U}{\\delta\\theta}=0$'
    const eq7 = '$U=\\frac{1}{2}U_{\\mathrm{zz}}\\varsigma^2+U_{z\\theta}\\varsigma\\phi+\\frac{1}{2}U_{\\theta\\theta}\\phi^2$'
    const eq8 = '$L=\\frac{1}{2}m{\\dot{z}}^2+\\frac{1}{2}I{\\dot{\\theta}}^2-\\frac{1}{2}kz^2-\\frac{1}{2}\\delta\\theta^2-\\frac{1}{2}\\varepsilon z\\theta$'
    const eq9 = '$m\\ddot{z}+kz+\\frac{1}{2}\\varepsilon\\theta=0$'
    const eq10 = '$I\\ddot{\\theta}+\\delta\\theta+\\frac{1}{2}\\varepsilon z=0$'
    const eq11 = '$-\\ddot{z}=az+b\\cdot\\left(\\alpha\\theta\\right)$'
    const eq12 = '$-\\left(\\alpha\\ddot{\\theta}\\right)=bz+c\\cdot\\left(\\alpha\\theta\\right)$'
    const eq13 = '$a=\\frac{k}{m}$'
    const eq14 = '$b=\\frac{\\varepsilon}{2\\sqrt{mI}}$'
    const eq15 = '$c=\\frac{k\'}{I}$'
    const eq16 = '$\\alpha=\\sqrt{\\frac{I}{m}}$'
    const eq17 = '$z=A_1sin{p}t+A_2cos{p}t+B_1sin{q}t+B_2cos{q}t$'
    const eq18 = '$\\alpha\\theta=\\frac{p^2-a}{b}\\left(A_1sin{p}t+A_2cos{p}t\\right)+\\frac{q^2-a}{b}\\left(B_1sin{q}t+B_2cos{q}t\\right)$'
    const eq19 = '$\\frac{p^2-a}{b}z-\\alpha\\theta=L_1sin{\\left(qt+\\varepsilon_1\\right)}$'
    const eq20 = '$\\frac{q^2-a}{b}z-\\alpha\\theta=L_2sin{\\left(pt+\\varepsilon_2\\right)}$'
    const eq21 = '$\\frac{p^2-a}{b}z=\\alpha\\theta$'
    const eq22 = '$\\frac{2\\pi}{p}$'
    const eq23 = '$\\frac{q^2-a}{b}z=\\alpha\\theta$'
    const eq24 = '$\\frac{2\\pi}{q}$'
    const eq25 = '$2\\lambda=\\frac{c-a}{b}$'
    const eq26 = '$\\left(\\lambda+\\sqrt{\\lambda^2+1}\\right)z=\\alpha\\theta$'
    const eq27 = '$\\left(\\lambda-\\sqrt{\\lambda^2+1}\\right)z=\\alpha\\theta$'
    const eq28 = '$\\left(\\lambda+\\sqrt{\\lambda^2+1}\\right)\\DeltaΑz=\\DeltaαΑθ$'
    const eq29 = '$\\left(\\lambda-\\sqrt{\\lambda^2+1}\\right)\\DeltaΑz=\\DeltaαΑθ$'
    const eq30 = '$\\Delta_1Az=x\\frac{\\sqrt{\\lambda^2+1}-\\lambda}{\\sqrt{\\lambda^2+1}}$'
    const eq31 = '$\\Delta_1\\left(\\alpha\\theta\\right)=x\\frac{1}{\\sqrt{\\lambda^2+1}}$'
    const eq32 = '$\\Delta_2Az=x\\frac{\\sqrt{\\lambda^2+1}+\\lambda}{\\sqrt{\\lambda^2+1}}$'
    const eq33 = '$\\Delta_2\\left(\\alpha\\theta\\right)=-x\\frac{1}{\\sqrt{\\lambda^2+1}}$'
    const eq34 = '$x\\frac{\\lambda}{\\sqrt{\\lambda^2+1}}$'
    const eq35 = '$x\\frac{1}{\\sqrt{\\lambda^2+1}}$'
    const eq36 = '$\\frac{k}{m}=\\frac{k\'}{I}$'
    const eq37 = '$\\omega^2=\\frac{k}{m}=\\frac{k\'}{I}$'
    const eq38 = '$p^2=\\omega^2+\\sqrt{\\frac{\\varepsilon^2}{4mI}}$'
    const eq39 = '$q^2=\\omega^2-\\sqrt{\\frac{\\varepsilon^2}{4mI}}$'
    const eq40 = '$p=\\sqrt{\\omega^2+\\frac{\\varepsilon}{2\\sqrt{mI}}}=\\omega\\sqrt{1+\\frac{\\varepsilon}{2\\omega^2\\sqrt{mI}}}\\approx\\omega\\left(1+\\frac{\\varepsilon}{4\\omega^2\\sqrt{mI}}\\right)=\\omega+\\frac{\\varepsilon}{4\\omega\\sqrt{mI}}$'
    const eq41 = '$q=\\omega-\\frac{\\varepsilon}{4\\omega\\sqrt{mI}}$'
    const eq42 = '$\\varepsilon=2\\omega\\left(p-q\\right)\\sqrt{mI}$'
    return (
      <Typography>
        <Title level={2}>
          实验指南
        </Title>
        <Title level={4}>
          耦合势能的引入
        </Title>
        <Paragraph>
          &emsp; &emsp;对于一端固定的竖直的螺旋形的弹簧，
          初始曲率为<Latex>$\kappa_0$</Latex>，初始扭转系数为<Latex>$\tau_0$</Latex>，
          当弹簧自由端悬挂一质量为M的物体时，进一步产生弯曲与扭转的能量为
        </Paragraph>
        <LatexEQ>
          {eq1}
        </LatexEQ>
        <LatexEQ>
          {eq2}
        </LatexEQ>
        <Paragraph>
            &emsp; &emsp;其中E为杨氏模量，<Latex>$G$</Latex>为剪切模量，
          <Latex>$I_1$</Latex>、<Latex>$I_2$</Latex>为材料横截面对弯曲中性轴的惯性矩，
          <Latex>$L$</Latex>是弹簧铁丝的长度。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;令弹簧的高度为<Latex>$z$</Latex>，从固定端到自由端螺旋的角度为<Latex>$\theta$</Latex>，
          那么根据螺旋形的几何特征，可以给出<Latex>$\kappa$</Latex>、<Latex>$\tau$</Latex>的表达式，为
        </Paragraph>
        <LatexEQ>
          {eq3}
        </LatexEQ>
        <LatexEQ>
          {eq4}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;那么当整个系统平衡时，能量<Latex>$U$</Latex>为
        </Paragraph>
        <LatexEQ>
          $U=U_B+U_T-Mgz$
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;假设系统在平衡位置附近产生竖直位置与水平角度的微小的偏移<Latex>$\zeta$</Latex>、<Latex>$\varphi$</Latex>（动能可忽略），
          并注意平衡点处满足<Latex>{eq5}</Latex>、<Latex>{eq6}</Latex>，那么根据二元函数的泰勒展开公式有
        </Paragraph>
        <LatexEQ>
          {eq7}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;其中第一项和第三项分别是弹性势能与扭转势能，定义第二项为耦合势能。
        </Paragraph>
        <Title level={4}>
          韦氏摆的运动方程
        </Title>
        <Paragraph>
          &emsp; &emsp;考虑一个竖直位移和水平偏转较小（因此可以采用上述的耦合势能的表达式；
          同时由于竖直偏移较小，忽略重力势能的变化）的动态的韦氏摆，
          定义平衡位置时物体时<Latex>$z$</Latex>、<Latex>$\theta$</Latex>为0，
          那么可以写出系统的拉格朗日函数
        </Paragraph>
        <LatexEQ>
          {eq8}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;关于<Latex>$z$</Latex>、<Latex>$\theta$</Latex>的拉格朗日方程为，
        </Paragraph>
        <LatexEQ>
          {eq9}
        </LatexEQ>
        <LatexEQ>
          {eq10}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;重新整理可以写成
        </Paragraph>
        <LatexEQ>
          {eq11}
        </LatexEQ>
        <LatexEQ>
          {eq12}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;其中，<Latex>{eq13}</Latex>，<Latex>{eq14}</Latex>
          <Latex>{eq15}</Latex>，<Latex>{eq16}</Latex>
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;该方程通解为
        </Paragraph>
        <LatexEQ>
          {eq17}
        </LatexEQ>
        <LatexEQ>
          {eq18}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;其中，<Latex>$p^2$</Latex>，<Latex>$q^2$</Latex>为
          <Latex>$(x-a)(x-c)=b^2$</Latex>的解，不妨设<Latex>$p^2>q^2$</Latex>
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;竖直振动与水平偏转均由两种普通的简谐振动线性合成。
          不难发现，与拍现象的表达式相同，也会形成拍。整理得：
        </Paragraph>
        <LatexEQ>
          {eq19}
        </LatexEQ>
        <LatexEQ>
          {eq20}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;当<Latex>{eq21}</Latex>在运动中恒成立时，两个方向上是单一的周期为
          <Latex>{eq22}</Latex>的简谐运动；
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;当<Latex>{eq23}</Latex>在运动中恒成立时，两个方向上是单一的周期为
          <Latex>{eq24}</Latex>的简谐运动.
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;把这两种情况称为系统的普通振动模式。一般来说系统由两种模式线性合成。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;如果令<Latex>{eq25}</Latex>，
          那么两种普通振动模式独立出现的条件是满足以下两个式子之一：
        </Paragraph>
        <LatexEQ>
          {eq26}
        </LatexEQ>
        <LatexEQ>
          {eq27}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;如果初值满足这个条件，那么系统会单独呈现普通振动模式，
          如果初值不满足，那么系统由两种模式线性合成，两个方向上的振幅将会交替变化，
          伴随着某一方向的振幅变大，另外一个方向的振幅会变小。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;可以证明两个方向上的振幅变化量（可正可负）满足上述两个条件之一， 即
        </Paragraph>
        <LatexEQ>
          {eq28}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;或
        </Paragraph>
        <LatexEQ>
          {eq29}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;其中<Latex>$A_z$</Latex>、<Latex>$A_\theta$</Latex>为振幅.
        </Paragraph>
        <Title level={4}>
          耦合条件的导出与意义
        </Title>
        <Paragraph>
          &emsp; &emsp;考虑某个方向初值为0的初值对，比如<Latex>z_0=x</Latex>，
          <Latex>\theta_0=0</Latex>时，
        </Paragraph>
        <LatexEQ>
          {eq30}
        </LatexEQ>
        <LatexEQ>
          {eq31}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;或
        </Paragraph>
        <LatexEQ>
          {eq32}
        </LatexEQ>
        <LatexEQ>
          {eq33}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;根据振幅变化量，竖直方向的振幅会从<Latex>X</Latex>减弱到
          <Latex>{eq34}</Latex>，与此同时水平的偏转振幅会从<Latex>0</Latex>变大到
          <Latex>{eq35}</Latex>，然后再减小至<Latex>0</Latex>，同时竖直振幅增大至<Latex>X</Latex>。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;当<Latex>\lambda=0</Latex>时，竖直方向的振动也会衰减到0，此时两个方向的振幅变化均到达最大值，
          称之为完全耦合。在实验中表现为两个方向的振幅都会出现衰减为0的现象。
        </Paragraph>
        <Paragraph>
          &emsp; &emsp;根据前面<Latex>\lambda</Latex>的定义，可知，
          完全耦合的条件为<Latex>a=c</Latex>，即<Latex>{eq36}</Latex>
        </Paragraph>
        <Title level={4}>
          动态法测定耦合系数
        </Title>
        <Paragraph>
          &emsp; &emsp;当满足耦合条件时，令<Latex>{eq37}</Latex>，可以求出
        </Paragraph>
        <LatexEQ>
          {eq38}
        </LatexEQ>
        <LatexEQ>
          {eq39}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;则有
        </Paragraph>
        <LatexEQ>
          {eq40}
        </LatexEQ>
        <Paragraph>
          &emsp; &emsp;同理有
        </Paragraph>
        <LatexEQ>
          {eq41}
        </LatexEQ>
        <LatexEQ>
          {eq42}
        </LatexEQ>
        <Title level={4}>
          思考题
        </Title>
        <Paragraph>
          &emsp; &emsp;韦氏摆可以有哪些应用？
        </Paragraph>
      </Typography>
    );
  }
}

export default Exp2;
