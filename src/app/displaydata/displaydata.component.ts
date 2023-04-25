import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss']
})
export class DisplaydataComponent implements OnInit {

  id: number;
  email: any;
  first_name: string;
  last_name: string;
  avatar: any;

  


  constructor(private getDataService: GetdataService) { }

  ngOnInit(): void {}


    displayTableData(){
      this.getDataService.getData();

  }

}
