/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NavigationService } from '../navigation.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LeftNavComponent } from './left-nav.component';

describe('Component: LeftNav', () => {
  it('should create an instance', () => {

    let service = new NavigationService();

    let component = new LeftNavComponent(service);
    expect(component).toBeTruthy();
  });
});

