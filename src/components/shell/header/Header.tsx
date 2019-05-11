import * as React from 'react';
import { SFC } from 'react';
import * as PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { GetHeaderData } from '../../../typings/graphql';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { 
  LogoImg
} from './Header.style';

interface IQueryProps {
  data: GetHeaderData.Query
}

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
});

export interface Props extends WithStyles<typeof styles> {}

type TProps = IQueryProps & Props;

function DenseAppBar(props: TProps) {
  const { data, classes } = props;
  if (!data || !data.logo || !data.logo.childImageSharp) {
    console.warn(`DenseAppBar: GraphQL returned a null on build.`);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to='/'>
            <LogoImg fluid={data.logo.childImageSharp.fluid} alt='akatsukac logo'/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const container: SFC<Props> = props => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => <DenseAppBar data={data} {...props}/>}
  />
);

export default withStyles(styles)(container);

const HEADER_QUERY = graphql`
    query GetHeaderData {
        logo: file(relativePath: {eq: "images/logo.png"}) {
            childImageSharp {
                fluid(maxHeight: 300) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;