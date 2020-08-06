import { Component, OnInit } from '@angular/core';
import { SpacexService } from './services/spacex.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private spacexService: SpacexService) { }
  ngOnInit(): void {
    this.spacexService.get().subscribe((res: any) => {
      console.log("----inside the calls")
      this.data=res
      console.log(this.data)
    })
  }
  title = 'my-app';
}
