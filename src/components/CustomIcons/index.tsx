import React from 'react';
import {
  TextStyle,
  StyleProp,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

// Define supported icon types
export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

// Props for the VectorIcon component
interface VectorIconProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  activeOpacity?: number;
}

// Mapping icon type strings to components
const iconSetMap: Record<IconType, any> = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

// Final reusable icon component
const VectorIcon: React.FC<VectorIconProps> = ({
  type,
  name,
  size = 24,
  color = 'black',
  style,
  onPress,
  activeOpacity = 0.9,
}) => {
  const IconComponent = iconSetMap[type];

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
        <IconComponent name={name} size={size} color={color} style={style} />
      </TouchableOpacity>
    );
  }

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default VectorIcon;
