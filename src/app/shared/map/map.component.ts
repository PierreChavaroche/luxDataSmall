import { Component, OnInit } from '@angular/core';
import { AssetsSelectService } from 'src/app/core/services/assets-select.service';
import { Observable } from 'rxjs';
import { IAsset } from '../asset/asset.interface';
import { AssetService } from 'src/app/core/services/asset.service';
import { filter, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-map-shared',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  selectedAssets$: Observable<IAsset[]>;

  constructor(private assetService: AssetService, private assetsSelectService: AssetsSelectService) { }

  ngOnInit(): void {
    this.selectedAssets$ = this.assetsSelectService.selected$;
  }

  async selectAssets() {
    await this.assetService.getData$().pipe(
      map(assets => assets.filter(asset => asset.id === '2' || asset.id === '3')),
      tap(assets => this.assetsSelectService.add(assets)),
      take(1)
    ).toPromise();
  }
}
