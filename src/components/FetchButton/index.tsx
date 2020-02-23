import React from 'react';
import { Button, Text, ActivityIndicator } from 'react-native';
import { useApi } from 'src/redux/hooks';

const FetchButton = () => {
  const [state, getUsers] = useApi();

  const title = () => {
    if (state.isFetching) return "Fetching";
    if (state.didError) return "Error";
    if (state.users.length >= 1) return "Success";
    return "Idle";
  };

  return <>
    <Button
      title={title()}
      color="#f194ff"
      onPress={getUsers}
    />
    {state.isFetching && <ActivityIndicator/>}
    {state.users.length >= 1 && <Text>
      {JSON.stringify(state.users[0])}
    </Text>}
    {state.didError && <Text style={{ color: 'red' }}>
      {state.error.toString()}
    </Text>}
  </>
}; 

export default FetchButton;
