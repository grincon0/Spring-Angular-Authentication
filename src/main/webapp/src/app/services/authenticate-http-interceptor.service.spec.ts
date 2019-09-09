import { TestBed } from '@angular/core/testing';

import { AuthenticateHttpInterceptorService } from './authenticate-http-interceptor.service';

describe('AuthenticateHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticateHttpInterceptorService = TestBed.get(AuthenticateHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
