import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { graphql, StaticQuery } from 'gatsby';
import { ScrollableLink } from 'react-update-url-on-scroll';
import { 
  AppBarStylings,
  HeaderContainer,
  LinkContainer,
  LinksContainer,
  LogoIcon,
  MenuContainer,
  MenuIcon,
  StyledLogoAnchor,
  StyledMenuAnchor,
  StyledSectionAnchor
} from './Header.style';

export default class Header extends React.Component<{}, {anchorEl: HTMLElement|null}> {
  constructor(props:any) {
    super(props);
    this.state = {anchorEl: null};
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setAnchorEl = this.setAnchorEl.bind(this);
  }

  setAnchorEl(event: HTMLElement|null) {
    this.setState({anchorEl: event});
  }

  handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    this.setAnchorEl(event.currentTarget);
  }

  handleClose() {
    this.setAnchorEl(null);
  }

  render() {
    return (
      <StaticQuery 
      query={HEADER_QUERY}
      render={(data) => (
        <AppBar position="fixed" style={AppBarStylings}>
          <HeaderContainer>
            <StyledLogoAnchor href='/#home'>
              <LogoIcon fluid={data.logo.childImageSharp.fluid} alt='akatsukac logo'/>
            </StyledLogoAnchor>
            <LinksContainer className="link-section">
              <LinkContainer>
                <ScrollableLink href='#home'>
                  <StyledSectionAnchor className="section-anchor selected" id="home">HOME</StyledSectionAnchor>
                </ScrollableLink>
              </LinkContainer>         
              <LinkContainer>
                <ScrollableLink href='#projects'>
                  <StyledSectionAnchor className="section-anchor" id="projects">PROJECTS</StyledSectionAnchor>
                </ScrollableLink>
              </LinkContainer>
              <LinkContainer>
                <ScrollableLink href='#about'>
                  <StyledSectionAnchor className="section-anchor" id="about">ABOUT</StyledSectionAnchor>
                </ScrollableLink>
              </LinkContainer> 
              <LinkContainer>
                <ScrollableLink href='#contact'>
                  <StyledSectionAnchor className="section-anchor" id="contact">CONTACT</StyledSectionAnchor>
                </ScrollableLink>
              </LinkContainer>
            </LinksContainer>
            <MenuContainer>
              <StyledLogoAnchor aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                <MenuIcon fluid={data.hamburger.childImageSharp.fluid} alt='hamburger menu'/>
              </StyledLogoAnchor>
              <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
                <MenuItem>
                  <ScrollableLink href='#home'>
                    <StyledMenuAnchor id="home">HOME</StyledMenuAnchor>
                  </ScrollableLink>
                </MenuItem>
                <MenuItem> 
                  <ScrollableLink href='#projects'>
                    <StyledMenuAnchor id="projects">PROJECTS</StyledMenuAnchor>
                  </ScrollableLink>
                </MenuItem>
                <MenuItem> 
                  <ScrollableLink href='#about'>
                    <StyledMenuAnchor id="about">ABOUT</StyledMenuAnchor>
                  </ScrollableLink>
                </MenuItem>
                <MenuItem> 
                  <ScrollableLink href='#contact'>
                    <StyledMenuAnchor id="contact">CONTACT</StyledMenuAnchor>
                  </ScrollableLink>
                </MenuItem>
              </Menu>
            </MenuContainer>
          </HeaderContainer>
        </AppBar>
      )}></StaticQuery>
      );
    }
  }

const HEADER_QUERY = graphql`
  query GetHeaderData {
    logo: file(relativePath: {eq: "images/logo.png"}) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hamburger: file(relativePath: {eq: "images/icons/hamburger_icon.png"}) {
      childImageSharp {
        fluid(maxHeight: 48) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;