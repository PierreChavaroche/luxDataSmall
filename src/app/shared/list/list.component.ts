import { Component, OnInit } from '@angular/core';
import { AssetsSelectService } from '../../core/services/assets-select.service';
import { IAsset } from '../asset/asset.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private assetsSelectService: AssetsSelectService) { }

  ngOnInit(): void {
  }

  selectAssets() {
    const assets: IAsset[] = [
      {
        id: '1',
        coordinates: {
          latitude: 1,
          longitude: 1
        }
      },
      {
        id: '2',
        coordinates: {
          latitude: 2,
          longitude: 2
        }
      },
      {
        id: '2',
        coordinates: {
          latitude: 2,
          longitude: 2
        }
      }
    ];

    this.assetsSelectService.add(assets);
  }
}
