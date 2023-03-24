import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Rate} from "../models/Rate";

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private store : AngularFirestore) {
  }

  ratesPath : string = 'rates'
  writeRate(rating: number, message: string) {
      this.store.collection(this.ratesPath).add({rating : rating, message : message}).then()
  }

}
