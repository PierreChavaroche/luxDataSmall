import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IAsset } from 'src/app/shared/asset/asset.interface';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  getData$(): Observable<IAsset[]> {
    return of([
      {
        id: '1',
        latitude: 47.856080,
        longitude: 12.347256
      },
      {
        id: '2',
        latitude: 47.78159808,
        longitude: 12.38982271
      },
      {
        id: '3',
        latitude: 47.79849192,
        longitude: 12.29843048
      }
    ]);
  }
}
