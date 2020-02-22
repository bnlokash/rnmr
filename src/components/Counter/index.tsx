import React from 'react';
import { Button, Text } from 'react-native';
import { useCount } from 'src/redux/hooks';

const Counter = () => {
  const [state, increment, decrement] = useCount();

  return <>
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
  </>
}; 

export default Counter;
