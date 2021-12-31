export const columns = [
  [
    {
      dataIndex: '1',
      title: '1、某方向上拍的振幅衰减为0的图像判别方法是？',
      valueType: 'radio',
      valueEnum: {
        A: {
          text: 'A、运动方程的图像与时间轴之间存在至少一个交点。'
        },
        B: {
          text: 'B、运动方程的图像与时间轴的所有交点处的导数均不为0。'
        },
        C: {
          text: 'C、运动方程的图像与时间轴的所有交点处的导数均为0。'
        },
        D: {
          text: 'D、运动方程的图像与时间轴的交点中有一处的导数为0。'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '2',
      title: '2、判断（T/F）：韦氏摆是一种周期运动',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '3',
      title: '3、判断（T/F）：韦氏摆两个方向上的运动相互依赖。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '4',
      title: '4、判断（T/F）：只要一个方向出现衰减为0的情况即为完全耦合。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    }
  ],[
    {
      dataIndex: '1',
      title: '1、判断（T/F）：韦氏摆两个方向上的运动可能是简谐运动。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '2',
      title: '2、判断（T/F）：耦合系数为0，则两个方向上的运动相互独立。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '3',
      title: '3、判断（T/F）：实验指南中韦氏摆的运动学方程在振幅很大的情况下也成立。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '4',
      title: '4、判断（T/F）：韦氏摆两个方向上的振幅一定会随时间变化。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '5',
      title: '5、判断（T/F）：可能出现只有一个方向上的振幅变化的现象。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    }
  ],[
    {
      dataIndex: '1',
      title: '1、判断（T/F）：调节横杆上的砝码会改变物块的质量。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '2',
      title: '2、判断（T/F）：横杆上的砝码的作用是改变物体的转动惯量。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '3',
      title: '3、判断（T/F）：所有弹簧的扭转系数相同。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '4',
      title: '4、判断（T/F）：扭转系数的定义采用比例式定义法。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    }
  ],[
    {
      dataIndex: '1',
      title: '1、判断（T/F）：各向同性材料的三个弹性常数E（杨氏模量）、G（剪切模量）、v（泊松比）是相互独立的。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '2',
      title: '2、判断（T/F）：当物体重量增加时，弹簧的旋转角度一定增加。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '3',
      title: '3、判断（T/F）：弹簧匝数越多，越细密，该静态法算出的泊松系数就可能越准确。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '4',
      title: '4、判断（T/F）：实际情况下，弹簧丝的长度在悬挂物体后不会变化。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    },
    {
      dataIndex: '5',
      title: '5、判断（T/F）：学生可以根据拟合后的二次函数求出弹簧的长度。',
      valueType: 'radio',
      valueEnum: {
        T: {
          text: 'T'
        },
        F: {
          text: 'F'
        },
      },
      width: 'm',
    }
  ],
]

export const answer = [
  {
    1: 'D',
    2: 'T',
    3: 'T',
    4: 'F'
  },{
    1: 'T',
    2: 'T',
    3: 'F',
    4: 'F',
    5: 'F'
  },{
    1: 'F',
    2: 'T',
    3: 'F',
    4: 'T'
  }, {
    1: 'F',
    2: 'F',
    3: 'T',
    4: 'F',
    5: 'T'
  }
]
