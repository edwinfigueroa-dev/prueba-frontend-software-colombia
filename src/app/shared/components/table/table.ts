import { Component, EventEmitter, Input, OnInit, output, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AngularModule } from '@app/shared/modules';
import { Spinner } from '@app/shared/components/spinner/spinner';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

// Pipes
import { CapitalizeFirstLetterPipe } from '@app/shared/pipes/capitalize-first-letter.pipe';
import { OptionsTable } from '@app/core/interfaces/table-component.interface';

@Component({
  selector: 'app-table',
  imports: [
    AngularModule,
    Spinner,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    CapitalizeFirstLetterPipe,
  ],
  templateUrl: './table.html',
  styleUrls: ['./table.scss'],
})
export class Table {

  @Input() currentItem: any = null;

  @Input() keyHeaderColumns: string[] = [];
  @Input() optionsColumns!: any;
  @Input() optionsTable: OptionsTable = {
    actionsTable: {},
    emptyTable: { title: '', subtitle: '' },
    paginator: { perPage: [5, 10, 25], length: 0, pageSize: 10, pageIndex: 0 },
    isLoadingContent: false,
  };
  @Input() dataSource!: MatTableDataSource<any>;

  onAction = output<any>();
  onPage = output<any>();

  // EVENTS *********************************************
  onActionEvent(element: any) {
    this.onAction.emit(element);
  }

  onPageEvent(element: any) {
    this.onPage.emit(element);
  }

  // FUNTIONS *******************************************
  getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }
}
