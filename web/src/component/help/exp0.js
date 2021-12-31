import React, { Component } from 'react';
import Latex from 'react-latex';
import LatexEQ from '@/component/LatexEq';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;


class Exp0 extends Component {
  render() {
    const eq1 = '$U_B=\\frac{1}{2}EI_1L\\left(\\kappa-\\kappa_0\\right)^2$'
    const eq2 = '$\\kappa=\\theta(L^2-z^2)^{\\frac{1}{2}}/L^2$'
    const eq22 = '$\\tau=z\\theta /L^2$'
    const eq3 = '$U=U_B+U_T-M_{gz}$'
    const eq4 = '$\\frac{\\partial U}{\\partial z}=0$、$\\frac{\\partial U}{\\partial \\theta}=0$'
    const eq5 = '$U=\\frac{1}{2} U_{zz} \\zeta ^2 + U_{z\\theta} \\zeta \\varphi + \\frac{1}{2} U_{\\theta \\theta} \\varphi ^2$'
    const eq6 = '$L=\\frac{1}{2}m{\\dot{z}}^2+\\frac{1}{2}I{\\dot{\\theta}}^2-\\frac{1}{2}kz^2-\\frac{1}{2}\\delta\\theta^2-\\frac{1}{2}\\varepsilon z\\theta$'
    const eq7 = '$m\\ddot{z}+kz+\\frac{1}{2}\\varepsilon\\theta=0$'
    const eq8 = '$I\\ddot{\\theta}+\\delta\\theta+\\frac{1}{2}\\varepsilon z=0$'
    const eq9 = '$-\\ddot{z}=az+b\\cdot\\left(\\alpha\\theta\\right)$'
    const eq10 = '$-\\left(\\alpha\\ddot{\\theta}\\right)=bz+c\\cdot\\left(\\alpha\\theta\\right)$'
    const eq11 = '其中，$a=\\frac{k}{m}$ $b=\\frac{\\varepsilon}{2\\sqrt{mI}}$ $c=\\frac{\\delta}{I}$ $\\alpha=\\sqrt{\\frac{I}{m}}$'
    const eq12 = '$z=A_1sin{p}t+A_2cos{p}t+B_1sin{q}t+B_2cos{q}t$'
    const eq13 = '$\\alpha\\theta=\\frac{p^2-a}{b}\\left(A_1sin{p}t+A_2cos{p}t\\right)+\\frac{q^2-a}{b}\\left(B_1sin{q}t+B_2cos{q}t\\right)$'
    const eq14 = '$\\frac{p^2-a}{b}z-\\alpha\\theta=L_1sin{\\left(qt+\\varepsilon_1\\right)}$'
    const eq15 = '$\\frac{q^2-a}{b}z-\\alpha\\theta=L_2sin{\\left(pt+\\varepsilon_2\\right)}$'
    const eq16 = '当$\\frac{p^2-a}{b}z=\\alpha\\theta$在运动中恒成立时，两个方向上是单一的周期为$\\frac{2\\pi}{p}$的简谐运动；'
    const eq17 = '当$\\frac{q^2-a}{b}z=\\alpha\\theta$在运动中恒成立时，两个方向上是单一的周期为$\\frac{2\\pi}{q}$的简谐运动'
    const eq18 = '$2\\lambda=\\frac{c-a}{b}$'
    const eq19 = '$\\left(\\lambda+\\sqrt{\\lambda^2+1}\\right)z=\\alpha\\theta$'
    const eq20 = '$\\left(\\lambda-\\sqrt{\\lambda^2+1}\\right)z=\\alpha\\theta$'
    const eq21 = '$\\lambda - \\sqrt{\\lambda^2+1})\\Delta A_z=\\Delta (\\alpha A_\\theta)$'
    const eq23 = '或$\\lambda + \\sqrt{\\lambda^2+1})\\Delta A_z=\\Delta (\\alpha A_\\theta)$'
    const eq24 = '$\\Delta_1 A_z=x\\frac{\\sqrt{\\lambda ^2+1}-\\lambda}{\\sqrt{\\lambda ^2+1}}$,$\\Delta _1(\\alpha \\theta)=x\\frac{1}{\\sqrt{\\lambda ^2+1}}$'
    const eq25 = '或$\\Delta_2 A_z=x\\frac{\\sqrt{\\lambda ^2+1}+\\lambda}{\\sqrt{\\lambda ^2+1}}$,$\\Delta _2(\\alpha \\theta)=-x\\frac{1}{\\sqrt{\\lambda ^2+1}}$'
    const eq26 = '$x\\frac{\\lambda}{\\sqrt{\\lambda ^2+1}}$'
    const eq27 = '$x\\frac{1}{\\sqrt{\\lambda ^2+1}}$'
    const eq28 = '$\\frac{k}{m}=\\frac{\\delta}{I}$'
    const eq29 = '$\\omega^2=\\frac{k}{m}=\\frac{\\delta}{I}$'
    const eq30 = '$p^2=\\omega^2+\\sqrt{\\frac{\\varepsilon ^2}{4mI}}$'
    const eq31 = '$q^2=\\omega^2-\\sqrt{\\frac{\\varepsilon ^2}{4mI}}$'
    const eq32 = '$p=\\sqrt{\\omega^2+\\frac{\\varepsilon}{2\\sqrt{mI}}}=\\omega\\sqrt{1+\\frac{\\varepsilon}{2\\omega^2\\sqrt{mI}}}\\approx \\omega(1+\\frac{\\varepsilon}{4\\omega^2\\sqrt{mI}})=\\omega+\\frac{\\varepsilon}{4\\omega\\sqrt{mI}}$'
    const eq33 = '$q\\approx \\omega-\\frac{\\varepsilon}{4\\omega\\sqrt{mI}}$'
    const eq34 = '$\\varepsilon=2\\omega(p-q)\\sqrt{mI}$'

    return (
      <div>
        <Typography>
          <Title level={2}>
            实验指南
          </Title>
          <Paragraph>
            &emsp; &emsp;威尔伯福斯钟摆（下简称韦氏摆）是以英国物理学家L.R.的名字命名的。威尔伯福斯在19世纪末的发明并研究了这个钟摆。
            它是一个耦合的机械振荡器，由有质量的物体悬挂在弹簧上，可以自由旋转系统的垂直轴。该系统的示意图如下图所示。
          </Paragraph>
          <img src={require('@/assets/help/1.png')} alt={'韦氏摆示意图'} style={{height: '50vh', marginLeft: '5vw'}}/>
          <br/><br/>
          <Paragraph>
            &emsp; &emsp;韦氏摆有两个运动，平移和旋转，其强度是相连的：当一个非常强时，
            另一个几乎不存在。虽然目前该摆相对基本，没有工业应用，但该摆是掌握耦合原理的一个很好的例子。
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;本在线实验系统，为理工科类学生提供线上韦氏摆实验平台，
            掌握耦合原理，并激发他们探究耦合条件和相关内容的兴趣。
          </Paragraph>
          <Title level={2}>
            实验原理
          </Title>
          <Paragraph>
            <Latex>
              &emsp; &emsp; 对于一端固定的竖直的螺旋形的弹簧，初始曲率为$\kappa_0$，
              初始扭转系数为$\tau_0$，当弹簧自由端悬挂一质量为M的物体时，
              进一步产生弯曲与扭转的能量为对于一端固定的竖直的螺旋形的弹簧，
              初始曲率为$\kappa_0$，初始扭转系数为$\tau_0$，当弹簧自由端悬挂一质量为M的物体时，
              进一步产生弯曲与扭转的能量为
            </Latex>
            <LatexEQ>
              {eq1}
            </LatexEQ>
            <Latex>
              其中E为杨氏模量，G为剪切模量，I_1、I_2为材料横截面对弯曲中性轴的惯性矩，L是弹簧铁丝的长度。
            </Latex>
          </Paragraph>
          <Paragraph>
            <Latex>
              &emsp; &emsp; 令弹簧的高度为z，从固定端到自由端螺旋的角度为$\theta$，
              那么根据螺旋形的几何特征，可以给出$\kappa$、$\tau$的表达式，为
            </Latex>
            <LatexEQ>
              {eq2}
            </LatexEQ>
            <LatexEQ>
              {eq22}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp; 如果忽略弹簧的重量，那么当整个系统平衡时，能量U为
            <LatexEQ>
              {eq3}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp; 假设系统在平衡位置附近产生竖直位置与水平角度的<Text strong>微小的偏移</Text>
            <Latex>
              $\zeta$、$\varphi$（动能可忽略），
              并注意平衡点处满足
            </Latex>
            <LatexEQ>
              {eq4}
            </LatexEQ>
            &emsp; &emsp; 那么根据二元函数的泰勒展开公式有
            <LatexEQ>
              {eq5}
            </LatexEQ>
            其中第一项和第三项分别是弹性势能与扭转势能，定义第二项为<Text strong>耦合势能</Text>。
          </Paragraph>
          <Title level={3}>
            韦氏摆的运动方程
          </Title>
          <Paragraph>
            <Latex>
              &emsp; &emsp; 考虑一个竖直位移和水平偏转较小（因此可以采用上述的耦合势能的表达式）的动态的韦氏摆，
              定义平衡位置时z、$\theta$为0，那么可以写出系统的拉格朗日函数（忽略弹簧的质量与转动惯量）
            </Latex>
            <LatexEQ>
              {eq6}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            <Latex>
              &emsp; &emsp; 关于z、$\theta$的拉格朗日方程为
            </Latex>
            <LatexEQ>
              {eq7}
            </LatexEQ>
            <LatexEQ>
              {eq8}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp; 重新整理可以写成
            <LatexEQ>
              {eq9}
            </LatexEQ>
            <LatexEQ>
              {eq10}
            </LatexEQ>
            <LatexEQ>
              {eq11}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp; 该方程通解为
            <LatexEQ>
              {eq12}
            </LatexEQ>
            <LatexEQ>
              {eq13}
            </LatexEQ>
            <LatexEQ>
              $p^2$,$q^2$ 为 $\left(x-a\right)\left(x-c\right)=b^2$的解，不妨设$p^2>q^2$
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp; 竖直振动与水平偏转均由两种普通的简谐振动线性合成。
            不难发现，与<Text strong>拍现象的表达式</Text>相同，也会形成拍，即<Text strong>振幅周期变化的振动</Text>。
            <LatexEQ>
              {eq14}
            </LatexEQ>
            <LatexEQ>
              {eq15}
            </LatexEQ>
            <LatexEQ>
              $p^2$,$q^2$ 为 $\left(x-a\right)\left(x-c\right)=b^2$的解，不妨设$p^2>q^2$
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;
            <Latex>
              {eq16}
            </Latex>
            <br/><br/>
            &emsp; &emsp;
            <Latex>
              {eq17}
            </Latex>
            <br/><br/>
            &emsp; &emsp;把这两种情况称为系统的普通振动模式。一般来说系统由两种模式线性合成。
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;如果令
            <Latex>
              {eq18}
            </Latex>
            ，那么两种普通振动模式独立出现的条件是满足以下两个式子之一：
            <LatexEQ>
              {eq19}
            </LatexEQ>
            <LatexEQ>
              {eq20}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;如果初值满足这个条件，那么系统会单独呈现普通振动模式，
            如果初值不满足，那么系统由两种模式线性合成，
            <Text mark>
              两个方向上的振幅将会交替变化，
              伴随着某一方向的振幅变大，另外一个方向的振幅会变小。
            </Text>
            <Text strong>
              可以证明
            </Text>
            两个方向上的
            <Text strong>
              振幅变化量（可正可负）
            </Text>
            满足上述两个条件之一，即
            <LatexEQ>
              {eq21}
            </LatexEQ>
            <LatexEQ>
              {eq23}
            </LatexEQ>
            <Latex>$A_z$、$A_\theta$为振幅</Latex>
          </Paragraph>
          <Title level={3}>
            耦合条件的导出与意义
          </Title>
          <Paragraph>
            &emsp; &emsp;考虑某个方向初值为0的初值对，比如
            <Latex>
              $Z_0=x$, $\theta_0=0$时
            </Latex>
            <LatexEQ>
              {eq24}
            </LatexEQ>
            <LatexEQ>
              {eq25}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;根据振幅变化量，竖直方向的振幅会从x减弱到
            <Latex>
              {eq26}
            </Latex>
            ，与此同时水平的偏转振幅会从0变大到
            <Latex>
              {eq27}
            </Latex>
            ，然后再减小至0，同时竖直振幅增大至x。
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;
            <Latex>
              当$\lambda=0$时，
            </Latex>
            竖直方向的振动也会衰减到0，此时
            <Text mark>
              两个方向的振幅变化均到达最大值，
              称之为完全耦合
            </Text>
            。在实验中表现为两个方向的振幅都会出现衰减为0的现象。
            <br/>&emsp; &emsp;
            <Latex>
              根据前面$\lambda$的定义，可知，完全耦合的条件为a=c，即
            </Latex>
            <Latex>
              {eq28}
            </Latex>
          </Paragraph>
          <Paragraph type={'danger'}>
            &emsp; &emsp;意义：<br />
            &emsp; &emsp;1、可以让学生探究耦合的条件。当满足耦合条件时，
            在只是扭转弹簧而产生竖直位移/只产生竖直位移而不产生的情况下，
            如果两个方向的振幅都出现衰减为0的情况，那么此时满足耦合条件，否则不满足。<br />
            &emsp; &emsp;2、可以用于测定扭转系数，只要调节其余耦合条件中的三个量（实际上只要调节一个），
            使得完全耦合的现象出现，那么可以根据耦合条件算出弹簧的扭转系数。
          </Paragraph>
          <Title level={3}>
            耦合条件满足时
          </Title>
          <Paragraph>
            &emsp; &emsp;令
            <Latex>
              {eq29}
            </Latex>
            ，可以求出
            <LatexEQ>
              {eq30}
            </LatexEQ>
            <LatexEQ>
              {eq31}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;则
            <LatexEQ>
              {eq32}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;同理
            <LatexEQ>
              {eq33}
            </LatexEQ>
            <LatexEQ>
              {eq34}
            </LatexEQ>
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;定义
            <Latex>
              $\omega_B=p-q$
            </Latex>
            ，即2种普遍振动模式之间的拍频
          </Paragraph>
          <Paragraph>
            &emsp; &emsp;
            <Text strong>
              意义
            </Text>
            ：耦合系数的表达式
            <Text strong>
              给出了一种测定耦合系数的方法
            </Text>
            <Latex>
              ，由于其余量已知，只要测量出拍频$\omega_B$（振幅变化的快慢）
              就可以得到耦合系数的大小。由于整个系统振幅交替的周期为$2 \pi / \omega_B$，
              所以耦合系数的大小影响拍频的大小，也就是
            </Latex>
            <Text strong>
              振幅变化的快慢
            </Text>
            或者
            <Text strong>
              振幅交替的周期
            </Text>
          </Paragraph>
          <Title level={2}>
            实验过程
          </Title>
          <Paragraph>
            &emsp; &emsp;通过上方导航选项卡进入实验台，可以在右侧参数面板内设置各相关参数，参数范围由系统自动设定。
            在设置完成参数后，点击开始仿真，弹簧开始运动，此时可以拖动动画窗口或使用鼠标滚轮调整视角，与此同时画面右下角的
            图表窗口会自动绘制弹簧伸长量和旋转量随时间变化的曲线。在观察到1~2个周期的变化后，可以通过停止仿真按钮结束仿真
            ，或等待80s后系统自动停止仿真，此时可以通过图表窗口的保存图片和下载数据选项下载实验中产生的数据。
            通过该实验数据，即可计算出在耦合条件下的韦氏摆耦合系数，观察参数变化对耦合程度的影响。
          </Paragraph>
          <img src={require('@/assets/help/2.png')} alt={'实验台示意图'} style={{width: '70vw', marginLeft: '5vw'}}/>
          <Paragraph>
            &emsp; &emsp;在停止仿真的同时，系统会自动将本次实验的数据保存到本地数据库，可以随时在实验数据选项卡中查看或下载
            历史的实验数据与参数，便于多次实验后进行综合分析
          </Paragraph>
        </Typography>
      </div>
    );
  }
}

export default Exp0;
