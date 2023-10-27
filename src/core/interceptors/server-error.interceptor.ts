import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "src/app/auth/shared/services/auth.service";
import { Path } from "../enums";

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private authService: AuthService){}
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if ([401, 403].includes(error.status)) {
              this.authService.logout();
              this.router.navigateByUrl(`${Path.Auth}/${Path.SignIn}`);
              return throwError(error);
            } else {
              return throwError(error);
            }
          })
       )
    }

}
