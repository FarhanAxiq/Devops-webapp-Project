import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { MOCK_RESULTS } from "../../sharedMocks";
import Shorter from '../../../src/components/Shorter/Shorter';

describe('Results', () => {
    const toggleShorter = jest.fn();
    const placeActions = {
        setTour: jest.fn()
    };

    beforeEach(() => {
        fetch.resetMocks();
        render(<Shorter toggleShorter={toggleShorter} placeActions={placeActions}/>);
    });

    it('test check button', () => {
        const checkButton = screen.getByTestId("check-button");
        user.click(checkButton);
        expect(toggleShorter).toHaveBeenCalled();
    });

    it('test optimize button', () => {
        const optButton = screen.getByTestId("opt-trip");
        user.click(optButton);
    });

    it('test original trip button', () => {
        const optButton = screen.getByTestId("opt-trip");
        const origButton = screen.getByTestId("orig-trip");
        user.click(optButton);
        user.click(origButton);
        expect(placeActions.setTour).toHaveBeenCalled();
    });
});