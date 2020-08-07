import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IColumnDef } from 'src/app/shared/list/column-def.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getColumnDefs$(): Observable<IColumnDef[]> {
    return of([
      { headerName: 'ID', field: 'id' },
      { headerName: 'Latitude', field: 'latitude' },
      { headerName: 'Longitude', field: 'longitude' }
    ]);
  }
}
