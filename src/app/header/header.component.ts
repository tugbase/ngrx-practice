import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: no-empty
  constructor(private recipeStoreService: DataStorageService) { }

  // tslint:disable-next-line: no-empty
  ngOnInit(): void {
  }
  onSaveData(){
    this.recipeStoreService.storeRecipes();
  }

  onFetchData(){
    this.recipeStoreService.fetchRecipes().subscribe();
  }
}
