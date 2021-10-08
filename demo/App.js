/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ActionSheetIOS,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import RNSystemFileBrower from './native'

// import OpenMapNavigation from 'react-native-open-map-navigation'


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
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

  const [img, setImg] = useState('')

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TouchableOpacity style={styles.btn} onPress={() => {
            RNSystemFileBrower.openFileBrower().then(res => {
              console.log(res)
              setImg(res?.urls[0])
            })
            // OpenMapNavigation.openMapActionSheet("121.467237", "31.234532", "上海华盛大公馆", {
            //   onFail: (e) => {
            //     console.log(e)
            //   },
            //   onNoMapApp: () => {
            //     console.log("没有相关地图")
            //   },
            //   onSelectItem: (item) => {
            //     console.log("选择了：%o", item)
            //   }
            // })
          }}>
            <Text style={{ color: 'white' }}>打开自带文件浏览器</Text>
          </TouchableOpacity>
          <Image source={{ uri: img }} style={{ width: '100%', height: 300 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
