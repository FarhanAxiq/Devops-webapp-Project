import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { MOCK_PLACES, VALID_CONFIG_RESPONSE } from "../../sharedMocks";
import Itinerary from '../../../src/components/Trip/Itinerary/Itinerary.js';
import ServerSettings from '../../../src/components/Margins/ServerSettings';


describe('Itinerary', () => {
 
    beforeEach(() => {
        fetch.mockResponse(VALID_CONFIG_RESPONSE);
        render(<Itinerary places={MOCK_PLACES} serverSettings={ServerSettings} placeActions={{append: jest.fn(), selectIndex: jest.fn()}} />);
    });

    it('renders a cell with given place expected', () => {
        expect(screen.getByRole('cell', { name: /40.0/i }).textContent)
            .toContain('40.00, 50.00');
    });

    it('renders the name attribute', () => {
        screen.getByRole('cell', { name: /Place A/i });
    });

    it('toggles row dropdown when clicked', () => {
        const dropdown = screen.getByTestId('row-toggle-0');
        expect(dropdown.getAttribute('aria-expanded')).toEqual('false');

        user.click(dropdown);
        expect(dropdown.getAttribute('aria-expanded')).toEqual('true');
    });
});