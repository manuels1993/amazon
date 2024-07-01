import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit, OnDestroy {
  prodotti: Prodotto[] = [];

  //Dependecy injection:è quel meccanismo che ha angular e ferve per dare a chi ne ha bisogno la stessa instanza di un oggetto in modo che sia condivisa per tutto il progetto
  constructor(private ps: ProdottiService) {

  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.ps.getProdotti().subscribe(dati => {
      this.prodotti = dati;
    });

  }
}
