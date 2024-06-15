import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor(private router:Router, private route:ActivatedRoute, private authService: AuthService){

  }


  irHome():void{

    this.router.navigate(["home"], {relativeTo: this.route})
  }

  irCurso():void{
    this.router.navigate(["curso"], {relativeTo: this.route})
  }
  irPost():void{
    this.router.navigate(["post"], {relativeTo: this.route})
  }
  irEstado():void{
    this.router.navigate(["estado"], {relativeTo: this.route})
  }

  logout(){

    this.authService.logout();
    this.router.navigate(["login"])
  }

}
