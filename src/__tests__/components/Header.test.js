import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Header from '../../components/header';
import { NavLink } from "react-router-dom";

configure({ adapter: new Adapter() })

describe('Header', () => {
    let props = {  };
    let header = shallow(<Header {...props}/>);

    it('renders properly', () => {
        expect(Header).toMatchSnapshot();
    });

    it('`Random employeeList` links to `/`', () => {
        expect(header.find(NavLink).first().props().to).toEqual('/');
    });

    it('`By category` links to `/category`', () => {
        expect(header.find(NavLink).last().props().to).toEqual('/category');
    });

});
