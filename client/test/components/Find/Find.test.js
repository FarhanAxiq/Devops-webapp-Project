import React from 'react';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { VALID_CONFIG_RESPONSE } from "../../sharedMocks";
import Find from '../../../src/components/Find/Find';
import ServerSettings from '../../../src/components/Margins/ServerSettings';

describe('Find', () => {
    fetch.mockResponse(VALID_CONFIG_RESPONSE);
    let showFind = true;

    beforeEach(() => {
        fetch.mockResponse(VALID_CONFIG_RESPONSE);
    });

    test('opens the Find Collapse', () => {
        render(<Find serverSettings={ServerSettings}  closeFind={() => { return !showFind }} />);
        const collapse = screen.getByRole('searchbox');
        expect(collapse.classList.contains('value')).toBeFalsy();

    });

    test('pass valid find string', () => {
        render(<Find serverSettings={ServerSettings}  />)
        const findText = screen.getByTestId("find-input");
        fireEvent.change(findText, { target: { value: 'Boise' } })
        expect(findText.value).toEqual("Boise");
    })

    test(' \`Where\` Dropdown Open', ()=>{})

    test('clicks the random button', () => {
        render(<Find serverSettings={ServerSettings}  />);
        const randomButton = screen.getByTestId("find-random-button");
        user.click(randomButton)
    });

    test('clicks the clear find button', () => {
        render(<Find serverSettings={ServerSettings}  />);
        const clearButton = screen.getByTestId("find-x-button");
        user.click(clearButton);
        expect(clearButton.foundList).toEqual(undefined);

    });

    test('clicks the filter button', () => {
        render(<Find serverSettings={ServerSettings}  />);
        const filterButton = screen.getAllByRole("button");
    });
});