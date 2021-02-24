import React from 'react';
import Rocket from 'components/index/rocket';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './heading.module.scss';

export default function Heading() {
  return (
    <Row className={`${styles.cover} align-items-center`}>
      <Col sm={12} md={8} className="align-self-center pr-5">
        <h1 className={styles.title}>
          Pedro <a className="highlight">Lourenço</a>
        </h1>
        <h2 className={styles.sub}>
          A <a className="highlight warning">software</a> engineer interested in
          software architecture, cloud computing and data visualization.
        </h2>
      </Col>
      <Col sm={12} md={4} className="d-none d-sm-block">
        <Rocket className="active" />
      </Col>
    </Row>
  );
}
