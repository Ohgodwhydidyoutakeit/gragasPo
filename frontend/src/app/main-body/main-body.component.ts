import { Component, OnInit } from '@angular/core';
import { GragasApiService, IApiReponse } from '../gragas-api.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  videos: IApiReponse[] = []
  constructor(public gragasApiService: GragasApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData = () => {
    this.gragasApiService.getData().subscribe(observer => {
      console.log(observer)
      this.videos = observer
    })
  }

}
