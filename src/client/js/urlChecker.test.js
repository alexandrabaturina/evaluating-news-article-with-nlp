import { checkForURL } from './urlChecker'

test('Valid URL', () => {
    const URL = 'https://www.nbcnews.com/science/space/spacex-nasa-prepare-launch-historic-crewed-mission-n1218456';
    expect(checkForURL(URL)).toBe(true);
});

test('Invalid URL', () => {
    const URL = 'reddit.c';
    expect(checkForURL(URL)).toBe(false);
})