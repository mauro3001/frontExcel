import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, Subscription, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { LoaderService } from "@uis/uis-lib";
import { Overlay } from "@angular/cdk/overlay";

@Injectable({
  providedIn: "root",
})
export class LoadingInterceptorService implements HttpInterceptor {
  constructor(private loaderService: LoaderService, private overlay: Overlay) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const instancia = new LoaderService(this.overlay);
    //start loader
    const spinnerSubscription: Subscription =
      (req.method === "GET" || req.headers.get("SIMULATE-LOADER") === "GET") &&
      req.headers.get("SIMULATE-LOADER") !== "NONGET"
        ? instancia.spinner$.subscribe()
        : instancia.spinnerNoGet$.subscribe();
    const request = req;

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => throwError(err)),
      finalize(() => spinnerSubscription.unsubscribe())
    );
  }
}
