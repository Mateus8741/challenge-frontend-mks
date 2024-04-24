import { formatMoney } from './formatMoney'

describe('formatMoney function', () => {
  test('should format money correctly for integer values', () => {
    expect(formatMoney(249)).toBe('R$ 249')
    expect(formatMoney(2499)).toBe('R$ 2.499')
    expect(formatMoney(24999)).toBe('R$ 24.999')
  })
})
