import Link from 'next/link';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '../components/Heading';
import { Space } from '../components/Space';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
});


export default function Welcome() {
  return (
    <View style={styles.container}>
      <Heading>
        Welcome
      </Heading>

      <Space />
      
      <Link href="/">
        <a>
          <Text>Home</Text>
        </a>
      </Link>
    </View>
  );
}
