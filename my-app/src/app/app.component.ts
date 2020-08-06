import { Component, OnInit } from '@angular/core';
import { SpacexService } from './services/spacex.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  years=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  constructor(private spacexService: SpacexService) { }
  ngOnInit(): void {
    this.spacexService.get().subscribe((res: any) => {
      this.data=res
      console.log(this.data)
    })
  }
  getYear(year){
    this.spacexService.getByYear(year).subscribe((res:any)=>{
      console.log(res)
      this.data=res
    })
  }
  getLanding(bo){
    console.log(bo)
  }
}
