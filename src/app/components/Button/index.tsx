'use client';

import { createStyles } from '@mantine/core';
import { Button as M_Button } from '@mantine/core';

// types
import { IButton } from './types';

const useStyles = createStyles((theme) => ({
  myCustomButton: {
    ...theme.fn.focusStyles(),
  },
}));

const Button: React.FC<IButton> = ({ title, ...rest }) => {
  const { classes } = useStyles();
  return (
    <M_Button {...rest} className={classes.myCustomButton}>
      {title}
    </M_Button>
  );
};

export default Button;
