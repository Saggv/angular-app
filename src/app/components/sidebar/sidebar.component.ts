import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  sidebarItems:any[] =[
    {
      header:{
        icon:'add_circle',
        label:'General'
      },
      list:[
        {
          icon:'home',
          label:'Home'
        },
        {
          icon:"favorite",
          label: 'Favorites'
        },
        {
          icon:"pause",
          label: 'Content'
        },
        {
          icon:"playlist_add_check",
          label: 'Playlist'
        },
        {
          icon:"history",
          label: 'History'
        }
      ]
    },
    {
      header:{
        icon:'add_circle',
        label:"Private"
      },
      list:[
        {
          icon:'lock',
          label:'Account'
        },
        {
          icon:'lock',
          label:'Personal'
        }
      ]
    },
    {
      header:{
        icon:'add_circle',
        label:"Public"
      },
      list:[
        {
          icon:'folder',
          label:'Social'
        },
        {
          icon:'folder',
          label:'Dance'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
