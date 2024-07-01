import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Prodotto } from '../../models/prodotto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotto-datail',
  templateUrl: './prodotto-datail.component.html',
  styleUrl: './prodotto-datail.component.css'
})
export class ProdottoDatailComponent implements OnInit {
  prodotto?: Prodotto;
  constructor(public ps: ProdottiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //! prima operatore di negazione non/not
    const id = this.route.snapshot.paramMap.get("id")!;

    this.ps.getProdottiById(id).subscribe(p => {
      this.prodotto = p;
    })
  }

  addToCart() {
    this.ps.aggiungiACarrello(this.prodotto!)
  }
}
