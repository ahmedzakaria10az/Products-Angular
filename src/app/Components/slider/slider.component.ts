import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider',
  imports: [RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  images: string[] = [
    '1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg'];

  currentIndex = 0;
  interval: any;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  playSlider() {
      this.interval = setInterval(() => this.nextSlide(), 1000);
  }

  stopSlider() {
    clearInterval(this.interval);
    this.interval = null;
  }
}
