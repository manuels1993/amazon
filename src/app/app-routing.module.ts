import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { ProdottoDatailComponent } from './components/prodotto-datail/prodotto-datail.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostAddComponent } from './components/post-add/post-add.component';

const routes: Routes = [
  { path: "", component: ProdottiVetrinaComponent },

  { path: "dettaglio/:id", component: ProdottoDatailComponent },

  { path: "contatti", component: ContattiComponent },

  { path: "chiSiamo", component: ChiSiamoComponent },

  { path: "dettaglio/:id", component: ProdottoDatailComponent },

  { path: "articoli", component: PostsListComponent },

  { path: "articoli/nuovo", component: PostAddComponent },

  { path: "articoli/:postId", component: PostDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
