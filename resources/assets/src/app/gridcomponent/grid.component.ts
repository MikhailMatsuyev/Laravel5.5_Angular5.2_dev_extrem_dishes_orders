import { Component, OnInit } from '@angular/core';
// import { GridService } from './grid.service';
import { Service, Employee, State } from './grid.service';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';


@Component({
  selector: 'app-gridcomponent',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [Service]
})

export class GridComponent {
    dataSource: Employee[];
    states: State[];
    events: Array<string> = [];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }

    logEvent(eventName) {
        this.events.unshift(eventName);
    }

    clearEvents() {
        this.events = [];
    }
}