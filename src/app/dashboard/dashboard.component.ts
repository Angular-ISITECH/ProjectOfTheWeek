import {Component} from '@angular/core';
import {CustomCapitalize} from "../pipes/custom-capitalize.pipe";
import {RacesDataService} from '../services/races/races-data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private racesData: RacesDataService) {}

  public getUpcomingRaces(): any[] {
    return this.racesData.getRacesData()
      .filter(race => race.date.getTime() > new Date().getTime())
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 3);
  }

  protected readonly CustomCapitalize = CustomCapitalize;
}
