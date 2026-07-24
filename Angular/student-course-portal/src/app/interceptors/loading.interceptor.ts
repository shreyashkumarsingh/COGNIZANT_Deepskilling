import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.showLoading();

  return next(req).pipe(
    finalize(() => {
      // finalize executes whether request succeeds or errors (like try/finally)
      loadingService.hideLoading();
    })
  );
};
