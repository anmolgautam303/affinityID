import FactReducer from '../../reducers/employeeDatabaseReducer';
import {
    SET_RANDOM_FACT, 
    SET_ALL_CATEGORY, 
    SET_FACT_BY_CATEGORY,
    UPDATE_FAVOURITE_JOKES
  } from '../../constants/Facts_constants';

describe('FactReducer', () => {
    const randomFact = {"randomFact": {"id": "25vBR41iRNiXVzm_-IGxag", "value": "this is a test joke"}};
    const categories = {"categories": ["explicit", "dev", "movie", "food", "celebrity", "science", "sport", "political", "religion", "animal", "history", "music", "travel", "career", "money", "fashion"]};
    const factByCategory = {"factByCategory": {"id": "25vBR41iRNiXVzm_-IGxag", "value": "this is a factByCategory joke"}};
    const savedJokes = {"savedJokes": []}

    it('sets randomFact to redux store', () => {
        expect(FactReducer({}, { type: SET_RANDOM_FACT, payload: randomFact.randomFact }))
        .toEqual(randomFact);
    });

    it('sets categories to redux store', () => {
        expect(FactReducer({}, { type: SET_ALL_CATEGORY, payload: categories.categories }))
        .toEqual(categories);
    });

    it('sets factByCategory to redux store', () => {
        expect(FactReducer({}, { type: SET_FACT_BY_CATEGORY, payload: factByCategory.factByCategory }))
        .toEqual(factByCategory);
    });

    it('sets savedJokes to redux store', () => {
        expect(FactReducer({}, { type: UPDATE_FAVOURITE_JOKES, payload: savedJokes }))
        .toEqual(savedJokes);
    });
});
