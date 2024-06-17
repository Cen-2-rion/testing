import getHealthStatus from '../user';

// проверочные тесты всех состояний
test('getHealthStatus healthy', () => {
  const character = { name: 'Маг', health: 90 };
  const result = getHealthStatus(character);

  expect(result).toBe('healthy');
});

test('getHealthStatus wounded', () => {
  const character = { name: 'Маг', health: 50 };
  const result = getHealthStatus(character);

  expect(result).toBe('wounded');
});

test('getHealthStatus critical', () => {
  const character = { name: 'Маг', health: 10 };
  const result = getHealthStatus(character);

  expect(result).toBe('critical');
});
