import { Component, Input } from '@angular/core';

type Item = {
  id: number,
  name: string,
  age: number,
  image: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input('data')
  data: Item[] = []
}
