import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list:any[] = []

  constructor(public navCtrl: NavController) {
    this.list.push({
      name: 'Nacho'
    })
    this.list.push({
      name: 'Raquel'
    })
    this.list.push({
      name: 'Alex'
    })
    this.list.push({
      name: 'Irene'
    })
  }
  goToUsersPage() {
    this.navCtrl.push(UsersPage)
  }

}
