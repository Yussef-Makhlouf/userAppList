import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ UserCardComponent, ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {


}
