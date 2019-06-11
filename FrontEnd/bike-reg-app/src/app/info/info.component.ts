import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { Bike } from '../bike';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private bikeservice: BikeService) { }

  users: Array<Bike>
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.bikeservice.getAllBikes().subscribe(
      (res: Array<Bike>) => {
        this.users = res;
      }
    );
  }

}
