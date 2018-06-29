import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string>= new  EventEmitter<string>();
  ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
  }

  onClick(): void{
      console.log(`The rating ${this.rating} was clicked!`);
      this.notify.emit(`The rating ${this.rating} was clicked!`);
  }

}