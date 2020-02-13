import { getThumbnails } from './moodSelectors';

describe('videos selectors', () => {
  it('gets thumbnail objects from state', () => {
    const state = ['1234', '2345', '4567'];
    const thumbnails = getThumbnails(state);

    expect(thumbnails).toEqual([
      { thumbnailUrl: 'https://img.youtube.com/vi/1234/default.jpg', videoId: '1234' },
      { thumbnailUrl: 'https://img.youtube.com/vi/2345/default.jpg', videoId: '2345' },
      { thumbnailUrl: 'https://img.youtube.com/vi/4567/default.jpg', videoId: '4567' }
    ]);
  });
});