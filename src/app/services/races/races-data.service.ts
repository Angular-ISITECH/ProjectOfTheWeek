import { Injectable } from '@angular/core';

interface Race {
  name: string;
  ponies?: { name: string, winner?: boolean }[];
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class RacesDataService {
  private racesData: Race[] = [
    {
      name: 'Grand prix de Paris',
      ponies: [
        {
          name: 'Gentle Pie',
          winner: true,
        },
        {
          name: 'Big Soda',
          winner: false,
        },
        {
          name: 'Gentle Bottle',
          winner: false,
        }
      ],
      date: new Date('2023-08-29'),
    },
    {
      name: 'Grand prix de Lyon',
      ponies: [
        {
          name: 'Gentle Pie',
          winner: false,
        },
        {
          name: 'Big Soda',
          winner: false,
        },
        {
          name: 'Gentle Bottle',
          winner: false,
        },
        {
          name: 'Superb Whiskey',
          winner: false,
        }
      ],
      date: new Date('2023-09-04'),
    },
    {
      name: 'Grand prix de Tokyo',
      ponies: [
        {
          name: 'Fast Rainbow',
          winner: false,
        },
        {
          name: 'Little Tornado',
          winner: false,
        },
        {
          name: 'Stormy Rainbow',
          winner: false,
        },
        {
          name: 'Magic Rainbow',
          winner: false,
        },
        {
          name: 'Superb Whiskey',
          winner: false,
        }
      ],
      date: new Date('2023-09-11'),
    },
    {
      name: 'Grand prix de Sydney',
      ponies: [
        {
          name: 'Big Soda',
          winner: false,
        },
        {
          name: 'Mystic Rainbow',
          winner: false,
        },
        {
          name: 'Magic Rainbow',
          winner: false,
        },
        {
          name: 'Superb Whiskey',
          winner: false,
        }
      ],
      date: new Date('2023-09-23'),
    },
    {
      name: 'Grand prix de Casablanca',
      ponies: [
        {
          name: 'Gentle Pie',
          winner: false,
        },
        {
          name: 'Little Tornado',
          winner: false,
        },
        {
          name: 'Superb Whiskey',
          winner: false,
        },
        {
          name: 'Fast Rainbow',
          winner: false,
        }
      ],
      date: new Date('2023-09-30'),
    }
  ];

  getRacesData(): any[] {
    return this.racesData;
  }

  deleteRace(id: number): void {
    this.racesData.splice(id, 1);
  }

  addRace(raceData: { name: string, date: Date, ponies: [] }): void {
    this.racesData.push({
      name: raceData.name,
      date: raceData.date,
      ponies: raceData.ponies,
    });
  }
}
