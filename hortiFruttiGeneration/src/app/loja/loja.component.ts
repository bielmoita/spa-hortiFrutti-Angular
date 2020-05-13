import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaProdutos: Produtos []


  constructor(private produtosServc: ProdutosService) { }

  ngOnInit(): void {
  }

  findAllProdutos(){
    this.produtosServc.getAllProdutos().subscribe((resp: Produtos[]) =>{
      this.listaProdutos = resp
    })

  }

}
