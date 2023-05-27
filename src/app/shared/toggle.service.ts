import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }

  //declare a value for the state of toggle
  toggleState: boolean;

  //set function for toggle-state
  setState(state: boolean) {
    this.toggleState = state;
  }

  //get function for toggle-state
  getState() {
    return this.toggleState;
  }
}
