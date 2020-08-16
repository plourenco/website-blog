import React from 'react'
import FcupImg from 'assets/img/fcup.png'
import FeupImg from 'assets/img/feup.png'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

export default function Education() {
  return (
    <section>
      <h2>Education</h2>
      <Row className="mb-4 pt-4">
        <Col xs={2}>
          <Image fluid src={FeupImg} />
        </Col>
        <Col xs={10}>
          <h5>MSc in Software Engineering</h5>
          <p className="text-muted">
            Faculty of Engineering, University of Porto
          </p>
          <p>
            MSc in Software Engineering at the Faculty of Engineering (top 1%).
            Main skills obtained were Data Analysis, Software Architecture,
            Software Development, Software Testing, Cloud Computing (Thesis).
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <Image fluid src={FcupImg} />
        </Col>
        <Col xs={10}>
          <h5>BSc in System Networking and Engineering</h5>
          <p className="text-muted">Faculty of Science, University of Porto</p>
          <p>
            Main skills obtained were Algorithms and Data structures, OOP,
            System networking, Compilers, Artificial Intelligence and
            Computational Logic.
          </p>
        </Col>
      </Row>
    </section>
  )
}
