import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import Form from './Form';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

describe('Form component', () => {
  const onSubmit = vi.fn();

  beforeEach(() => {
    render(
      <Form onSubmit={onSubmit}>
        <FormInput type='email' id='email' name='email' label='email' />
        <FormInput
          type='password'
          id='password'
          name='password'
          label='password'
        />
        <Button type='submit' text='submit' classNames={['btn']} />
      </Form>
    );
  });

  test('renders a form element', () => {
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  test('renders children', () => {
    const fieldsets = screen.getAllByRole('group');
    const emailInput = screen.getByRole('textbox');
    const passwordInput = fieldsets[1].childNodes[1];
    const button = screen.getByRole('button');
    expect(fieldsets.length).toBe(2);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('renders controlled FormInput component', async () => {
    const email = 'myEmail@email.com';
    const emailInput = screen.getByRole('textbox');
    await userEvent.type(emailInput, email);
    expect(emailInput.value).toBe(email);
  });

  test('invokes onSubmit callback when submitted', async () => {
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(onSubmit).toHaveBeenCalled();
  });
});
