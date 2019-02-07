import React from "react";
import Stream from './Stream';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Stream', () => {

    const props = {
        tracks: [{ title: 'x' }, { title: 'y' }],
    };

    it('shows two elements', () => {
        const element = shallow(<Stream { ...props } />);

        expect(element.find('.track')).to.have.length(2);
    });

});