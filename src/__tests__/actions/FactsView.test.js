
import {
    FETCH_RANDOM_FACT,
    FETCH_ALL_CATEGORY,
    FETCH_FACT_BY_CATEGORY,
    UPDATE_FAVOURITE_JOKES
  } from '../../constants/Facts_constants';
import * as actions from '../../actions/employeeList';

it('creates an action to get a random fact', () => {
    const joke = { "id": "25vBR41iRNiXVzm_-IGxag", "value": "this is a test joke" };

    const expectedAction = { type: FETCH_RANDOM_FACT, payload: joke };

    expect(actions.getRandomfact(joke)).toEqual(expectedAction);
});

it('fetch all categories', () => {
    const category = ["explicit", "dev", "movie", "food", "celebrity", "science", "sport", "political", "religion", "animal", "history", "music", "travel", "career", "money", "fashion"];

    const expectedAction = { type: FETCH_ALL_CATEGORY, payload: category };

    expect(actions.fetchAllCategory(category)).toEqual(expectedAction);
});


it('fetch fact by category', () => {
    const joke = { "id": "25vBR41iRNiXVzm_-IGxag", "value": "this is a fact fetched by category" };

    const expectedAction = { type: FETCH_FACT_BY_CATEGORY, payload: joke };

    expect(actions.getFactByCategory(joke)).toEqual(expectedAction);
});


it('get all saved favourtiejokes', () => {
    const favouriteJokes = [{"id":"5rQO4oFQSeOJuvN-vK5t_w","value":"When Chuck Norris says 'pull my finger', consider that a polite warning that you very soon will be atomized."}];

    const expectedAction = { type: UPDATE_FAVOURITE_JOKES, payload: favouriteJokes };

    expect(actions.updateFavouriteJokes(favouriteJokes)).toEqual(expectedAction);
});
