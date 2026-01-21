import React from 'react';
import Rocket from 'components/index/rocket';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as styles from './heading.module.css';

export default function Heading() {
  return (
    <Row className={`${styles.cover} align-items-center`}>
      <Col sm={12} md={8} className="align-self-center pr-5">
        <h1 className={styles.title}>
          Pedro <a className="highlight">Lourenço</a>
        </h1>
        <h2 className={styles.sub}>
          <a className="highlight warning">Software</a> Engineer building products at the
          intersection of finance and software architecture.
        </h2>
      </Col>
      <Col sm={12} md={4} className="d-none d-sm-block">
        <Rocket className="active" />
      </Col>
    </Row>
  );
}
