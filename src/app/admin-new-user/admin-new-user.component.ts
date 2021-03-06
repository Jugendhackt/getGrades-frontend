import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {Router} from "@angular/router";

declare let $: any;
declare let CryptoJS: any;

@Component({
  selector: 'app-admin-new-user',
  templateUrl: './admin-new-user.component.html',
  styleUrls: ['./admin-new-user.component.scss']
})
export class AdminNewUserComponent implements OnInit {
  private email: String;
  private password: String;
  private name: String;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
    });
  }
  newUser() {
    var group = $('#group').find('option:selected').val();
    this.adminService.newUser(this.email, "abc", this.name, group).then((res) => {
      this.router.navigate(['/admin']);
    })
  }

}
