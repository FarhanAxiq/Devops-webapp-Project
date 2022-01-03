import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from '@jest/globals';
import WhereIs from '../../../src/components/WhereIs/WhereIs';

describe('WhereIs', () => {
    let showWhereIs = true;

    beforeEach(() => {
        fetch.resetMocks();
        render(<WhereIs closeWhereIs={() => {return !showWhereIs}}/>);
    });

    it('opens the WhereIs Modal', () => {
        const collapse = screen.getByRole('textbox');
        expect(collapse.classList.contains('value')).toBeFalsy();

    });

    it('mocks user input in the WhereIs Modal', () => {
        const inputBox = screen.getByTestId('whereis-input');
        userEvent.type(inputBox, '0,0')
        expect(inputBox.value).toBe('0,0');
    });
});
