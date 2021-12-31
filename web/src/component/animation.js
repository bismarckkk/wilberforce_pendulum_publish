import { OrbitControls } from '@/utils/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader' ;
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {
  Bone,
  Color,
  CylinderGeometry,
  DoubleSide,
  Float32BufferAttribute,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  Group,
  SkinnedMesh,
  Skeleton,
  SkeletonHelper,
  Vector3,
  Uint16BufferAttribute,
  WebGLRenderer,
} from 'three';
import React, { Component } from 'react';
import { animation_container, animation_card } from './animation.css';
import { connect } from 'dva';
import { Card, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import PageLoading from '@/component/pageLoading';

@connect(({ param, spring }) => ({ param, ...spring }))
class Animation extends Component {
  state = { rotate: 0, length: 0, theta: [], z: [], started: false, startTime: null, dLength: 0, dRotate: 0, ready: false }
  segmentCount = 300;

  componentDidMount() {
    let renderer, mesh, scene, camera, orbit, lights, bones, skeletonHelper;
    const that = this;

    async function initScene() {
      scene = new Scene();
      scene.background = new Color(0xdfe4ea);

      let container = document.getElementById('container');
      let lab_desk = document.getElementById('lab-desk');
      camera = new PerspectiveCamera(75, container.clientWidth / (lab_desk.clientHeight - 100), 0.01, 1000);

      camera.position.z = 30;
      camera.position.x = -20;
      camera.position.y = 10;
      camera.lookAt(0, -15, 0);

      renderer = new WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, lab_desk.clientHeight - 100);
      container.appendChild(renderer.domElement);

      let target = new Vector3(0, -9, 0);
      orbit = new OrbitControls(camera, renderer.domElement, target);
      orbit.enableZoom = true;

      lights = [];
      lights[0] = new PointLight(0xffffff, 1, 0);
      lights[1] = new PointLight(0xffffff, 1, 0);
      lights[2] = new PointLight(0xffffff, 1, 0);

      lights[0].position.set(0, 200, 0);
      lights[1].position.set(100, 200, 100);
      lights[2].position.set(-100, -200, -100);

      scene.add(lights[0]);
      scene.add(lights[1]);
      scene.add(lights[2]);

      function resizeAnimate() {
        camera.aspect = container.clientWidth / (lab_desk.clientHeight - 100);
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, lab_desk.clientHeight - 100);

        setTimeout(() => {
          camera.aspect = container.clientWidth / (lab_desk.clientHeight - 100);
          camera.updateProjectionMatrix();
          renderer.setSize(container.clientWidth, lab_desk.clientHeight - 100);
        }, 250);
      }

      window.addEventListener('resize', resizeAnimate, false);
      container.addEventListener('resize', ()=>{resizeAnimate();console.log('resize!!!')}, false)

      await initBones();
      that.setState({
        ready: true,
      })
      setTimeout(() => {
        resizeAnimate();
      }, 300)

    }

    async function createGeometry(sizing) {
      let objLoader = new STLLoader();
      let obj = await objLoader.loadAsync('https://rm-duiwu-public.oss-cn-hangzhou.aliyuncs.com/jingsai/spring.STL');
      return createGeometry2(sizing, obj);
    }

    function createGeometry2(sizing, geo) {
      const geometry = geo;
      geometry.center();

      const position = geometry.attributes.position;

      const vertex = new Vector3();

      const skinIndices = [];
      const skinWeights = [];
      for (let i = 0; i < position.count; i++) {

        vertex.fromBufferAttribute(position, i);
        const y = (vertex.y + 20.9893 / 2);

        const skinIndex = Math.floor(that.segmentCount - y / (21 / sizing.segmentCount));
        const skinWeight = (y % (20.9892 / sizing.segmentCount) / (20.9892 / sizing.segmentCount));
        if (skinIndex <= sizing.segmentCount) {
          skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
          skinWeights.push(skinWeight, 1 - skinWeight, 0, 0);
        } else {
          skinIndices.push(skinIndex, 0, 0, 0);
          skinWeights.push(1,0 , 0, 0);
        }

      }
      geometry.setAttribute('skinIndex', new Uint16BufferAttribute(skinIndices, 4));
      geometry.setAttribute('skinWeight', new Float32BufferAttribute(skinWeights, 4));

      return geometry;

    }

    function createGeometry3(sizing) {
      const geometry = new CylinderGeometry(
        5, // radiusTop
        5, // radiusBottom
        2.5, // height
        40, // radiusSegments
        sizing.segmentCount * 10, // heightSegments
        false, // openEnded
      );
      geometry.translate(0, -11.5, 0);

      return bindGeometry(geometry);

    }

    function createGeometry4(sizing) {
      const geometry = new CylinderGeometry(
        0.7, // radiusTop
        0.7, // radiusBottom
        30, // height
        40, // radiusSegments
        sizing.segmentCount * 10, // heightSegments
        false, // openEnded
      );
      geometry.rotateX(Math.PI / 2, 0, 0);
      geometry.translate(0, -11.25, 0);

      return bindGeometry(geometry);

    }

    function createGeometry5(sizing) {
      const geometry = new CylinderGeometry(
        0.8, // radiusTop
        0.8, // radiusBottom
        4, // height
        10, // radiusSegments
        sizing.segmentCount * 10, // heightSegments
        false, // openEnded
      );
      geometry.rotateX(Math.PI / 2, 0, 0);
      geometry.translate(0, -11.25, 16);

      return bindGeometry(geometry);

    }

    function createGeometry6(sizing) {
      const geometry = new CylinderGeometry(
        0.8, // radiusTop
        0.8, // radiusBottom
        4, // height
        10, // radiusSegments
        sizing.segmentCount * 10, // heightSegments
        false, // openEnded
      );
      geometry.rotateX(Math.PI / 2, 0, 0);
      geometry.translate(0, -11.25, -16);

      return bindGeometry(geometry);
    }

    async function createGeometryTjt() {
      let objLoader = new GLTFLoader();
      let obj = await objLoader.loadAsync('https://rm-duiwu-public.oss-cn-hangzhou.aliyuncs.com/jingsai/modelCompressed.glb');
      console.log(obj.scene)
      obj.scene.rotateX(-Math.PI / 2);
      obj.scene.scale.set(1.2, 1.2, 1.2);
      obj.scene.position.y = -43.2
      obj.scene.position.x = -4
      obj.scene.position.z = -7
      return obj.scene
    }

    function bindGeometry(geo) {
      const geometry = geo;
      const position = geometry.attributes.position;
      const vertex = new Vector3();
      const skinIndices = [];
      const skinWeights = [];

      for (let i = 0; i < position.count; i++) {

        vertex.fromBufferAttribute(position, i);

        skinIndices.push(that.segmentCount, 0, 0, 0);
        skinWeights.push(1, 0, 0, 0);

      }

      geometry.setAttribute('skinIndex', new Uint16BufferAttribute(skinIndices, 4));
      geometry.setAttribute('skinWeight', new Float32BufferAttribute(skinWeights, 4));

      return geometry;
    }

    function createBones(sizing) {

      bones = [];

      let prevBone = new Bone();
      prevBone.position.y = sizing.halfHeight;
      bones.push(prevBone);

      for (let i = 0; i < sizing.segmentCount; i++) {

        const bone = new Bone();
        bone.position.y = -sizing.segmentHeight;
        bones.push(bone);
        prevBone.add(bone);
        prevBone = bone;

      }

      return bones;

    }

    function createMesh(geometry, bones, mat, showHelpper = true) {

      const material = new MeshPhysicalMaterial({
        emissive: 0x072534,
        side: DoubleSide,
        flatShading: true,
        ...mat,
      });

      const mesh = new SkinnedMesh(geometry, material);
      const skeleton = new Skeleton(bones);

      mesh.add(bones[0]);

      mesh.bind(skeleton);

      if (showHelpper) {
        skeletonHelper = new SkeletonHelper(mesh);
        skeletonHelper.material.linewidth = 2;
        scene.add(skeletonHelper);
      }

      return mesh;

    }

    async function initBones() {

      const segmentCount = that.segmentCount;
      const segmentHeight = 22 / segmentCount;
      const height = segmentHeight * segmentCount;
      const halfHeight = height * 0.5 + 2;

      const sizing = {
        segmentHeight: segmentHeight,
        segmentCount: segmentCount,
        height: height,
        halfHeight: halfHeight,
      };

      const geometry1 = await createGeometry(sizing);
      const geometry2 = await createGeometry3(sizing);
      const geometry3 = await createGeometry4(sizing);
      const geometry4 = await createGeometry5(sizing);
      const geometry5 = await createGeometry6(sizing);
      const bones = createBones(sizing);
      mesh = createMesh(geometry1, bones, { color: 0xc0c0c0, metalness: 0.8, roughness: 0.6 }, false);
      let mesh2 = createMesh(geometry2, bones, { color: 0xf58220 }, false);
      let mesh3 = createMesh(geometry3, bones, { color: 0xa0a0a0, opacity: 0.7, transparent: true }, false);
      let mesh4 = createMesh(geometry4, bones, { color: 0xf58220 }, false);
      let mesh5 = createMesh(geometry5, bones, { color: 0xf58220 }, false);
      mesh.position.set(0, 0, 0);

      let group = new Group()

      mesh.scale.multiplyScalar(1);
      group.add(mesh);

      mesh2.scale.multiplyScalar(1);
      group.add(mesh2);

      mesh3.scale.multiplyScalar(1);
      group.add(mesh3);

      mesh4.scale.multiplyScalar(1);
      group.add(mesh4);

      mesh5.scale.multiplyScalar(1);
      group.add(mesh5);

      group.scale.set(0.7, 1, 0.7)
      group.rotateY(-0.5, 0, 0)
      console.log(group)
      scene.add(group);
      scene.add(await createGeometryTjt())
    }


    function animate() {

      requestAnimationFrame(animate);

      const count = that.segmentCount
      function updateAnimate(rotate, length) {
        for (let i = 1; i <= count; i++) {
          mesh.skeleton.bones[i].rotation.y = rotate / count;
          mesh.skeleton.bones[i].position.y = length / count;
        }
      }

      if (that.state.started) {
        const t = Math.floor((new Date() - that.state.startTime) * 0.03);
        if (t > that.state.theta.length) {
          that.props.dispatch({ type: 'spring/stop' });
        } else {
          updateAnimate(that.state.theta[t] + that.state.dRotate, -20 - that.state.z[t] * 100 - that.state.dLength * 100)
        }
      } else {
        updateAnimate(that.state.rotate + that.state.dRotate, -20 - that.state.length * 100 - that.state.dLength * 100)
      }

      renderer.render(scene, camera);

    }

    initScene().then(animate);

  }

  componentWillReceiveProps(nextProps, _) {
    this.setState({
      rotate: nextProps.rotate,
      length: nextProps.length,
      started: nextProps.started,
      theta: nextProps.thetaShow,
      z: nextProps.zShow,
      startTime: nextProps.startTime,
      dLength: (nextProps.param.m - 0.5) * 9.8 / nextProps.param.k,
      dRotate: 0.2 *  nextProps.param.m - 0.1
    });
  }

  render() {
    return (
      <div>
        <Card id='lab-desk' title='实验台' bordered={true} extra={
          <Tooltip title={<div><p align='center'>按住鼠标左键旋转视角</p><p align='center'>鼠标滚轮调节大小</p></div>}
                   color={'blue'}>
            <QuestionCircleOutlined />
          </Tooltip>
        } className={animation_card}>
          <div id='container' className={animation_container} style={{display: this.state.ready ? 'block' : 'none' }}/>
          {
            this.state.ready ?
            <div /> :
            <PageLoading className={animation_container} />
          }
        </Card>
      </div>
    );
  }
}

export default Animation;

