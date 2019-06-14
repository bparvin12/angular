import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'second-new-course-form',
  templateUrl: './second-new-course-form.component.html',
  styleUrls: ['./second-new-course-form.component.css']
})
export class SecondNewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value='';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index)
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
