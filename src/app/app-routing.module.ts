import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NftComponent} from './nft/nft.component';
const routes: Routes = [
  {
    path: 'nft', component: NftComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
