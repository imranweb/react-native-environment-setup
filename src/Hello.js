import React from 'react';
import {Text} from 'react-native'
import { API_HOST } from './config';


const Hello = () => {
    return <Text>Base URL = {__DEV__.toString()} {API_HOST}</Text>;
}
export default Hello;