import { expect } from 'chai';
import { render } from '@testing-library/react';
import { Sidebar } from '@/app/(browse)/_components/sidebar';
import { getRecommended } from '@/lib/recommendation_service';
import { getFollowedUsers } from '@/lib/follow_service';

describe('Sidebar Integration', () => {
  it('should render recommended and following users', async () => {
    const recommended = await getRecommended();
    const following = await getFollowedUsers();
    const { getByText } = render(<Sidebar />);
    expect(getByText('Recommended')).to.exist;
    expect(getByText('Following')).to.exist;
  });
});