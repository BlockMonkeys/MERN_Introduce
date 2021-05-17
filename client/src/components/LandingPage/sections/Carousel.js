import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'My Introduce Banner',
    imgPath:
      'https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/mybanner.png',
  },
  {
    label: 'My Pictrue 1',
    imgPath:
      'https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/mybanner.png',
  },
  {
    label: 'My Picture 2',
    imgPath:
      'https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/mybanner.png',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "450px",
    display: 'block',
    maxWidth: "100%",
    overflow: 'hidden',
    width: '100%',
  },
}));

function WelcomeBanner(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label} style={{}}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img style={{objectFit:"cover", width:"100%"}}
              className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

    </div>
  );
}

export default WelcomeBanner;