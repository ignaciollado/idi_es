import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
    /* this.router.navigateByUrl('https://www.adrbalears.es') */
  }


}
