import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace } from '../selectors/moodSelectors';
import {
  drinkCoffee,
  eatSnacks,
  takeNaps,
  study
} from '../actions/moodActions';
import reducer from '../reducers/moodReducers';

export default function Moods() {
  const [state, dispatch] = useReducer(reducer, {
    coffees: 0,
    naps: 0,
    studies: 0,
    snacks: 0
  });

  const { coffees, snacks, naps, studies } = this.state;
  const face = getFace(this.state);

  return (
    <>
      <Controls>
        <button onClick={() => this.handleSelection({ type: 'DRINK_COFFEE' })}>
          coffee - {coffees}
        </button>
        <button onClick={() => this.handleSelection({ type: 'EAT_SNACK' })}>
          snacks - {snacks}
        </button>
        <button onClick={() => this.handleSelection({ type: 'TAKE_NAP' })}>
          naps - {naps}
        </button>
        <button onClick={() => this.handleSelection({ type: 'STUDY' })}>
          studies - {studies}
        </button>
      </Controls>
      <Face emoji={face} />
    </>
  );
}
