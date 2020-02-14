import reducer from './moodReducers';
import { eatSnack, study, takeNap, drinkCoffee } from '../actions/moodActions';
import { shallow } from 'enzyme';
import React from 'react';
import Moods, {
  isTired,
  isHyper,
  isEducated,
  isHungry,
  getFace
} from '../selectors/moodSelectors';

describe('mood reducer', () => {
  it('handles a bogus action', () => {
    const action = { type: 'BOGUS' };
    const newState = reducer([], action);
    expect(newState).toEqual([]);
  });

  it('handle a coffee action', () => {
    const action = drinkCoffee('1');
    const initialState = ['1'];
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ '0': '1', coffees: NaN });
  });

  it('handle a snack action', () => {
    const action = eatSnack('1');
    const initialState = ['1'];
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ '0': '1', snacks: NaN });
  });

  it('handle a nap action', () => {
    const action = takeNap('1');
    const initialState = ['1'];
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ '0': '1', naps: NaN });
  });

  it('handle a study action', () => {
    const action = study('1');
    const initialState = ['1'];
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ '0': '1', studies: NaN });
  });
});

