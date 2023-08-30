import { Injectable } from '@angular/core';

interface Race {
  name: string;
  ponies: { name: string }[];
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
        },
        {
          name: 'Big Soda',
        },
        {
          name: 'Gentle Bottle',
        }
      ],
      date: new Date('2023-09-02'),
    },
    {
      name: 'Grand prix de Lyon',
      ponies: [
        {
          name: 'Gentle Pie',
        },
        {
          name: 'Big Soda',
        },
        {
          name: 'Gentle Bottle',
        },
        {
          name: 'Superb Whiskey',
        }
      ],
      date: new Date('2023-09-04'),
    },
    {
      name: 'Grand prix de Tokyo',
      ponies: [
        {
          name: 'Fast Rainbow',
        },
        {
          name: 'Little Tornado',
        },
        {
          name: 'Stormy Rainbow',
        },
        {
          name: 'Magic Rainbow',
        },
        {
          name: 'Superb Whiskey',
        }
      ],
      date: new Date('2023-09-11'),
    },
    {
      name: 'Grand prix de Sydney',
      ponies: [
        {
          name: 'Big Soda',
        },
        {
          name: 'Mystic Rainbow',
        },
        {
          name: 'Magic Rainbow',
        },
        {
          name: 'Superb Whiskey',
        }
      ],
      date: new Date('2023-09-23'),
    },
    {
      name: 'Grand prix de Casablanca',
      ponies: [
        {
          name: 'Gentle Pie',
        },
        {
          name: 'Little Tornado',
        },
        {
          name: 'Superb Whiskey',
        },
        {
          name: 'Fast Rainbow',
        }
      ],
      date: new Date('2023-09-30'),
    }
  ];

  getRacesData(): any[] {
    return this.racesData;
  }
}
