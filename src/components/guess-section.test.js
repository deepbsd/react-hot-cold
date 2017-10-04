import React from 'react';
import {shallow} from 'enzyme';

import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders the feedback', () => {
        const randomtext = "Wooba Dooba Baby Buddah!";
        const wrapper = shallow(<GuessSection feedback={randomtext} />);
        expect(wrapper.contains(randomtext)).toEqual(true);
    });
});
