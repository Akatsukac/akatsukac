import * as React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';

export default class About extends React.Component {
  render() {
    return (
      <ScrollableSection hash={'about'}>
        <div>
          <span>
            About
          </span>
        </div>
      </ScrollableSection>
    );
  }
}
