import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Counter from './Counter';

const defaultCounters = [
  {
    "name": "Example 1",
    "count": 0
  },
  {
    "name": "Example 2",
    "count": 0
  }
]

const Counters = () => {
  const [counters, setCounters] = useState(defaultCounters);

  const add = (counter) => {
    const tempCounters = [...counters];
    const counterIndex = tempCounters.indexOf(counter);
    tempCounters[counterIndex].count++;
    setCounters(tempCounters);
  }

  const subtract = (counter) => {
    const tempCounters = [...counters];
    const counterIndex = tempCounters.indexOf(counter);
    if (tempCounters[counterIndex].count === 0) {
      return;
    }
    tempCounters[counterIndex].count--;
    setCounters(tempCounters);
  }

  return (
    <Container>
      <Row>
      { counters.map(counter => (
        <Col key={ counter.name } md={4}>
        <Counter
          key={ counter.name }
          counter={ counter }
          add={ add }
          subtract={ subtract }
          />
        </Col>
      ))}
      </Row>
    </Container>
  );
}

export default Counters;
