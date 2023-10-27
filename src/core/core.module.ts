import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ServerErrorInterceptor, JwtInterceptor } from "./interceptors";
import { AppHttpClient } from "./services/app-http-client.service";
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    providers: [
        AppHttpClient,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerErrorInterceptor,
          multi: true,
        },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
    declarations: [
      DeleteDialogComponent
    ]
})

export class CoreModule { }
