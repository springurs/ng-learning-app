import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.css']
})
export class SignalsDemoComponent {
  counter = signal(0);
  multiplier = signal(2);
  result = computed(() => this.counter() * this.multiplier());

  constructor() {
    effect(() => {
      console.log('Counter changed:', this.counter());
      console.log('Result updated:', this.result());
    });
  }

  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => Math.max(0, value - 1));
  }

  reset() {
    this.counter.set(0);
  }

  changeMultiplier(newMultiplier: number) {
    this.multiplier.set(newMultiplier);
  }
}
