import React from 'react';
import { render, screen, waitFor ,fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Find from '../../../src/components/Find/Find';
import { FindInput } from '../../../src/components/Find/FindInput';

describe('FindInput', () => {

    beforeEach(async () => {
        render(<FindInput/>);
        await waitFor(() => {
            const dropdown = screen.getByTestId('find-FindInput Dropdown');
            user.click(dropdown);
        })
    });

    test('Opens find search', async () =>{
        const find = screen.getByTestId('find-find-button');
        user.click(find);
    });

    test('Opens where search', async() =>{
        const where = screen.getByTestId('find-where-button');
        user.click(where);
    });

    test('Renders random button', async () => {
        const random = screen.getByTestId('find-random-button');
        user.click(random);
    });
});