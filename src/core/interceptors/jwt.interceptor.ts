import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/shared/services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authservice: AuthService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authservice.tokenValue;
        const isLoggedIn = this.authservice.isLoggedIn;

        // if (isLoggedIn.value) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        // }
        return next.handle(req);
    }
}