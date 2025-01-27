import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import FormInput from './FormInput';

describe('FormInput component', () => {
  const props = {
    id: 'test1',
    name: 'firstName',
    label: 'first name',
    placeholder: 'please enter your first name',
    value: '',
    onChange: vi.fn(),
  };

  beforeEach(() => {
    render(<FormInput {...props} />);
  });

  test('renders a fieldset element', () => {
    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();
  });

  test('renders a label element with the correct text content', () => {
    const label = screen.getByLabelText(props.label);
    expect(label).toBeInTheDocument();
  });

  test('renders an input element with the correct placeholder text', () => {
    const input = screen.getByPlaceholderText(props.placeholder);
    expect(input).toBeInTheDocument();
  });

  test('invokes callback function for each keystroke', async () => {
    const text = 'One more test string';
    const input = screen.getByRole('textbox');
    await userEvent.type(input, text);
    expect(props.onChange).toHaveBeenCalledTimes(text.length);
  });
});
