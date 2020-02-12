import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {AuthenticationService} from '@app/services/auth';
import {UserModel} from '@app/models/shared';


@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent implements OnInit, OnDestroy {
  menuItems = [
    {
      text: 'Profile',
      icon: 'user'
    },
    {
      text: 'Logout',
      icon: 'runner',
      onClick: () => {
        this.authService.logout();
      }
    }
  ];

  currentUser: UserModel = new UserModel();
  subscription: Subscription = new Subscription();

  isOpenMenu: boolean = false;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.subscription.add(this.authService.currentUser.subscribe((user) => {
      this.currentUser = user;
    }));
  }

  toggleContextMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
