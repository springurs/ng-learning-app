import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ng Learning App';

  onPaginationChange(currentPage: number) {
    console.log('CURRENT PAGE NO - ', currentPage);
  }
}
