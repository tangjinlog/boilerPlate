import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithQueryClient } from '@test/utils';
import { ExampleContainer } from '@organisms/Container';

describe('', () => {
	it('', async () => {
		renderWithQueryClient(<ExampleContainer />);

		expect(await screen.findByText('')).toBeInTheDocument();
	});
});
