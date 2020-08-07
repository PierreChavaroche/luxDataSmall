import { Component, OnInit, ViewChild } from '@angular/core';
import { AssetsSelectService } from '../../core/services/assets-select.service';
import { AssetService } from '../../core/services/asset.service';
import { SettingsService } from '../../core/services/settings.service';
import { IAsset } from '../asset/asset.interface';
import { IColumnDef } from './column-def.interface';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgGridAngular } from 'ag-grid-angular';

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

  @ViewChild('agGrid') private agGrid: AgGridAngular;
  private gridParams;

  constructor(private assetService: AssetService, private settingsService: SettingsService,
    private assetsSelectService: AssetsSelectService) { }

  ngOnInit(): void {
    this.selectedAssets$ = this.assetsSelectService.selected$.pipe(

    );

    this.data$ = combineLatest([
      this.assetService.getData$(),
      this.settingsService.getColumnDefs$(),
      this.selectedAssets$
    ]).pipe(
      map(([assets, columnDefs, selectedAssets]) => {
        if (selectedAssets && this.gridParams) {
          this.gridParams.api.forEachNode(node => {
            if (node) {
              if (node.data && node.data.id && selectedAssets.find((selectedAsset) => selectedAsset.id === node.data.id)) {
                node.setSelected(true);
              } else {
                node.setSelected(false);
              }
            }
          });
        }

        return {
          assets,
          columnDefs
        }
      })
    )
  }

  onReady(params) {
    params.api.sizeColumnsToFit();
    this.gridParams = params;
  }

  selectAssets() {
    const assets: IAsset[] = this.getSelectedRows();

    if (assets && assets.length) {
      this.assetsSelectService.add(assets);
    } else {
      alert(`Es wurde nicht selektiert`);
    }
  }

  getSelectedRows(): IAsset[] {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data as IAsset);

    return selectedData;
  }
}
