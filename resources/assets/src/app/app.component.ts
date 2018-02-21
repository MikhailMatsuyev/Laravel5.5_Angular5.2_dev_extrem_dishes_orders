import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
          <div class="row">
              <div class="col-sm">
              <h1 class="text-center">{{title}}</h1>
              <nav class="text-center">
                <a routerLink="/orders" routerLinkActive="active">Заказы</a>
                <a routerLink="/createorder" routerLinkActive="active">Создать новый заказ</a>
              </nav>
              </div>
          </div>
      </div>    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Расчет стоимости блюд в заказе!';
}
