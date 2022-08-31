// import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../src';

describe('Button', () => {
  describe('Должно правильно рендериться', () => {
    test('default', () => {
      render(
        <Button
          onClick={() => console.log('Меня кликнули')}
          isDisabled={false}
          variant="primary"
        >
          Я кнопка
        </Button>
      );
      const button = screen.getByText('Я кнопка');
      expect(button.classList.contains('button-primary')).toBeTruthy();
    });
    // test("success", () => {})
    // test("disabled", () => {})
  });

  // test("Кнопка кликабельна", () => {})
  // test("Кнопка не кликабельна если состояние disabled", () => {})
});
