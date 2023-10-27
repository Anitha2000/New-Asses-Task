import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Notify } from '../interface/notify.interface';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  success(notify: Notify) {
    const title = notify.title || 'Success!';
    this.toastr.success(notify.message, title, {
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
    });
  }

  warn(notify: Notify) {
    const title = notify.title || 'Warning!';
    this.toastr.warning(notify.message, title, {
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
    });
  }


  error(notify: Notify) {
    const title = notify.title || 'Error!';
    this.toastr.error(notify.message, title, {
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'decreasing',
    });
  }

  info(notify: Notify) {
    const title = notify.title || 'Info!';
    this.toastr.info(notify.message, title, {
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
    });
  }

  clearToasters(): void{
    this.toastr.clear();
  }
}
