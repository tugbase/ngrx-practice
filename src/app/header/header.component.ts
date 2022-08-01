import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected= new EventEmitter<string>();
  // tslint:disable-next-line: no-empty
  constructor() { }

  // tslint:disable-next-line: no-empty
  ngOnInit(): void {
  }

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

}
