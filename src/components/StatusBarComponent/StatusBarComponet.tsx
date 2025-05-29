

import {View, Text, StatusBar, StatusBarStyle, Platform} from 'react-native';
import React from 'react';

interface StatusBarComponentProps {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
  translucent?: boolean;
}

const StatusBarComponet: React.FC<StatusBarComponentProps> = ({
  backgroundColor = 'transparent',
  barStyle = 'light-content',
  translucent = true,
}) => {
  if (Platform.OS !== 'android') return null;

  return (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={barStyle}
      translucent={translucent}
    />
  );
};

export default StatusBarComponet;
