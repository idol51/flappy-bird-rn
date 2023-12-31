import React from 'react'
import Matter from 'matter-js'
import { styles } from './styles';
import { View } from 'react-native';

const Obstacle = ({ body, color }) => {
    const widthBody = body.bounds.max.x - body.bounds.min.x;
    const heightBody = body.bounds.max.y - body.bounds.min.y;

    const xBody = body.position.x - widthBody/2;
    const yBody = body.position.y - heightBody/2;

    return (
        <View style={{
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody,
            justifyContent: 'space-between'

        }}>
            <View style={{ backgroundColor: color, height: 30, borderRadius: 8 }}/>
            <View style={{ backgroundColor: color, opacity: 0.6, flex: 1, marginHorizontal: 8 }}/>
            <View style={{ backgroundColor: color, height: 30, borderRadius: 8 }}/>
        </View>
        // <View style={{
        //     borderWidth: 1,
        //     borderColor: color,
        //     boderStyle: 'solid',
        //     position: 'absolute',
        //     left: xBody,
        //     top: yBody,
        //     width: widthBody,
        //     height: heightBody
        // }} />
    )
}

export default (world, label, color, pos, size) => {
    const initialObstacle = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { 
            label,
            isStatic: true
        }
    )

    Matter.World.add(world, initialObstacle);

  return {
    body: initialObstacle,
    color,
    pos,
    renderer: <Obstacle />
  }
}
