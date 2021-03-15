/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import Pusher from 'pusher-js/react-native';

import {Text, useColorScheme, View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Container, Title, Textbody} from './styles';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('d296d71d546c5f7a4f50', {
      cluster: 'us2',
    });

    var channel = pusher.subscribe('m');
    channel.bind('event', function (data) {
      alert(JSON.stringify(data.message));

      console.log(JSON.stringify(data));
    });
  }, []);

  return (
    <>
      <Container>
        <Title>Pusher Test</Title>
        <Textbody>
          POC para teste do funcionamento do Pusher React Native.
        </Textbody>
      </Container>
    </>
  );
};

export default App;
