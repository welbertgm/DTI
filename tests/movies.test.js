import Movies from '../src/proxy/Movies'

test('the movie title is Avengers: Endgame', async () => {
    const data = await Movies.getById('tt4154796');
    expect(data.Title).toBe('Avengers: Endgame');
  });