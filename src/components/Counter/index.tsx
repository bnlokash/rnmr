import React from 'react';
import { Button, Text } from 'react-native';
import { useCount } from '../../redux/hooks';
import Container from '../Container';

const Counter = () => {
  const [state, increment, decrement] = useCount();

  return <Container>
    <Text style={{ fontSize: 30 }}>{state}</Text>
    <Button
      title="+"
      color="#f194ff"
      onPress={increment}
    />
    <Button
      title="-"
      color="#f194ff"
      onPress={decrement}
    />
  </Container>
};

export default Counter;
