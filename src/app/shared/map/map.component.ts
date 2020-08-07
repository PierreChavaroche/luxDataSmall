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

}
