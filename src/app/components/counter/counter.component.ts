import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {

  @Input() value: number = 0;

  @Output() change: EventEmitter<-1 | 1> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.change.emit(1);
  }

  decrement() {
    this.change.emit(-1);
  }

}
