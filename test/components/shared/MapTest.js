/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Map from 'components/shared/Map';

describe('MapComponent', function() {

  beforeEach(function() {
    this.MapComponent = createComponent(Map);
  });

  it('should have its component name as default className', function() {
    expect(this.MapComponent.props.className).to.equal('map');
  });
});
