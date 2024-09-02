import { expect } from 'chai';
import { render, fireEvent } from '@testing-library/react';
import { Toggle } from '@/app/(browse)/_components/sidebar/toggle';
import { useSidebar } from '@/store/use-sidebar';

describe('Toggle Component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Toggle />);
    const button = getByRole('button');
    expect(button).to.exist;
  });

  it('should toggle sidebar state on click', () => {
    const { getByRole } = render(<Toggle />);
    const button = getByRole('button');
    fireEvent.click(button);
    const { collapsed } = useSidebar.getState();
    expect(collapsed).to.be.true;
  });
});