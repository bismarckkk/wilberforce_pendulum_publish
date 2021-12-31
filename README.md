# 韦氏摆实验系统
本实验系统获得2021年全国大学生物理实验竞赛一等奖
## 运行要求
在运行前，请安装nodejs、yarn、python3  
建议使用WebStorm作为IDE  
## 如何部署：
```shell
git clone https://github.com/bismarckkk/wilberforce_pendulum.git
cd wilberforce_pendulum/web
yarn
cd ../backend
python3 -m pip install -r requirements.txt
cd ..
```
## 如何启动：
```shell
cd backend
python3 app.py
# 启动另一个终端运行
cd web
yarn start
```
