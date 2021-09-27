import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fom-search',
  templateUrl: './fom-search.component.html',
  styleUrls: ['./fom-search.component.scss']
})
export class FomSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(value: string){
    console.log('Buscar=', value)

      if(value && value.length > 3){
        this.router.navigate(['/character-list'],
        {queryParams: {q: value}}
        )
      }
  }

}
