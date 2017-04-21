/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import IssData from 'components/shared/IssData';

describe('IssDataComponent', function() {

  beforeEach(function() {
    this.IssDataComponent = createComponent(IssData);
  });

  it('should have its component name as default className', function() {
    expect(this.IssDataComponent.props.className).to.equal('issdata');
  });
});
