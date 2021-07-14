# Formularios basico y reactivo
<hr>
## Formulario basico
  
captura con validadores html5 y en submit llama a metodo
<hr>
## Formulario reactivo

-Lo construyo inyectando un FormBuilder <strong>fb</strong> ,declaro un formGroup, en onInit inicio el formgroup asi: <br>
this.fb.group( { clave:"placeholder", [array de validadores] } ) <br>
-Lo que edite en la vista está bindeado a este formGroup: [formGroup]="formulario" <br>
-Capturo error en los validadores segun el formControlName del input y muestro el error en rojo: <br>
 ejemplo: *ngIf= "formulario.get('name')?.hasError('required') "
