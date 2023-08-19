import React, { useEffect, useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import { styles } from './styles'
import entities from './entities'
import Physics from './physics'

export default function App() {
    const [ running, setRunning ] = useState(false);

    useEffect(() => {
        setRunning(true);
    }, []);
  return (
    <View style={{ flex: 1 }}>
        <GameEngine
            systems={[Physics]}
            entities={entities()}
            running={running}
            style={styles.body}
        >
        </GameEngine>
        <StatusBar hidden={true} />
    </View>
  )
}
