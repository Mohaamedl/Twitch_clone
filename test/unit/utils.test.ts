import { expect } from 'chai';
import { cn } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('cn', () => {
    it('should concatenate class names', () => {
      const result = cn('class1', 'class2');
      expect(result).to.equal('class1 class2');
    });

    it('should handle conditional class names', () => {
      const result = cn('class1', false && 'class2', 'class3');
      expect(result).to.equal('class1 class3');
    });
  });
});