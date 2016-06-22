import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebstimateAppComponent } from '../app/webstimate.component';

beforeEachProviders(() => [WebstimateAppComponent]);

describe('App: Webstimate', () => {
  it('should create the app',
      inject([WebstimateAppComponent], (app: WebstimateAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'webstimate works!\'',
      inject([WebstimateAppComponent], (app: WebstimateAppComponent) => {
    expect(app.title).toEqual('webstimate works!');
  }));
});
