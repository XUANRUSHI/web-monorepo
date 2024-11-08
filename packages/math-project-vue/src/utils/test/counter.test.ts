import { useCounter } from '@/composables/counter'
import { expect } from 'vitest'

it('useCounter', () => {
  const { count, inc, dec } = useCounter()
  expect(count.value).toBe(0)
  inc()
  expect(count.value).toBe(1)
  dec()
  expect(count.value).toBe(0)
})
