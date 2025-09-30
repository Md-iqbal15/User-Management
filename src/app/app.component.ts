import { Component } from '@angular/core';

// import { UserdetailsComponent } from './usersdetail/userdetails.component';

import { CommonModule } from '@angular/common';
 import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curdOperation';
}
