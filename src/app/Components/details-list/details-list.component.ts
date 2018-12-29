import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HashTag } from '../Model/HashTag';
import { HashtagService } from 'src/app/hashtag.service';


@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {


  hashtag: HashTag;

  constructor(private route: ActivatedRoute, private heroService: HashtagService) {}

  ngOnInit() {
    this.getTagDetail()
  }

  getTagDetail(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getTagById(id.toString().substring(0, 16))

      .subscribe(hero => {
      this.hashtag = hero
        console.log(id.toString().substring(0, 16))

      });

  }

}
