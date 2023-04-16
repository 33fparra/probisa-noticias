import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { OfficesComponent } from './components/about/offices/offices.component';
import { StrategiesComponent } from './components/about/strategies/strategies.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { CompromisoComponent } from './components/compromiso/compromiso.component';
import { InnovacionComponent } from './components/innovacion/innovacion.component';
import { IndicePrecioAsfaltoComponent } from './components/indice-precio-asfalto/indice-precio-asfalto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FirebaseDataModule } from 'src/app/code/modules/data/data-module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';



@NgModule({
  declarations: [
    HomeComponent,
    OfficesComponent,
    StrategiesComponent,
    QuienesSomosComponent,
    ActividadesComponent,
    CompromisoComponent,
    InnovacionComponent,
    IndicePrecioAsfaltoComponent,
    ContactoComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,
    FirebaseDataModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild(),
    NgChartsModule,
    LightboxModule 
  ]
})
export class PublicModule { }
