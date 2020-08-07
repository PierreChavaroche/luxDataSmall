import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IAsset } from '../../shared/asset/asset.interface';

@Injectable({
  providedIn: 'root'
})
export class AssetsSelectService {
  private selectedSource: Subject<IAsset[]> = new Subject();
  private selected: IAsset[] = [];
  selected$: Observable<IAsset[]>

  constructor() {
    this.selected$ = this.selectedSource.asObservable();
  }

  add(assets: IAsset[]) {
    if (assets && assets.length) {
      this.selected.push(...assets);
      this.broadcast();
    }
  }

  remove(assets: IAsset[]) {
    if (assets && assets.length) {
      this.selected = this.selected.filter(selectedAsset =>
        !assets.find(assetToRemove => assetToRemove.id === selectedAsset.id)
      );
      
      this.broadcast();
    }
  }

  reset() {
    this.selected.length = 0;
    this.broadcast();
  }

  private broadcast() {
    this.selectedSource.next(this.selected);
  }
}
