import React from 'react';
import { View } from 'react-native';
import RNSpinner, { SpinnerProps, SpinnerType } from 'react-native-spinkit';
import { Box } from 'src/components/Box';
import { COLORS } from 'src/theme';

interface Props extends SpinnerProps {
  isFullScreen?: boolean;
  type?: SpinnerType;
}

export const Spinner: React.FC<Props> = ({ isFullScreen, type, ...spinnerProps }) => {
  if (isFullScreen) {
    return (
      <View>
        <Box height="100%" alignItems="center" justifyContent="center">
          <RNSpinner
            type={type ?? '9CubeGrid'}
            color={COLORS.SECONDARY}
            size={50}
            {...spinnerProps}
          />
        </Box>
      </View>
    );
  }
  return <RNSpinner type={type ?? 'ThreeBounce'} color={COLORS.BLACK} {...spinnerProps} />;
};
