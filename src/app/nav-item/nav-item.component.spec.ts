/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NavItemComponent } from './nav-item.component';

describe('Component: NavItem', () => {
  describe('Initialization', () => {
    it('should create an instance', () => {
      let component = new NavItemComponent();
      expect(component).toBeTruthy();
    });

    it('has a valid navLabel', () => {
      let component = new NavItemComponent();
      expect(component.navLabel).not.toBeNull();
    });
  });
});
