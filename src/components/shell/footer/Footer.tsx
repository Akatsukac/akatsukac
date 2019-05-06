import * as React from 'react';
import * as PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const styles = createStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    'background-color': '#3f51b5'
  },
});

export interface Props extends WithStyles<typeof styles> {}

function SimpleBottomNavigation(props: Props) {
    const { classes } = props;
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    </BottomNavigation>
  );
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(SimpleBottomNavigation);
