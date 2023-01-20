import { Component, OnInit } from '@angular/core';

//Model
import { Investments } from '../../model/investments';
import { ListInvestmentsService } from '../../services/list-investments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  public investments!: Array<Investments> 
  constructor(private listInvestmentsService : ListInvestmentsService){}

  ngOnInit(): void {
    this.listInvestmentsService
    .list()
    .subscribe(res => (this.investments = res));
    //.subscribe({ next: res => (console.log(res))})
  }
}
