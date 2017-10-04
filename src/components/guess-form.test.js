import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from './actions';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });
    it('Dispatches makeGuess() upon form submit', () => {
      let callback = jest.fn();
      let wrapper = mount(<GuessForm dispatch={callback}  />);
      let value = '37';
      wrapper.find('input[type="text"]').node.value = value;
      wrapper.simulate('submit');
      expect(callback).toHaveBeenCalledWith(makeGuess(value));
    });
    it('Should reset the input field after dispatching function', () => {
      let wrapper = mount(<GuessForm dispatch={() => {}}/>);
      let input = wrapper.find('input[type="text"]');
      input.node.value = 50;
      wrapper.simulate('submit');
      expect(input.node.value).toEqual('');
    })

});
