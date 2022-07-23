import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputVal = 0;
  generateBtns = false;
  TheLuckyButton = 0;
  isLucky = -1;

  checkBtnForClick() {
    this.generateBtns = true;
  }

  getTheLuckyButton(num: number) {
    this.TheLuckyButton = Math.floor(Math.random() * num);
  }

  checkIfLuckyBtn(index: number) {
    if (index === this.TheLuckyButton) {
      this.isLucky = index;
    }
  }

  reloadPage() {
    window.location.reload();
 }
}
