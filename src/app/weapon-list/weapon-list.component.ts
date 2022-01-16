import { Component, OnInit } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponserviceService } from '../weaponservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})

export class WeaponListComponent implements OnInit {

  weapons : Weapon[];

  constructor(private weaponservice: WeaponserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getWeapons();
  }

  private getWeapons() {
    this.weaponservice.getWeaponList().subscribe(data => {
      this.weapons = data;
    });
  }

  updateWeapon(id: number) {
    this.router.navigate(['update-weapon', id]);
  }

  
  deleteWeapon(id: number) {
    this.weaponservice.deleteWeapon(id).subscribe(data => {
      console.log(data);
      this.getWeapons();
    })
  }

  weaponDetails(id: number) {
    this.router.navigate(['weapon-details', id]);
  }


  
}
