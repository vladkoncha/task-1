'use client';

import { useState } from 'react';

import { Button } from '@/src/shared/ui/button';

import { ColorSwitchingButtonProps } from './types';
import { getRandomHexColor } from './utils/getRandomColor';

export const ColorSwitchingButton = ({
  style,
  className,
  children,
}: ColorSwitchingButtonProps) => {
  const [buttonColor, setButtonColor] = useState('#000');

  const handleClick = () => {
    setButtonColor(getRandomHexColor());
  };

  return (
    <Button
      kind="primary"
      style={{ ...style, backgroundColor: buttonColor }}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Button>
  );
};
