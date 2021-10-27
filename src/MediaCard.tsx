/* eslint jsx-quotes: ["error", "prefer-double"] */
import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { camelToSentenceCase } from './util/string';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export type MediaCardActionMap = {
  [index: string]: Function;
};
export type MediaCardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  image?: any;
  onClick?: Function;
  footerActions?: MediaCardActionMap;
};

export default function MediaCard(props: MediaCardProps) {
  const {
    title, description, image, onClick, footerActions, children,
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => onClick && onClick()}>
        {image && (
          <CardMedia
            className={classes.media}
            image={image.url}
            title={title}
          />
        )}
        <CardContent>
          {title && (
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          )}

          {description && (
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          )}

          {children && children}
        </CardContent>
      </CardActionArea>
      {footerActions && (
        <CardActions>
          {Object.keys(footerActions).map((key) => (
            <Button
              key={key}
              size="small"
              color="primary"
              onClick={() => footerActions![key]()}
            >
              {camelToSentenceCase(key)}
            </Button>
          ))}
        </CardActions>
      )}
    </Card>
  );
}
