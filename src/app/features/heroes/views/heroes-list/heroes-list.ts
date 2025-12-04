import { Component, inject, signal } from '@angular/core';
import { HeroeService } from '@app/features/heroes/services/heroe.service';
import { Spinner } from '@app/shared/components/spinner/spinner';
import { Table } from '@app/shared/components/table/table';
import { AngularModule } from '@app/shared/modules';
import { Heroe } from '@app/features/heroes/domain/heroe-api.interface';
import { MatTableDataSource } from '@angular/material/table';
import { KeysTable, OptionsTable } from '@app/core/interfaces/table-component.interface';

@Component({
  selector: 'app-heroes-list',
  imports: [AngularModule, Table, Spinner],
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.scss',
})
export class HeroesList {
  private _heroeService = inject(HeroeService);

  isLoadingTable = signal(true);
  existError = signal(false);

  keyHeaderColumns: string[] = ['id', 'name', 'publisher', 'actionsTable'];
  optionsColumns: KeysTable = {
    id: {
      labelHeader: '#',
    },
    name: {
      labelHeader: 'Nombre',
    },
    publisher: {
      labelHeader: 'Editorial',
      labelValue: 'biography.publisher',
    },
    actionsTable: {
      labelHeader: '',
    }
  }
  optionsTable: OptionsTable = {
    actionsTable: {
      showAction: {
        iconAction: 'preview',
      },
    },
    emptyTable: {
      title: 'Aún no tienes heroes',
      subtitle: 'No se entontraron heroes para mostrar',
    },
    paginator: {
      length: 0,
      pageSize: 10,
      pageIndex: 0,
      perPage: [10, 20, 50, 100],
    },
    isLoadingContent: false,
  }
  dataSource = new MatTableDataSource<Heroe>();

  ngOnInit() {
    this.getAll();
  }

  getAll({ size, page } = { size: 10, page: 1 }) {
    this._heroeService.getAll({ size, page }).subscribe({
      next: (response) => {
        if(!response || !response?.items.length) {
          this.existError.set(true);
          this.isLoadingTable.set(false);
          return;
        }

        this.optionsTable.paginator = {
          length: response.length || 0,
          pageSize: response.size || 10,
          pageIndex: response.page - 1 || 0,
          perPage: [10, 20, 50, 100],
        }
        this.dataSource.data = response.items || [];
        this.existError.set(false);
        this.optionsTable.isLoadingContent = false;
        this.isLoadingTable.set(false);
      },
      error: (error) => {
        console.log(error);
        this.existError.set(true);
        this.optionsTable.isLoadingContent = false;
        this.isLoadingTable.set(false);
      }
    });
  }

  onChangePages(event: { pageIndex: number; pageSize: number; length: number, previousPageIndex: number; }) {
    this.optionsTable.isLoadingContent = true;
    this.getAll({ size: event.pageSize, page: event.pageIndex + 1 });
  }

  goToDetail(event: Heroe) {
    console.log(event);
  }
  
}
