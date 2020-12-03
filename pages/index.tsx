import { StyleSheet, Text, View } from 'react-native';
import Link from 'next/link';
import React from 'react';
import { Button } from '../components/Button';
import { Space } from '../components/Space';
import { Heading } from '../components/Heading';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  headline: {
    color: 'magento',
    fontSize: 30,
  },
  link: {
    color: 'blue',
    fontSize: 20
  }
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Heading>
        NextJS + React Native Web + Styled Components + Typescript
      </Heading>

      <Space />

      <Link href="/welcome">
        <Text style={styles.link}>
          To welcome page
        </Text>
      </Link>

      <Space />

      <Button>Styled-component Button</Button>
    </View>
  );
}

export default Home;