import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSort, MatTable, MatTableDataSource } from '@angular/material';

export interface foneElement {
  nome: string;
  telefone: string;
}

@Component({
  selector: 'sch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Agenda';

  // @ViewChild('frm', {static:false}) myNgForm: NgForm;
  // @ViewChild(MatTable, {static:false}) table: MatTable<foneElement>;
  // @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild('frm') myNgForm: NgForm;
  @ViewChild(MatTable) table: MatTable<foneElement>;
  @ViewChild(MatSort) sort: MatSort;
  

  formGroup: FormGroup;
  displayedColumns: string[] = ['nome', 'telefone', 'excluir'];
  listaTelefones: foneElement[] = [];
 
  //dataSource: MatTableDataSource<foneElement>;
  dataSource = new MatTableDataSource(this.listaTelefones);

  // constructor() {
  //   this.dataSource = new MatTableDataSource(this.listaTelefones);
  // }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.formDefault();
  }
  
  formDefault() {
    if (this.formGroup != null && this.myNgForm != null && this.myNgForm.form != null)
      this.myNgForm.resetForm();

    this.formGroup = new FormGroup({
      nome: new FormControl("", Validators.required),
      telefone: new FormControl("", Validators.required)
    })
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.incluir();

    this.formDefault();
  }

  limpar() {
    this.formDefault();
  }

  incluir() {
    let novoTelefone:foneElement = {
      nome: this.formGroup.controls.nome.value,
      telefone: this.formGroup.controls.telefone.value
    }
    
    this.listaTelefones.push(novoTelefone);
    this.dataSource.data = this.listaTelefones;

    //this.table.renderRows();
  }

  remove(element) {
    const indexToDel = this.listaTelefones.indexOf(element);
      if (indexToDel >= 0)
        this.listaTelefones.splice(indexToDel, 1);

      this.dataSource.data = this.listaTelefones;
      //this.table.renderRows();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
