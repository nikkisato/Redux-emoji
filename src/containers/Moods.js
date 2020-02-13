import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace } from '../selectors/moodSelectors';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Moods() {
  const dispatch = useDispatch();
  const face = useSelector(getFace);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>Drink Coffee</button>
        <button onClick={() => dispatch(eatSnack())}>Eat Snack</button>

        <button onClick={() => dispatch(takeNap())}>Take Nap</button>
        <button onClick={() => dispatch(study())}>Study</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
}
