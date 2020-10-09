import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  content:any[]=[
    {
      title: 'Trending',
      list: [
        {
          image: 'https://images.pexels.com/photos/5244261/pexels-photo-5244261.jpeg?cs=srgb&dl=pexels-daniel-torobekov-5244261.jpg&fm=jpg',
          title: 'Flying plane air travel',
          author: 'By Jame',
          time: '15k views | 1 hour ago'
        },
        {
          image: 'https://images.pexels.com/photos/4199722/pexels-photo-4199722.jpeg?cs=srgb&dl=pexels-vova-krasilnikov-4199722.jpg&fm=jpg',
          title: 'Flying plane air travel',
          author: 'By Jame',
          time: '15k views | 1 hour ago'
        },
        {
          image: 'https://images.pexels.com/photos/4752735/pexels-photo-4752735.jpeg?cs=srgb&dl=pexels-emre-kuzu-4752735.jpg&fm=jpg',
          title: 'Flying plane air travel',
          author: 'By Jame',
          time: '15k views | 1 hour ago'
        },
        {
          image: 'https://images.pexels.com/photos/4055160/pexels-photo-4055160.jpeg?cs=srgb&dl=pexels-vlad-fonsark-4055160.jpg&fm=jpg',
          title: 'Flying plane air travel',
          author: 'By Jame',
          time: '15k views | 1 hour ago'
        }
      ]
    },
    {
      title: 'Publish',
      list: [
        {
          image: 'https://images.pexels.com/photos/5010928/pexels-photo-5010928.jpeg?cs=srgb&dl=pexels-harry-cunningham-harrydigital-5010928.jpg&fm=jpg',
          title: 'Flying plane air travel',
          author: 'By Jame',
          time: '15k views | 1 hour ago'
        },
        {
          image: 'https://images.pexels.com/photos/4674350/pexels-photo-4674350.jpeg?cs=srgb&dl=pexels-ekaterina-belinskaya-4674350.jpg&fm=jpg',
          title: 'Flying plane air travel',
          author: 'By Jame',
          time: '15k views | 1 hour ago'
        },
        {
          image: 'https://images.pexels.com/photos/1122857/pexels-photo-1122857.jpeg?cs=srgb&dl=pexels-annam-w-1122857.jpg&fm=jpg',
          title: 'Flying plane air travel',
          author: 'By Jame',
          time: '15k views | 1 hour ago'
        },
        {
          image: 'https://images.pexels.com/photos/4055801/pexels-photo-4055801.jpeg?cs=srgb&dl=pexels-petr-ganaj-4055801.jpg&fm=jpg',
          title: 'Flying plane air travel',
          author: 'By Jame',
          time: '15k views | 1 hour ago'
        }
      ]
    }
  ]
}
