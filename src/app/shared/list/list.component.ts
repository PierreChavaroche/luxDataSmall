import { Component, OnInit } from '@angular/core';
import { AssetsSelectService } from '../../core/services/assets-select.service';
import { AssetService } from '../../core/services/asset.service';
import { SettingsService } from '../../core/services/settings.service';
import { IAsset } from '../asset/asset.interface';
import { IColumnDef } from './column-def.interface';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  selectedAssets$: Observable<IAsset[]>;

  data$: Observable<{
    assets: IAsset[],
    columnDefs: IColumnDef[]
  }>;

  constructor(private assetService: AssetService, private settingsService: SettingsService,
    private assetsSelectService: AssetsSelectService) { }

  ngOnInit(): void {
    this.selectedAssets$ = this.assetsSelectService.selected$;

    this.data$ = combineLatest([
      this.assetService.getData$(),
      this.settingsService.getColumnDefs$()
    ]).pipe(
      map(([assets, columnDefs]) => {
        return {
          assets,
          columnDefs
        }
      })
    )
  }

  selectAssets() {
    const assets: IAsset[] = [

    ];

    this.assetsSelectService.add(assets);
  }
}
