import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {

  @Input() routeBack: string = 'home';
  @Input() title: string = 'Página'

  constructor(private router: Router) { }

  ngOnInit() {}

  backPage() {
    this.router.navigateByUrl(this.routeBack);
  }

}
