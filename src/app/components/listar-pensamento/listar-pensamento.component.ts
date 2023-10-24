import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listarPensamentos: Pensamento[] = [];
  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listarPensamentos) => {
      this.listarPensamentos = listarPensamentos;
    });
  }
}
