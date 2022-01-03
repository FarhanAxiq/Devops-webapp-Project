import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { EditTripName } from '../../../src/components/Trip/Itinerary/TripName';
import userEvent from '@testing-library/user-event';

describe('TripName', () => {
    beforeEach(() => {
        render(<EditTripName />);
    });

    it('renders text box', async () => {
        const collapse = screen.getByTestId('trip-collapse');
        expect(collapse.classList.contains('show')).toBe(false);

        const editbutton = screen.getByTestId('edit-button');
        user.click(editbutton);
        await waitFor(() => {
            expect(collapse.classList.contains('show')).toBe(true);
        });
    });

    it('updates trip name', async () => {
        const tripinput = screen.getByTestId('trip-input');

        userEvent.type(tripinput, 'new trip');

        expect(tripinput.value).toEqual("new trip")
    });

    it('upload file', () => {
        const loadbutton = screen.getByTestId('load-button');
        user.click(loadbutton);
    });
});