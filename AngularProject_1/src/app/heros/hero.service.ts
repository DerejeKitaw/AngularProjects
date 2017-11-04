import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  private _heroURL="./api/hero/heros.json";
  constructor() { }

}
