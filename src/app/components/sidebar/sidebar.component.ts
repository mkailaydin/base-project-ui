import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  exit() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      this.toastrService.error("Çıkış yapıldı.")
    }


  }
}
