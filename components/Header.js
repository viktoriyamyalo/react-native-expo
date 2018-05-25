import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}

export default Header;