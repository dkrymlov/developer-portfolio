import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset : number = document.documentElement.scrollTop || document.body.scrollTop || 0;

    //for 1920x1080
    if (innerWidth > 950){
      if (verticalOffset < 610){
        this.backgroundColor = '#e6e7ee'
        this.color = '#4362ce'
      }else if (verticalOffset >= 610 && verticalOffset < 1130){
        this.backgroundColor = '#dce6fd'
        this.color = '#464646'
      }else if (verticalOffset >= 1130 && verticalOffset < 1770){
        this.backgroundColor = '#d4deff'
        this.color = '#08804e'
      }else if (verticalOffset >= 1770 && verticalOffset < 1870){
        this.backgroundColor = '#bdcaff'
        this.color = '#0E2E80FF'
      }
    }

    if (innerWidth < 950 && innerWidth > 800){
      if (verticalOffset < 1240){
        this.backgroundColor = '#e6e7ee'
        this.color = '#4362ce'
      }else if (verticalOffset >= 1240 && verticalOffset < 2200){
        this.backgroundColor = '#dce6fd'
        this.color = '#464646'
      }else if (verticalOffset >= 2200 && verticalOffset < 3444){
        this.backgroundColor = '#d4deff'
        this.color = '#08804e'
      }else if (verticalOffset >= 3444 && verticalOffset < 5000){
        this.backgroundColor = '#bdcaff'
        this.color = '#0E2E80FF'
      }
    }
    if (innerWidth < 800){
      if (verticalOffset < 1860){
        this.backgroundColor = '#e6e7ee'
        this.color = '#4362ce'
      }else if (verticalOffset >= 1860 && verticalOffset < 2763){
        this.backgroundColor = '#dce6fd'
        this.color = '#464646'
      }else if (verticalOffset >= 2763 && verticalOffset < 5192){
        this.backgroundColor = '#d4deff'
        this.color = '#08804e'
      }else if (verticalOffset >= 5192 && verticalOffset < 6000){
        this.backgroundColor = '#bdcaff'
        this.color = '#0E2E80FF'
      }
    }
  }

  backgroundColor : string = ''
  color : string = ''
  constructor() { }

  isMenuOpened : boolean = false
  isAboutActive: boolean = false;
  isSkillsActive: boolean = false;
  isProjectsActive: boolean = false;
  isContactsActive: boolean = false;
  isNameActive: boolean = false;

  ngOnInit(): void {
  }

  menuOpened() {
    if (this.isMenuOpened){
      // @ts-ignore
      document.getElementById('menu').style.height = '0'
      setTimeout(()=>{
        // @ts-ignore
        document.getElementById('about').style.display = 'none'
        // @ts-ignore
        document.getElementById('skills').style.display ='none'
        // @ts-ignore
        document.getElementById('projects').style.display = 'none'
        // @ts-ignore
        document.getElementById('contacts').style.display = 'none'
        // @ts-ignore
        document.getElementById('menu-title').style.display = 'none'
      }, 70)
    }else {
      // @ts-ignore
      document.getElementById('menu').style.height = '400px'
      setTimeout(()=>{
        // @ts-ignore
        document.getElementById('about').style.display = 'flex'
        // @ts-ignore
        document.getElementById('skills').style.display ='flex'
        // @ts-ignore
        document.getElementById('projects').style.display = 'flex'
        // @ts-ignore
        document.getElementById('contacts').style.display = 'flex'
        // @ts-ignore
        document.getElementById('menu-title').style.display = 'flex'
      }, 300)
    }
    this.isMenuOpened = !this.isMenuOpened
    this.isNameActive = false;
  }

  aboutClick() {
    this.isAboutActive = true
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactsActive = false;
    this.isNameActive = false;
  }

  skillsClick() {
    this.isAboutActive = false;
    this.isSkillsActive = true;
    this.isProjectsActive = false;
    this.isContactsActive = false;
    this.isNameActive = false;
  }

  projectsClick() {
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = true;
    this.isContactsActive = false;
    this.isNameActive = false;
  }

  contactsClick() {
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactsActive = true;
    this.isNameActive = false;
  }

  nameClick() {
    this.isAboutActive = false;
    this.isSkillsActive = false;
    this.isProjectsActive = false;
    this.isContactsActive = false;
    this.isNameActive = true;
    setTimeout(()=>{
      this.isNameActive = false;
    }, 1000)
  }


  onMouse(anchor: HTMLAnchorElement) {
    let back = anchor.style.backgroundColor
    anchor.style.backgroundColor = anchor.style.color
    anchor.style.color = back
  }

  onLeave(anchor: HTMLAnchorElement) {
    anchor.style.backgroundColor = '#eeeeee'
    anchor.style.color = this.color
  }

  onMouseEnter(name: HTMLHeadingElement) {
    let back = name.style.backgroundColor
    name.style.backgroundColor = name.style.color
    name.style.color = back
  }

  onMouseLeave(name: HTMLHeadingElement) {
    name.style.backgroundColor = '#eeeeee'
    name.style.color = this.color
  }
}
