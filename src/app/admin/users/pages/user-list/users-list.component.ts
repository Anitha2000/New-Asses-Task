import { AfterViewInit, Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HttpParams } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { merge, startWith, switchMap, map, catchError, of, Subject } from 'rxjs';

import { Users } from '../../shared/interfaces/admin-users-grid.interface';
import { AdminUserService } from '../../shared/services/admin-user.service';
import { DeleteDialogComponent } from 'src/core/components/delete-dialog/delete-dialog.component';
import { NotificationService } from 'src/core/services/notification.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'website', 'action'];
  dataSource= new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  rowCount = 0;
  loading = false;
  users: any[] = [];

  show_create_edit: boolean = false;
  table_data: any;
  page_create: any;

  reloadGrid = new EventEmitter<boolean>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterSubject: Subject<string> = new Subject<string>();
  @ViewChild('userGridSearch') userGridSearch: ElementRef | any;
  ELEMENT_DATA: any;
  itemToEdit: any;

  constructor(private adminUserService: AdminUserService, private toastr: NotificationService, public dialog: MatDialog) { }

  // After the component initialization it will call and load the data
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  // Create and Edit passing data to thir component
  createEditUser(data: any = '', page: any = ''): void {
    this.show_create_edit = true;
    if (page == 'edit') {
      this.table_data = data;
      this.page_create = false;
    } else {
      this.table_data = this.dataSource;
      this.page_create = true;
    }

  }

  // When user hit from the create or edit page it will return to the list
  BacktoList(event: any) {
    // this.getUserData();
    this.show_create_edit = false;
  }

  onNewItemCreated(newItem: any) {
    this.dataSource.data.push(newItem);
  }

  onItemEdited(editedItem: any) {
    const index = this.dataSource.data.findIndex((item:any) => item.id === editedItem.id);
    if (index !== -1) {
      this.dataSource.data[index] = editedItem;
    }
    
    this.itemToEdit = null;
  }

  // Delete the user from the list
  deleteConfirmModel(data: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      panelClass: 'respmodelscroll',
      data: {
        id: data.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.modalConfirm === 'yes') {
        this.adminUserService.deleteUser(data.id).subscribe((res: any) => {

          const index = this.dataSource.data.findIndex((item:any) => item.id === data.id);
          if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource.data = this.dataSource.data
          }
          this.toastr.success({ title: 'Success', message: res.message ? res.message : 'User deleted successfully!' });
        },
          (error: any) => {
            this.loading = false;
            this.toastr.error({
              message: error.error.message ? error.error.message : 'Something went wrong',
              title: 'Error'
            });
          });
      } else {
        this.loading = false;
      }
    });
  }
}

export interface PeriodicElement {
  id:number;
  name:string;
  email: string;
  phone:number;
  website:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1, name: 'Eric Horton', email:'horton@yahoo.com', phone:234567786, website:'https://dribbble.com/tags'},
  {id:2, name: 'Nichols', email:'Nichols@yahoo.com', phone:564567786, website:'https://dribbble.com/tags/web-ui'},
  {id:3, name: 'Jennie', email:'Jennie@yahoo.com', phone:904567786, website:'https://dribbble.com/tags/web-ui'},
  {id:4, name: 'addison', email:'addison@yahoo.com', phone:784567786, website:'https://dribbble.com/web-ui'},
  {id:5, name: 'Wade', email:'Wade@yahoo.com', phone:576667786, website:'https://dribbble.com'},
  {id:6, name: 'Jorge', email:'Jorge@yahoo.com', phone:234556866, website:'https://dribbble.com'},
  {id:7, name: 'Roberto', email:'Roberto@yahoo.com', phone:234568786, website:'https://dribbble.com'},
  {id:8, name: 'Ramon', email:'Ramon@yahoo.com', phone:234687786, website:'https://dribbble.com/tags/web-ui'},
  {id:9, name: 'Liam', email:'Liam@yahoo.com', phone:234686686, website:'https://dribbble.com/tags/web-ui'},
  {id:10, name: 'Nathaniel', email:'Nathaniel@yahoo.com', phone:265687786, website:'https://dribbble.com'},
  {id:11, name: 'Ethan', email:'Ethan@yahoo.com', phone:2357767786, website:'https://dribbble.com/tags/web'},
  {id:12, name: 'Milton', email:'Milton@yahoo.com', phone:256567786, website:'https://dribbble.com'},
  {id:13, name: 'Glen', email:'Glen@yahoo.com', phone:265666686, website:'https://dribbble.com'},
  {id:14, name: 'Claude', email:'Claude@yahoo.com', phone:256678786, website:'https://dribbble.com/tags'},
  {id:15, name: 'Harvey', email:'Harvey@yahoo.com', phone:265867786, website:'https://dribbble.com/tags/web-ui'},
  {id:16, name: 'Nathaniel', email:'Nathaniel@yahoo.com', phone:234656786, website:'https://dribbble.com'},
  {id:17, name: 'Roberto', email:'Roberto@yahoo.com', phone:23456586, website:'https://dribbble.com'},
];