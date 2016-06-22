/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { NavigationService } from './navigation.service';

describe('Navigation Service', () => {
  beforeEachProviders(() => [NavigationService]);

  it('should ...',
      inject([NavigationService], (service: NavigationService) => {
    expect(service).toBeTruthy();
  }));
});
