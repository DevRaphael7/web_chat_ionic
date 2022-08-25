import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaxeUxReduxService } from 'src/app/services/ngrx/interfaxe-ux-redux.service';

@Component({
  selector: 'app-spinner-component',
  templateUrl: './spinner-component.component.html',
  styleUrls: ['./spinner-component.component.css']
})
export class SpinnerComponentComponent {

  spinnerState: Observable<boolean>;

  constructor(private interfaceUxRedux: InterfaxeUxReduxService) { 
    this.spinnerState = interfaceUxRedux.getSpinnerState();
  }

}
