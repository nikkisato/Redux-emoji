import { getFace } from './moodSelectors';

describe('face selectors', () => {
  it('gets face objects from state', () => {
    const state = ['isHungry', 'isTired', 'isHyper'];
    const face = getFace(state);

    expect(face).toEqual('😀');
  });
});
