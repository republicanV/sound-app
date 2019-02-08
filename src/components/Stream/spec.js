import React from "react";
import Stream from './presenter';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Stream', () => {

    const props = {
        tracks: [{ origin: { title: 'x' } }, { origin: { title: 'y' } }],
    };

    it('shows two elements', () => {
        const element = shallow(<Stream { ...props } />);

        expect(element.find('.track')).to.have.length(2);
    });

});

