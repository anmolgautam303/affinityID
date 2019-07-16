import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Joke from '../../components/joke';
import * as m from '../../utilities/saveEmployeeList';

configure({ adapter: new Adapter() })

describe('Joke', () => {
    m.SaveFact = jest.fn();
    const updateFavouriteJokes = jest.fn();
    let props = { joke: [] };
    let joke = shallow(<Joke {...props}/>);

    it('renders properly', () => {
        expect(Joke).toMatchSnapshot();
    });

    it('should not render if prop `joke` is an empty array', () => {
        expect(joke.get(0)).toBeFalsy()
    });

    describe('when joke length is not zero', () => {
        beforeEach(() => {
          props = { joke: { "id": "25vBR41iRNiXVzm_-IGxag", "value": "this is a test joke" },
                    updateFavouriteJokes: updateFavouriteJokes
                  };
          joke = shallow(<Joke {...props}/>);
        });

        it('displays the correct joke', () => {
          expect(joke.find('span').text()).toEqual('this is a test joke');
        });

        describe('user wants to mark the joke as favourite', () => {

          it('dispatches the `SaveFact()` and `props.updateFavouriteJokes`', () => {
              joke.find('.btn').simulate('click')
              expect(m.SaveFact).toHaveBeenCalledWith(props.joke);
              expect(props.updateFavouriteJokes).toHaveBeenCalledWith(props.joke);
          });
      });
    });
});
