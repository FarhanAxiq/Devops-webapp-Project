import React from 'react';
import { render, screen } from '@testing-library/react';
import Planner from '../../../src/components/Trip/Planner';
import { MOCK_PLACES, VALID_CONFIG_RESPONSE } from "../../sharedMocks";
import ServerSettings from '../../../src/components/Margins/ServerSettings';

describe('Planner', () => {
    const createSnackBar = jest.fn();
    const places = MOCK_PLACES;

    beforeEach(() => {
        fetch.mockResponse(VALID_CONFIG_RESPONSE);
        render(<Planner createSnackBar={createSnackBar} places={MOCK_PLACES} placesActions={createSnackBar} serverSettings={ServerSettings} />);
    });

    it('renders a Leaflet map', async () => {
        screen.getByText('Leaflet');
    });

    it('renders trip table', async () => {
        screen.getByText('Enter Trip Name');
    });
});