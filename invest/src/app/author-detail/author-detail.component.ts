import { Author } from './../authors';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})

export class AuthorDetailComponent implements OnInit{

  @Input() author?: Author;

  @Output() authorSelect: EventEmitter<Author>;
  @Output() deleteAuthor: EventEmitter<Author>;

  constructor() {
    this.authorSelect = new EventEmitter<Author>();
    this.authorSelect = new EventEmitter<Author>();
    this.deleteAuthor = new EventEmitter<Author>();
   }

  ngOnInit(): void {
    this.authorSelect = new EventEmitter<Author>();
  }
  handleSelect(): void{
    // @ts-ignore
    this.authorSelect.emit(this.author);
  }

  handleDelete(): void{
    // @ts-ignore
    this.deleteAuthor.emit(this.author);
  }

}
