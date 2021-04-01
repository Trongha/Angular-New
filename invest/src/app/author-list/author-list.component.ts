import {Component, OnInit} from '@angular/core';
import {authors, Author} from '../authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentName = authors[0].firstName;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAuthorSelect(author: Author): void {
    this.currentName = author.firstName;
  }


}
