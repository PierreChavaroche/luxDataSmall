import { Component, OnInit } from '@angular/core';
import { AssetsSelectService } from 'src/app/core/services/assets-select.service';
import { Observable } from 'rxjs';
import { IAsset } from '../asset/asset.interface';

@Component({
  selector: 'app-map-shared',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  selectedAssets$: Observable<IAsset[]>;

  constructor(private assetsSelectService: AssetsSelectService) { }

  ngOnInit(): void {
    this.selectedAssets$ = this.assetsSelectService.selected$;
  }

  selectAssets() {
    const assets: IAsset[] = [
      {
        id: '4',
        coordinates: {
          latitude: 4,
          longitude: 4
        }
      },
      {
        id: '5',
        coordinates: {
          latitude: 5,
          longitude: 5
        }
      },
      {
        id: '6',
        coordinates: {
          latitude: 6,
          longitude: 6
        }
      }
    ];

    this.assetsSelectService.add(assets);
  }
}
