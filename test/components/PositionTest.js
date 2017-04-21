/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
//import React from 'react/addons';
//const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Position from 'components/Position';

describe('PositionComponent', function() {

  beforeEach(function() {
    this.PositionComponent = createComponent(Position);
  });

  it('should have its component name as default className', function() {
    expect(this.PositionComponent.props.className).to.equal('position');
  });
});
