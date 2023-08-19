import React from 'react'
import Matter from 'matter-js'
import { styles } from './styles';
import { View } from 'react-native';

const Bird = ({ body, color }) => {
    const widthBody = body.bounds.max.x - body.bounds.min.x;
    const heightBody = body.bounds.max.y - body.bounds.min.y;

    const xBody = body.position.x - widthBody/2;
    const yBody = body.position.y - widthBody/2;

    return (
        <View style={{
            borderWidth: 1,
            borderColor: color,
            boderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }} />
    )
}

export default (world, color, pos, size) => {
    const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { label: 'Bird' }
    )

    Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird />
  }
}
