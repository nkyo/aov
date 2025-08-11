import { renderHook } from '@testing-library/react-hooks';
import useNames from '../useNames.js';

const mockURLParams = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => mockURLParams(),
}))

const cases = [
    [
        {},
        undefined,
        {
            match: '<img src="https://sportday.support247.top/wp-content/uploads/2022/07/MicrosoftTeams-image-2048x374.png" width="400px"/>',
            blue: 'Đội xanh',
            red: 'Đội đỏ',
        }
    ],
    [
        {
            teamNames: 'Mat Bao,SKT',
        },
        undefined,
        {
            match: '<img src="https://sportday.support247.top/wp-content/uploads/2022/07/MicrosoftTeams-image-2048x374.png" width="400px"/>',
            blue: 'Mat Bao',
            red: 'SKT',
        }
    ],
    [
        {
            matchName: 'MSI 2021',
            teamNames: 'Mat Bao,SKT',
        },
        undefined,
        {
            match: 'MSI 2021',
            blue: 'Mat Bao',
            red: 'SKT',
        }
    ],
    [
        {},
        {
            match: 'LCS Spring 2021',
            blue: 'Team Liquid',
            red: 'Mat Bao'
        },
        {
            match: 'LCS Spring 2021',
            blue: 'Team Liquid',
            red: 'Mat Bao',
        }
    ],
];

describe('correct data extraction from useNames hook', () => {
    test.each(cases)(
        "when useParams = %o and nameState = %o, return %o",
        (useParamArg, nameStateArg, result) => {
            mockURLParams.mockImplementation(() => (useParamArg));
            expect(renderHook(() => useNames(nameStateArg)).result.current).toEqual(result);
        }
    );
});
