import React, { ReactNode, useEffect, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

// components
import { div as Div } from './Layout';

import { camelToSentenceCase } from './util/string';


const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ActionButton = { onClick: Function, closing?: boolean, variant?: "text" | "outlined" | "contained" };
type Actions = { [index: string]: ActionButton }

type ModalProps = { show?: boolean, caption?: string, title?: ReactNode, body?: ReactNode, onEscape?: Function, actions?: Actions };


export default function Modal(props: ModalProps) {
    const [open, setOpen] = React.useState(false);
  
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleEscapeKey = () => {
        props.onEscape && props.onEscape();
        handleClose();
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscapeKey, false);
        return () => document.removeEventListener("keydown", handleEscapeKey, false);
    }, []);
 
    return (
      <div>
          {
            props.show === undefined && 
            <Button variant="outlined" onClick={handleClickOpen}>
                {props.caption || 'Modal'}
            </Button>
          }
        <Dialog
          open={props.show !== undefined ? props.show : open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {props.body}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {
                Object.keys(props.actions || {}).map(key => {
                    const action = props.actions![key];
                    const handleClick = () => {
                        if (action.closing) handleClose();
                        action.onClick()
                    }
                    return <Button key={key} onClick={handleClick} variant={action.variant}>{camelToSentenceCase(key)}</Button>
                })
            }
          </DialogActions>
        </Dialog>
      </div>
    );
  }