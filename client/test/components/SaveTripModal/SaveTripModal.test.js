import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import SaveTripModal from '../../../src/components/SaveTripModal/SaveTripModal';

describe('SaveTripModal', () => {
    let showModal = true;

    beforeEach(() => {
        fetch.resetMocks();
        render(<SaveTripModal isOpen={() => { return !showModal }} setFileName={jest.fn()} />);
    });

    it('opens the SaveTrip Modal', () => {
        const collapse = screen.getByRole('textbox');
        expect(collapse.classList.contains('value')).toBeFalsy();

    });

    it('mocks user input in the Save Trip Modal', () => {
        const inputBox = screen.getByTestId('savetripmodal-input');
        userEvent.type(inputBox, 'TripName')
        expect(inputBox.value).toBe('TripName');
    });

    it('Renders pop-up', async () => {
        const modal = screen.getByTestId('save-modal');
        expect(modal.classList.contains('show')).toBe(false);
    });
});