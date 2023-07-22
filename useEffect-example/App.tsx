import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const ExampleComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log('First useEffect hook without dependency array');
  });

  useEffect(() => {
    console.log('Second useEffect hook with empty dependency array');
  }, []);

  useEffect(() => {
    console.log(`Third useEffect hook with count as dependency: ${count}`);
  }, [count]);

  return (
    <View style={styles.container}>
      <Button title="Increase count" onPress={() => setCount(count + 1)} />
      <Text style={styles.label}>Count: {count}</Text>
      <Button title="Change active" onPress={() => setActive(!active)} />
      <Text style={styles.label}>Active: {active.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
  },
});

export default ExampleComponent;
