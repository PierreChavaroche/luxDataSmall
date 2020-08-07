import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AssetsSelectService } from 'src/app/core/services/assets-select.service';
import { Observable } from 'rxjs';
import { IAsset } from '../asset/asset.interface';
import { AssetService } from 'src/app/core/services/asset.service';
import { filter, map, take, tap } from 'rxjs/operators';
import { defaults as defaultControls } from 'ol/control';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';

@Component({
  selector: 'app-map-shared',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  selectedAssets$: Observable<IAsset[]>;
  map: Map;

  constructor(private assetService: AssetService, private assetsSelectService: AssetsSelectService) { }

  ngOnInit(): void {
    this.selectedAssets$ = this.assetsSelectService.selected$;
  }

  ngAfterViewInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [813079.7791264898, 5929220.284081122],
        zoom: 7
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            813079.7791264898, 5929220.284081122,
            848966.9639063801, 5936863.986909639
          ]
        })
      ])
    });
  }

  async selectAssets() {
    await this.assetService.getData$().pipe(
      map(assets => assets.filter(asset => asset.id === '2' || asset.id === '3')),
      tap(assets => this.assetsSelectService.add(assets)),
      take(1)
    ).toPromise();
  }
}
