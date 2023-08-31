import { Component } from '@angular/core';
import {CustomCapitalize} from "../pipes/custom-capitalize.pipe";
import {CustomDate} from "../pipes/custom-date.pipe";
import {RacesDataService} from '../services/races/races-data.service'
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  constructor(private racesData: RacesDataService, private readonly router: Router, private auth: AuthService) {}

  raceDetail: any = {};
  raceIndex: any = null;
  public editRaceForm!: FormGroup;
  public addRaceForm!: FormGroup;
  customCapitalize = new CustomCapitalize();
  customDate = new CustomDate();

  public isUserConnected(): boolean {
    if(!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  public getRaces(): any[] {
    if(this.isUserConnected()){
      return this.racesData.getRacesData().map(race => ({ date: race.date, name: race.name }));
    }
    return [];
  }

  public getRaceDetail(id: number): void {
    if (this.isUserConnected()) {
      this.raceDetail = this.racesData.getRacesData()[id];
      this.raceIndex = id;

      console.log('this.raceDetail', this.raceDetail)

      this.editRaceForm = new FormGroup({
        name: new FormControl(this.customCapitalize.transform(this.raceDetail.name), Validators.required),
        date: new FormControl(this.customDate.transform(this.raceDetail.date), Validators.required),
      });
    }
  }

  public deleteRace(): void {
    if (this.isUserConnected()) {
      this.racesData.deleteRace(this.raceIndex);
      this.raceDetail = {};
      this.raceIndex = null;
    }
  }

  public nullRaceDetail(): void {
    if (this.isUserConnected()) {
      this.raceDetail = {};
      this.raceIndex = null;
      this.initAddRaceForm()
    }
  }

  public onSubmit(type: string): void {
    if(type === 'editRaceForm') {
      const name = this.editRaceForm.get('name')!.value;
      //check if date is a valid date
      const date = this.editRaceForm.get('date')!.value;
      //transform dd/mm/yyyy to yyyy-mm-dd
      const dateArray = date.split('/');
      const dateTransformed = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];

      this.raceDetail.name = name;
      this.raceDetail.date = new Date(dateTransformed);
    } else if (type === 'addRaceForm') {
      const name = this.addRaceForm.get('name')!.value;
      const attendees = this.addRaceForm.get('attendees')!.value;
      //check if date is a valid date
      const date = this.addRaceForm.get('date')!.value;
      //transform dd/mm/yyyy to yyyy-mm-dd
      const dateArray = date.split('/');
      const dateTransformed = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];

      this.racesData.addRace({name: name, date: new Date(dateTransformed), ponies: attendees.split(',').map((attendee: string) => ({name: attendee, winner: false}))});
      this.initAddRaceForm()
    }
  }

  public ngOnInit(): void {
    this.initAddRaceForm()
  }

  public initAddRaceForm(): void {
    this.addRaceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      attendees: new FormControl('', Validators.required),
    });
  }

  protected readonly Object = Object;
}
