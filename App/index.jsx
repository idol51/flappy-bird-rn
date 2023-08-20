import React, { useEffect, useRef, useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import { styles } from './styles'
import entities from './entities'
import Physics from './physics'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const gameEngineRef = useRef(null);

    const [ running, setRunning ] = useState(false);
    const [ currentPoints, setCurrentPoints ] = useState(0);
    const [ highScore, setHighScore ] = useState(0);

    const fetchHighScore = async () => {
      const val = await AsyncStorage.getItem('highScore');

      if (val) {
        setHighScore(Number(val));
      }
      console.log('score',val);
    }

    const saveHighScore = async () => {
      if ( currentPoints > highScore ) {
        await AsyncStorage.setItem('highScore', JSON.stringify(currentPoints));
        setHighScore(currentPoints);
      }
    }

    useEffect(() => {
        setRunning(false);
        fetchHighScore();
    }, []);

    useEffect(() => {
      saveHighScore()
    }, [currentPoints])
  return (
    <View style={styles.body}>
        <Text style={styles.points}>{currentPoints}</Text>
        <Text style={styles.highScore}>Hi:{highScore}</Text>
        <GameEngine
            ref={gameEngineRef}
            systems={[Physics]}
            entities={entities()}
            running={running}
            onEvent={(e) => {
              switch(e.type) {
                case 'game_over': 
                  setRunning(false);
                  gameEngineRef.current.stop();
                  setCurrentPoints(0);
                  break;
                case 'new_point':
                  setCurrentPoints((points) => points + 1);
                  break;
              }
            }}
            style={styles.gameEngine}
        >
        </GameEngine>

        {!running && 
          <View style={styles.home}>
            <TouchableOpacity 
              style={styles.startButon} 
              onPress={() => {
                setCurrentPoints(0);
                setRunning(true); 
                gameEngineRef.current.swap(entities());
              }}>
              <Text style={styles.startButtonText}>
                START GAME
              </Text>
            </TouchableOpacity>
          </View>
        }
        <StatusBar hidden={true} />
    </View>
  )
}
