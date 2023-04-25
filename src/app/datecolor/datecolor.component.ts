import { Component, OnInit } from '@angular/core';
import { CommonData } from '../commondata';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datecolor',
  templateUrl: './datecolor.component.html',
  styleUrls: ['./datecolor.component.scss']
})
export class DatecolorComponent implements OnInit {

  Array: CommonData[]=[
    {
    Id:1,
    Name:'Sanket',
    DOB:'04/25/2023',
    Age:'25',
    },
    {
    Id:1,
    Name:'Sanket',
    DOB:'04/26/2023',
    Age:'25',
   
    }, {
    Id:1,
    Name:'Sanket',
    DOB:'04/24/2023',
    Age:'25',
   
    },
    {
    Id:1,
    Name:'Sanket',
    DOB:'21/03/2023',
    Age:'25',
   
    },
    {
    Id:1,
    Name:'Sanket',
    DOB:'11/03/2023',
    Age:'25',
   
    }, {
    Id:1,
    Name:'Sanket',
    DOB:'09/03/2023',
    Age:'25',
   
    }, {
    Id:1,
    Name:'Sanket',
    DOB:'05/03/2023',
    Age:'25',
   
    }, {
    Id:1,
    Name:'Sanket',
    DOB:'04/03/2023',
    Age:'25',
   
    }, {
    Id:1,
    Name:'Sanket',
    DOB:'01/03/2023',
    Age:'25',
   
    }, {
    Id:1,
    Name:'Sanket',
    DOB:'02/03/2023',
    Age:'25',
   
    }, {
    Id:1,
    Name:'Sanket',
    DOB:'04/03/2023',
    Age:'25',
   
    }, {
    Id:1,
    Name:'Sanket',
    DOB:'04/25/2023',
    Age:'25',
   
    }
    ]

      currentDate: Date = new Date();

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

    getColorDate(DOB: string): string{

      const date: Date = new Date(DOB);

  if(date.toDateString() === this.currentDate.toDateString()){
    return 'green';
}else if(date < this.currentDate){
    return 'yellow';
}else {
    return 'red';
}
}


}
