import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the YearCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-year-calendar',
  templateUrl: 'year-calendar.html',
})
export class YearCalendarPage {

	months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

	currentDate: Date;
  currentMonth: number;
  currentDay: number;
  currentYear: number;

	/*currentDate = new Date().toISOString();
  currentMonth = new Date().getMonth()+1;
  currentDay = new Date().getDate();*/

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YearCalendarPage');
  }

  ngOnInit(){
  	this.currentDate = new Date();
  	this.currentDay = this.currentDate.getDate();
  	this.currentMonth = this.currentDate.getMonth();
  	this.currentYear = this.currentDate.getFullYear();

  	if ((this.currentYear%4==0) && ((this.currentYear%100!=0) || (this.currentYear%400==0))){
  		this.months[1] = 29;
  	}
  }

  


  counter(i: number) {
    return new Array(i);
	}



}
