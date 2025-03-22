import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true,
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, words: number = 3): unknown {
    return value.split(' ').slice(0, words).join(' ') + '...';
  }
}
