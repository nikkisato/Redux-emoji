import React from 'react';
import { shallow } from 'enzyme';
import Moods from './Moods';

describe('Mood component', () => {
  it('renders Mood', () => {
    const wrapper = shallow(<Moods />);
    expect(wrapper).toMatchSnapshot();
  });
});
