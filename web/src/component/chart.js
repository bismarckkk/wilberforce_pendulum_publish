import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components';
import {
  LineChart,
} from 'echarts/charts';
import {
  CanvasRenderer,
} from 'echarts/renderers';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { echart_container } from './chart.css';
import chartOption from '@/utils/chartOption';

echarts.use(
  [TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, DataZoomComponent, LineChart, CanvasRenderer],
);

@connect(({ spring }) => (spring))
class Chart extends Component {
  chart = null;
  stTime = null;

  componentDidMount() {
    const chartDom = document.getElementById('echart_container');
    this.chart = echarts.init(chartDom);
    let option = chartOption
    option && this.chart.setOption(option);

    const that = this;
    window.onresize = function() {
      that.chart.resize();
      setTimeout(() => {
        that.chart.resize();
      }, 200);
    };
  }

  series = [
    {
      data: [],
    },
    {
      data: [],
    },
  ];
  timer = null

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.started) {
      this.stTime = this.props.startTime
      const option = {
        series: [
          {
            data: [],
          },
          {
            data: [],
          },
        ],
        xAxis: [
          {
            min: 0,
            max: this.props.z.length / 30,
          },
        ],
        yAxis: [
          {
            min: Math.floor(Math.min(...this.props.theta) * 100) / 100,
            max: Math.ceil(Math.max(...this.props.theta) * 100) / 100
          },
          {
            min: Math.floor(Math.min(...this.props.z) * 100) / 100,
            max: Math.ceil(Math.max(...this.props.z) * 100) / 100
          }
        ]
      };
      this.chart.setOption(option);
      this.series = [
        {
          data: [[0, this.props.theta[0]]],
        },
        {
          data: [[0, this.props.z[0]]],
        },
      ];
      const that = this
      this.timer = setInterval(() => {
        const t = Math.floor((new Date() - that.props.startTime) * 0.03);
        if (t > that.props.theta.length) {
          that.props.dispatch({ type: 'spring/stop' });
        } else {
          that.series[0].data.push([t / 30, that.props.theta[t]])
          that.series[1].data.push([t / 30, that.props.z[t]])
          that.chart.setOption({series: that.series})
        }
      }, 50)
    } else {
      clearInterval(this.timer)
      const option = {
        xAxis: [
          {
            min: 0,
            max: Math.max(...this.series[0].data.map((t) => (t[0]))),
          },
        ]
      };
      if (this.stTime) {
        this.chart.setOption(option)
        let item = JSON.parse(localStorage.getItem(this.stTime.Format("yyyy-MM-dd HH:mm:ss")))
        item['series'] = this.series
        localStorage.setItem(this.stTime.Format("yyyy-MM-dd HH:mm:ss"), JSON.stringify(item))
        this.stTime = null
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  render() {
    if (this.chart) {
      this.chart.resize();
      setTimeout(() => {
        this.chart.resize();
      }, 40);
    }
    return (
      <Card title={'数据图表'}>
        <div id='echart_container' style={{ display: this.props.z.length ? 'block' : 'none' }}
             className={echart_container} />
        <h2 style={{ display: this.props.z.length ? 'none' : 'block' }}>请先开始实验</h2>
      </Card>
    );
  }
}

export default Chart;
