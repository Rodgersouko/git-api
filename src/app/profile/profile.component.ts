import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { profile } from 'console';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any[];

  constructor(private dataService: DataService) { 
    this.dataService.getdata().subscribe(data => {
      console.log(data); 
      this.data = data;
    });
  }

  ngOnInit(): void {
  }

}
