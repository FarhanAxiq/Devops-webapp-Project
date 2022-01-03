import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { MOCK_RESULTS } from "../../sharedMocks";
import Results from '../../../src/components/Find/Results';

describe('Results', () => {
    const placeActions = {
        append: jest.fn()
    };

    beforeEach(() => {
        fetch.resetMocks();
        render(<Results placesList={MOCK_RESULTS} placeActions={placeActions}/>);
    });

    it('renders a cell with given place expected', () => {
        expect(screen.getByRole('cell', { name: /40.0/i }).textContent)
            .toContain('40.00, 50.00');
    });

    it('clicks TableRow in Results Component', () => {
        user.click(screen.getByRole('cell', {name: /40.0/i}));
        expect(placeActions.append).toHaveBeenCalled();
    });
});