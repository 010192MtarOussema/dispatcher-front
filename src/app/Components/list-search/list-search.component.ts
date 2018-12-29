import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HashtagService } from 'src/app/hashtag.service';
import { HashTag } from '../Model/HashTag';


@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {

 
 public hashtags: HashTag[];
  public tagText: String;

  selectedHero: HashTag;

  constructor(private _router: Router, private hashTagService: HashtagService) { }

  ngOnInit() {
  }

  searchTag(tagText: string) {
    this.hashTagService.getTagByText(tagText).subscribe(
      data => {
        this.hashtags = data;      }
    )
  }


}
