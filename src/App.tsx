import React from 'react';
import { Text, View, Image, Touchable, ScrollView, LinearGradient } from 'revas/common';
import logo from './logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card} pointerEvents="box-none">
        <Image style={styles.logo} src={logo} />
        <Text style={styles.text} numberOfLines={2}>
          Revas让你可以用React和Flexible CSS，在Canvas上绘制高性能交互式界面～{'🎉'}
        </Text>
        <LinearGradient style={styles.decorator} colors={['#9254DE', '#B37FEB', '#91D5FF', '#40A9FF']} />
        <Touchable style={styles.btn} onPress={() => wx.showToast({title: 'enjoy~😊'})}>
          <Text style={styles.btnText}>Go</Text>
        </Touchable>
      </View>
      <ScrollView style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <View style={{ height: 80, backgroundColor: '#9254DE' }} />
        <View style={{ height: 80, backgroundColor: '#91D5FF' }} />
        <View style={{ height: 80, backgroundColor: '#B37FEB' }} />
        <View style={{ height: 80, backgroundColor: '#40A9FF' }} />
        <View style={{ height: 80, backgroundColor: '#9254DE' }} />
        <View style={{ height: 80, backgroundColor: '#91D5FF' }} />
        <View style={{ height: 80, backgroundColor: '#B37FEB' }} />
        <View style={{ height: 80, backgroundColor: '#40A9FF' }} />
        <View style={{ height: 80, backgroundColor: '#9254DE' }} />
        <View style={{ height: 80, backgroundColor: '#91D5FF' }} />
        <View style={{ height: 80, backgroundColor: '#B37FEB' }} />
        <View style={{ height: 80, backgroundColor: '#40A9FF' }} />
        <View style={{ height: 80, backgroundColor: '#9254DE' }} />
        <View style={{ height: 80, backgroundColor: '#91D5FF' }} />
        <View style={{ height: 80, backgroundColor: '#B37FEB' }} />
        <View style={{ height: 80, backgroundColor: '#40A9FF' }} />
      </ScrollView>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#abcdef',
  },
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowBlur: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffsetX: 0,
    shadowOffsetY: 5,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  decorator: {
    height: 4, borderRadius: 2, margin: 10,
    marginLeft: 40, marginRight: 40
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    padding: 10,
    paddingBottom: 0
  },
  logo: {
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    resizeMode: 'contain'
  },
  btn: {
    justifyContent: 'center',
    height: 40, backgroundColor: 'blue',
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    height: 30,
    lineHeight: 30,
    color: '#fff',
    fontWeight: 'bold',
  },

}



declare const wx: any
declare const canvas: any