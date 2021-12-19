import {ImmutableMap} from './immutable-map';

describe('ImmutableMap', () => {
  let immutableMap: ImmutableMap<string, number>;
  const mockEntries: [string, number][] = [
    ['foo', 1],
    ['bar', 2],
  ];

  beforeEach(() => {
    immutableMap = ImmutableMap.of(mockEntries);
  });

  it('should create', () => {
    expect(immutableMap).toBeTruthy();
  });

  it('should return values for known keys', () => {
    expect(immutableMap.getValue('foo')).toEqual(1);
    expect(immutableMap.getValue('bar')).toEqual(2);
  });

  it('should return undefined for unknown entries', () => {
    expect(immutableMap.getValue('BAZ')).toBeUndefined();
  });

  it('should return all key values pairs on getAll', () => {
    expect(immutableMap.getAll()).toEqual([
      {key: 'foo', value: 1},
      {key: 'bar', value: 2},
    ]);
  });
});
