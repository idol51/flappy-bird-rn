import Matter from 'matter-js'

const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine;
    // console.log(touches);

    touches.filter((t) => t.type === 'press' )
        .forEach((t) => {
            console.log('run');
            Matter.Body.setVelocity(entities.Bird.body, {
                x: 0,
                y: -8,
            });

        })

    Matter.Engine.update(engine, time.delta);

    return entities;
}

export default Physics