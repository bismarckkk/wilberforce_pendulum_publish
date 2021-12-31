import Animation from '@/component/animation';
import Param from '@/component/param';
import Chart from '@/component/chart';
import styles from './laboratory.css';
import { Row, Col } from 'antd';

export default function() {
  return (
    <div>
      <br />
      <Row gutter={25}>
        <Col className={styles.gutterBox} xl={12} xs={24}>
          <Animation />
        </Col>
        <Col xl={0} sm={24} xs={24}><br/></Col>
        <Col className={styles.gutterBox} xl={12} sm={24} xs={24}>
          <Param />
          <br />
          <Chart />
        </Col>
      </Row>
    </div>
  );
}
