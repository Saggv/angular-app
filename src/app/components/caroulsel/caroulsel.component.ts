import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroulsel',
  templateUrl: './caroulsel.component.html',
  styleUrls: ['./caroulsel.component.scss']
})
export class CaroulselComponent implements OnInit {
  slides=[
    "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2132180.jpg&fm=jpg",
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-325185.jpg&fm=jpg",
    "https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2922672.jpg&fm=jpg",
    "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?cs=srgb&dl=pexels-pixabay-531321.jpg&fm=jpg",
    "https://images.pexels.com/photos/303024/pexels-photo-303024.jpeg?cs=srgb&dl=pexels-pok-rie-303024.jpg&fm=jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
