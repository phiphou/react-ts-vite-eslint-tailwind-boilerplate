import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'

import FormCard from '@/components/FormCard'

describe('FormCard test', () => {
  test('Should render a form with a submit button', () => {
    const onClick = vi.fn()
    const label = 'Login to your account'

    const { getByText, getByRole } = render(
      <FormCard onSubmit={onClick}></FormCard>
    )

    const button = getByRole('button')

    expect(button).not.toBeNull()

    expect(getByText(label)).not.toBeNull()

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
