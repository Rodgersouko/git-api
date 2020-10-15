import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { profile } from 'console';
// import { profile } from 'console';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any[];
  profile: Object;

  constructor(private dataService: DataService) { 
    this.dataService.getdata().subscribe(profile => {
      //console.log(profile); 
      this.profile = profile;
    });
  }

  ngOnInit(): void {
  }

}
