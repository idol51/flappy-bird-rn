import React from 'react'
import Matter from 'matter-js'
import { styles } from './styles';
import { ImageBackground, View } from 'react-native';
import floorImg from '../assets/floor.png'

const Floor = ({ body, color }) => {
    const widthBody = body.bounds.max.x - body.bounds.min.x;
    const heightBody = body.bounds.max.y - body.bounds.min.y;

    const xBody = body.position.x - widthBody/2;
    const yBody = body.position.y - heightBody/2;


    return (
        <View style={{
            // borderTopColor: 'green',
            // borderTopWidth: 6,
            // backgroundColor: '#fce16a',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}>
            <ImageBackground style={{ flex: 1 }} source={floorImg} resizeMode='cover'  />
        </View>
    )
}

export default (world, color, pos, size) => {
    const initialFloor = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { 
            label: 'Floor',
            isStatic: true
        }
    )

    Matter.World.add(world, initialFloor);

  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor />
  }
}
