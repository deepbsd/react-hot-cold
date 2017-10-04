import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });
    it('Renders a list of user guesses', () => {
      let usrguesses = [3,5,7,8,9];
      let wrapper = shallow(<GuessList guesses={usrguesses} />);
      let listitems = wrapper.find('li');
      expect(listitems.length).toEqual(usrguesses.length);
      usrguesses.forEach((value, index) => {
        expect(listitems.at(index).text()).toEqual(value.toString());
      });
    });


});
