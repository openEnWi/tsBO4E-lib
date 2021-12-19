import {EnumLabels} from './enum-labels';

enum MockEnum {
    FOO,
    BAR,
    BAZ
}

describe('EnumLabels', () => {
  let enumLabels: EnumLabels<MockEnum>;
  const mockLabelEntries: [MockEnum, string][] = [
    [MockEnum.BAR, 'bar'],
    [MockEnum.FOO, 'Foo'],
  ];

  beforeEach(() => {
    enumLabels = EnumLabels.of(mockLabelEntries);
  });

  it('should create', () => {
    expect(enumLabels).toBeTruthy();
  });

  it('should return labels for known entries', () => {
    expect(enumLabels.getValue(MockEnum.BAR)).toEqual('bar');
    expect(enumLabels.getValue(MockEnum.FOO)).toEqual('Foo');
  });

  it('should return undefined for unknown entries', () => {
    expect(enumLabels.getValue(MockEnum.BAZ)).toBeUndefined();
  });

  it('should return undefined for unknown enum member', () => {
    expect(enumLabels.getValue('RANDOM' as unknown as MockEnum)).toBeUndefined();
  });
});
