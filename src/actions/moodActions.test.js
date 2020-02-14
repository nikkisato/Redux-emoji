import {
  DRINK_COFFEE,
  drinkCoffee,
  EAT_SNACK,
  eatSnack,
  TAKE_NAP,
  takeNap,
  STUDY,
  study
} from './moodActions';

describe('actions ', () => {
  it('creates a DRINK_COFFEE increase action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({ type: DRINK_COFFEE });
  });

  it('creates a EAT_SNACK increase action', () => {
    const action = eatSnack();
    expect(action).toEqual({ type: EAT_SNACK });
  });

  it('creates a TAKE_NAP increase action', () => {
    const action = takeNap();
    expect(action).toEqual({ type: TAKE_NAP });
  });

  it('creates a STUDY increase action', () => {
    const action = study();
    expect(action).toEqual({ type: STUDY });
  });
});
