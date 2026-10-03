import axios from 'axios';
import {afterEach, describe, expect, it, vi} from 'vitest';
import {loadData} from '../utils/localeLoader';

describe('loadData', () => {
  afterEach(() => vi.restoreAllMocks());

  it('requests the lower-cased locale and returns the payload', async () => {
    const get = vi.spyOn(axios, 'get').mockResolvedValue({data: {a: 1}});
    expect(await loadData('EN', 'cv')).toEqual({a: 1});
    expect(get).toHaveBeenCalledWith('content/en/cv.json');
  });

  it('returns null when the request fails', async () => {
    vi.spyOn(axios, 'get').mockRejectedValue(new Error('boom'));
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(await loadData('de', 'cv')).toBeNull();
  });
});
