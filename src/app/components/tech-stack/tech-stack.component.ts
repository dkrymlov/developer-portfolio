import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, NgZone, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { BehaviorSubject } from "rxjs";
import Swiper from "swiper/types/swiper-class";
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styles: [
    `
      .bg-yellow {
        background-color: yellow;
      }
      .transition {
        transition: background 0.25s ease, color 0.25s ease;
      }
      .active-slide {
        background-color: green;
        color: #fff;
      }
      .bg-blue {
        background-color: blue;
        color: #fff;
      }
    `
  ],
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  slides$ = new BehaviorSubject<string[]>(['']);
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}
  ngOnInit() {
    if (innerWidth > 1920){
      this.slidesPerView = 4;
    }else if (innerWidth < 1920 && innerWidth > 1400) {
      this.slidesPerView = 3;
    }else if (innerWidth < 1400 && innerWidth > 950) {
      this.slidesPerView = 2;
    }else if (innerWidth < 950 && innerWidth > 550) {
      this.slidesPerView = 3;
    }else if (innerWidth < 700 && innerWidth > 375) {
      this.slidesPerView = 2;
    }
  }

  getSlides() {
    this.slides$.next(Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`));
  }

  thumbsSwiper: any;
  // @ts-ignore
  setThumbsSwiper(swiper) {
    this.thumbsSwiper = swiper;
  }
  controlledSwiper: any;
  // @ts-ignore
  setControlledSwiper(swiper) {
    this.controlledSwiper = swiper;
  }
  slidesPerView: number = 4;
  pagination: any = false;

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: 'fraction' };
    } else {
      this.pagination = false;
    }
  }

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };

  // @ts-ignore
  breakPointsToggle: boolean;
  breakpointChange() {
    this.breakPointsToggle = !this.breakPointsToggle;
    this.breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
    };
  }

  // @ts-ignore
  onResize(event) {
    console.log(event.target.innerWidth)
    if (event.target.innerWidth > 1920){
      this.slidesPerView = 4;
    }else if (event.target.innerWidth < 1920 && event.target.innerWidth > 1400) {
      this.slidesPerView = 3;
    }else if (event.target.innerWidth < 1400 && event.target.innerWidth > 950) {
      this.slidesPerView = 2;
    }else if (event.target.innerWidth < 950 && event.target.innerWidth > 550) {
      this.slidesPerView = 3;
    }else if (event.target.innerWidth < 700 && event.target.innerWidth > 375) {
      this.slidesPerView = 2;
    }
  }

}
