import React from 'react';
import { AppState } from 'react-native';

interface Props {
  onActive?: () => void;
}

export const useAppState = ({ onActive }: Props = {}) => {
  const appStateRef = React.useRef(AppState.currentState);
  const [appState, setAppState] = React.useState(appStateRef.current);

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      appStateRef.current = nextAppState;
      setAppState(appStateRef.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  React.useEffect(() => {
    if (appState === 'active') {
      onActive?.();
    }
  }, [appState, onActive]);

  return { appState };
};
