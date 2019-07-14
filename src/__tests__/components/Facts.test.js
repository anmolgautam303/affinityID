import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Facts from '../../components/employeeList';

configure({ adapter: new Adapter() })

describe('Facts', () => {
    const getRandomfact = jest.fn();
    let props = { getRandomfact: getRandomfact };
    let facts = shallow(<Facts {...props}/>);

    it('renders properly', () => {
        expect(Facts).toMatchSnapshot();
    });

    describe('user wants to get a random fact', () => {

        it('dispatches `getRandomfact()``', () => {
            facts.find('.btn').simulate('click')
            expect(props.getRandomfact).toHaveBeenCalledWith();
        });
    });
});
