import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route: ActivatedRoute,
    private router:Router ) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.params['id'];
    console.log('ID is: '+id);
    // this.server = this.serversService.getServer(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id'])
        }
      )
    if (!this.server) {
      console.error(`Server with ID ${id} not found.`);
    }
  }
  onEdit(){
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
      // queryParams: {allowEdit: '1'}
    });
  }

}
