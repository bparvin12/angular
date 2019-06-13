import { Component, Input } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  //has an alias
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    //updates the number of likes
    //if this isActive (if the like count is already liked) then add a -1. otherwise add +1
    this.likesCount += (this.isActive) ? -1 : 1;
    //toggles the active field
    this.isActive = !this.isActive;
  }
}
