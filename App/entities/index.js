import Matter from 'matter-js'
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default (restart) => {
    let engine = Matter.Engine.create({ enableSleeping: false });

    let world = engine.world;

    world.gravity.y = 0.4;

    return {
        physics: { engine, world },
        Bird: Bird(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),
        Floor: Floor(world, 'green', { x: windowWidth/2, y: 300 }, { height: 50, width: windowWidth })
    }
}
