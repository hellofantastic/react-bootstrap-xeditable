import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import EditableTextField from '../src/EditableTextField';

test('render EditableTextField and click', t => {
  const wrapper = shallow(<EditableTextField name="test" onUpdate={() => {}}/>);
  const child = shallow(wrapper.get(0));
  t.is(child.find('a.editable').length, 1);
  child.find('a.editable').simulate('click');
  t.is(child.find('input').length, 1);
});
