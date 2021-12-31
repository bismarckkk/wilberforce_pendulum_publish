import XLSX from 'xlsx'

const chartOption = {
  toolbox: {
    right: 20,
    feature: {
      saveAsImage: {
        icon: "image://" + require('@/assets/save.svg'),
        title: '保存图片'
      },
      myTool: {
        show: true,
        title: '下载数据',
        icon: "image://" + require('@/assets/download.svg'),
        onclick: function (p){
          const theta = p.option.series[0].data
          const z = p.option.series[1].data
          let data = [['旋转量/rad', '伸长量/ m']]
          for (let i = 0; i < theta.length; i++) {
            data.push([theta[i], z[i]])
          }
          const sheet = XLSX.utils.aoa_to_sheet(data)
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, sheet, "data");
          XLSX.writeFile(wb, 'data.xlsx')
        }
      }
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      animation: false,
      label: {
        backgroundColor: '#505765',
      },
    },
  },
  legend: {
    data: ['旋转量', '伸长量'],
    left: 10,
  },
  dataZoom: [
    {
      show: true,
      realtime: true,
    },
    {
      type: 'inside',
      realtime: true,
    },
  ],
  xAxis: [
    {
      type: 'value',
      splitNumber: 8,
      name: '时间(s)',
    },
  ],
  yAxis: [
    {
      name: '旋转量(rad)',
      type: 'value',
    },
    {
      name: '伸长量(m)',
      type: 'value',
    },
  ],
  series: [
    {
      name: '旋转量',
      type: 'line',
      showSymbol: false,
      emphasis: {
        focus: 'series',
      },
      data: [],
    },
    {
      name: '伸长量',
      type: 'line',
      yAxisIndex: 1,
      showSymbol: false,
      emphasis: {
        focus: 'series',
      },
      data: [],
    },
  ],
}

export default chartOption;
