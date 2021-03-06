import React, { ReactNode, ReactElement } from 'react';
import Drawer from '@mui/material/Drawer';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
type PropsType = {
  anchor: Anchor;
  open?: boolean;
  button?: ReactElement;
  onOpen?: Function;
  onClose?: Function;
  children?: ReactNode;
};

export default (props: PropsType) => {
  const [open, setOpen] = React.useState(false);
  const [closed, setClosed] = React.useState<boolean|undefined>();

  const externallyControlled = typeof props.open !== 'undefined';
  const drawerOpen = !closed && (externallyControlled ? props.open : open);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(open);
    if (!open) {
      setClosed(true);
    }
    if (open && props.onOpen) props.onOpen();
    if (!open && props.onClose) props.onClose();      
  };

  return (
    <React.Fragment>
      {
        props.button && !drawerOpen &&
        React.cloneElement(props.button, {
          onClick: toggleDrawer(true)
        })
      }
      <Drawer 
        anchor={props.anchor} 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
      >
        {
          !closed &&
          drawerOpen && 
          props.children
        }
      </Drawer>
    </React.Fragment>
  );
};
