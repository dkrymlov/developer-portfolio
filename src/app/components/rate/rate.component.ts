import { Component, OnInit } from '@angular/core';
import {RatesService} from "../../services/rates.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  constructor(private rateService : RatesService) { }

  rated = localStorage.getItem('rated')

  rating : number = 0;

  text: string = ''

  btnpressed : boolean = false;

  ngOnInit(): void {

  }

  onFirstStar() {
    // @ts-ignore
    document.getElementById('star1').style.fill = '#ffd000';
  }

  onSecondStar() {
    // @ts-ignore
    document.getElementById('star1').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star2').style.fill = '#ffd000';
  }

  onThirdStar() {
    // @ts-ignore
    document.getElementById('star1').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star2').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star3').style.fill = '#ffd000';
  }

  onFourthStar() {
    // @ts-ignore
    document.getElementById('star1').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star2').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star3').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star4').style.fill = '#ffd000';
  }

  onFifthStar() {
    // @ts-ignore
    document.getElementById('star1').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star2').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star3').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star4').style.fill = '#ffd000';
    // @ts-ignore
    document.getElementById('star5').style.fill = '#ffd000';
  }

  onLeave() {
    // @ts-ignore
    this.getState()
  }

  getState(){
    if (this.rating == 0){
      // @ts-ignore
      document.getElementById('star1').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star2').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star3').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star4').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star5').style.fill = '#fff7dd';
    }else if (this.rating == 1){
      // @ts-ignore
      document.getElementById('star1').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star2').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star3').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star4').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star5').style.fill = '#fff7dd';
    }else if (this.rating == 2){
// @ts-ignore
      document.getElementById('star1').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star2').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star3').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star4').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star5').style.fill = '#fff7dd';
    }else if (this.rating == 3){
// @ts-ignore
      document.getElementById('star1').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star2').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star3').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star4').style.fill = '#fff7dd';
      // @ts-ignore
      document.getElementById('star5').style.fill = '#fff7dd';
    }else if (this.rating == 4){
// @ts-ignore
      document.getElementById('star1').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star2').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star3').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star4').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star5').style.fill = '#fff7dd';
    }else if (this.rating == 5){
// @ts-ignore
      document.getElementById('star1').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star2').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star3').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star4').style.fill = '#ffd000';
      // @ts-ignore
      document.getElementById('star5').style.fill = '#ffd000';
    }
  }


  submitForm(review: HTMLTextAreaElement) {
    if (this.rating == 0){
      // @ts-ignore
      document.getElementById('btn-rate').innerText = 'Select rating first!'
      this.btnpressed = true
      setTimeout(()=>{
        this.btnpressed = false
        // @ts-ignore
        document.getElementById('btn-rate').innerText = 'Submit'
      }, 1500)
    }else{
      let value = review.value ? review.value : " "
      this.btnpressed = true
      // @ts-ignore
      document.getElementById('btn-rate').innerText = 'Success!'
      this.rateService.writeRate(this.rating, value)

      setTimeout(()=>{
        this.btnpressed = false
        this.rated = localStorage.getItem('rated')
        // @ts-ignore
        document.getElementById('btn-rate').innerText = 'Submit'
        this.rating = 0
        review.value = ''
      }, 1500)
    }
  }
}
