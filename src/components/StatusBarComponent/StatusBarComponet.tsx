import React, { useLayoutEffect } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

interface Props {
  hidden?: boolean;
  backgroundColor?: string;
  barStyle?: StatusBarStyle; // 'default' | 'light-content' | 'dark-content'
  translucent?: boolean;
}

const StatusBarComponent: React.FC<Props> = ({
  hidden = false,
  backgroundColor = 'transparent',
  barStyle = 'default',
  translucent = false,
}) => {
  useLayoutEffect(() => {
    StatusBar.setHidden(hidden);
    StatusBar.setBarStyle(barStyle);
    StatusBar.setBackgroundColor(backgroundColor, true);
    StatusBar.setTranslucent(translucent);

    return () => {
      StatusBar.setHidden(false); // reset to visible when unmounts
    };
  }, [hidden, backgroundColor, barStyle, translucent]);

  return null;
};

export default StatusBarComponent;