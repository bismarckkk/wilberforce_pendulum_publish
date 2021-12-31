export const columns = [
  [
    {
      title: '选择符合耦合条件的图形',
      valueType: 'group',
      readonly: true,
      dataIndex: 'image',
      columns: [
        {
          valueType: 'image',
          initialValue: require('../assets/questions/1-1.png'),
          readonly: true,
          dataIndex: 'imageA',
        },
        {
          valueType: 'image',
          initialValue: require('../assets/questions/1-2.png'),
          readonly: true,
          dataIndex: 'imageB',
        },
        {
          valueType: 'image',
          initialValue: require('../assets/questions/1-3.png'),
          readonly: true,
          dataIndex: 'imageC',
        },
        {
          valueType: 'image',
          initialValue: require('../assets/questions/1-4.png'),
          readonly: true,
          dataIndex: 'imageD',
        },
      ]
    },
    {
      dataIndex: '1',
      valueType: 'checkbox',
      valueEnum: {
        A: {
          text: 'A',
        },
        B: {
          text: 'B'
        },
        C: {
          text: 'C'
        },
        D: {
          text: 'D'
        },
      },
      width: 'm',
    }
  ],
  [
    {
      dataIndex: '1',
      valueType: 'input',
      title: '你计算的耦合系数（至少保留两位有效数字）',
      width: 'm',
    }
  ],
  [
    {
      dataIndex: '1',
      valueType: 'input',
      title: '你计算的扭转系数（至少保留两位有效数字）',
      width: 'm',
    }
  ],
  [
    {
      dataIndex: '1',
      valueType: 'input',
      title: '你计算的泊松系数（至少保留两位有效数字）',
      width: 'm',
    }
  ],
]

export const answer = [
  (res) => {
    const data = res['1']
    let result = 0
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 'B' || data[i] === 'C') {
        result += 50
      } else {
        return 0
      }
    }
    return result
  },
  (res) => {
    const rate = Math.abs(parseFloat(res['1']) - 9e-2) / 9e-2
    let result = 100 - 400 * rate
    if (result < 0) {
      result = 0
    }
    return result
  },
  (res) => {
    const rate = Math.abs(parseFloat(res['1']) - 5e-3) / 5e-3
    let result = 100 - 400 * rate
    if (result < 0) {
      result = 0
    }
    return result
  },
  (res) => {
    const rate = Math.abs(parseFloat(res['1']) - 0.25) / 0.25
    let result = 100 - 400 * rate
    if (result < 0) {
      result = 0
    }
    return result
  },
]
