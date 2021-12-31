import React, { Component } from 'react';
import { Layout, Menu, Button, Empty, Descriptions } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import style from './data.css';
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
import chartOption from '@/utils/chartOption'

const { Content, Sider } = Layout;
echarts.use(
  [TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, DataZoomComponent, LineChart, CanvasRenderer],
);

class Data extends Component {
  state = { data: {} };
  chart = null;

  chartResize(that = this) {
    if (that.chart) {
      that.chart.resize();
      setTimeout(() => {
        that.chart.resize();
      }, 140);
    }
  };

  componentDidMount() {
    let ke = null
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k.slice(0, 3) === '202') {
        ke = k
        break
      }
    }

    this.setState({
      data: (ke ? JSON.parse(localStorage.getItem(ke)) : {}),
    });

    const chartDom = document.getElementById('data_chart');
    this.chart = echarts.init(chartDom);
    let option = chartOption
    option && this.chart.setOption(option);

    const that = this
    window.onresize = () => {that.chartResize(that)}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.data && this.state.data.series) {
      this.chart.setOption({
        series: this.state.data.series
      })
    }
  }

  resetHandle() {
    localStorage.clear();
    this.setState({
      data: {},
    });
  }

  menuClickHandle(k) {
    const data = JSON.parse(localStorage.getItem(k))
    this.setState({
      data: data ? data : {},
    });
  }

  render() {
    if (this.chart) {
      const that = this
      setTimeout(() => {
        that.chart.resize();
      }, 40)
    }
    let menuItem = [];
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k.slice(0, 3) !== '202') continue;
      menuItem.push(<Menu.Item key={k}>{k}</Menu.Item>);
    }
    let defaultKey = localStorage.key(localStorage.length - 1);
    return (
      <Layout className={style.siteLayoutBackground} style={{ padding: '24px 0 0 0' }}>
        <Sider className={style.siteLayoutBackground} collapsedWidth={0} collapsible={true} theme={'light'} onCollapse={() => {this.chartResize()}}>
          {
            menuItem.length ?
              (
                <Menu
                  mode='inline'
                  defaultSelectedKeys={[defaultKey]}
                  className={style.data_select}
                  onClick={(e) => {
                    this.menuClickHandle(e.key);
                  }}
                >
                  {menuItem}
                </Menu>
              ) :
              (
                <div className={style.data_select}>
                  <Empty style={{ width: '80%', paddingTop: '40%', textAlign: 'center' }} description={'暂无数据'} />
                </div>
              )
          }
          <Button type={'primary'} style={{ width: '180px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => {
            this.resetHandle();
          }}><DeleteOutlined />清空历史实验数据</Button>
        </Sider>
        <Content style={{ margin: '0 24px', minHeight: 280, backgroundColor: '#fff' }}>
          <div style={{ padding: '25px', display: menuItem.length && this.state.data ? 'block' : 'none' }}>
            {
              this.state.data && this.state.data.p ?
                (
                  <Descriptions title='实验参数' size={'small'} bordered
                                extra={'实验时间：' + (new Date(this.state.data.time)).Format('yyyy-MM-dd HH:mm:ss')}>
                    <Descriptions.Item label='m'>{this.state.data.p.m}</Descriptions.Item>
                    <Descriptions.Item label='k'>{this.state.data.p.k}</Descriptions.Item>
                    <Descriptions.Item label='z0'>{this.state.data.p.z0}</Descriptions.Item>
                    <Descriptions.Item label='i'>{this.state.data.p.i}</Descriptions.Item>
                    <Descriptions.Item label='kp'>{this.state.data.p.kp}</Descriptions.Item>
                    <Descriptions.Item label='theta0'>{this.state.data.p.theta0}</Descriptions.Item>
                  </Descriptions>
                ) : (<div />)
            }
            <br />
            <div className={style.chart} id={'data_chart'} />
          </div>
          <Empty style={{
            paddingTop: '10%',
            textAlign: 'center',
            display: menuItem.length && this.state.data ? 'none' : 'block',
          }} description={'暂无数据'} />
        </Content>
      </Layout>
    );
  }
}

export default Data;
