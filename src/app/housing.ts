
import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  url = 'http://localhost:53499/locations';


  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocationInfo | undefined> {
    const locations = await this.getAllHousingLocations();

    return locations.find(
      (location) => Number(location.id) === id
    );
  }
}

