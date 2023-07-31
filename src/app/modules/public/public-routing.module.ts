import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficesComponent } from './components/about/offices/offices.component';
import { StrategiesComponent } from './components/about/strategies/strategies.component';
import { HomeComponent } from './components/home/home.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { CompromisoComponent } from './components/compromiso/compromiso.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IndicePrecioAsfaltoComponent } from './components/indice-precio-asfalto/indice-precio-asfalto.component';
import { InnovacionComponent } from './components/innovacion/innovacion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

const routes: Routes = [

  {
    path: 'actividades',
    component: ActividadesComponent
  },
  {
    path: 'compromiso',
    component: CompromisoComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'ipa',
    component: IndicePrecioAsfaltoComponent
  },
  {
    path: 'innovacion',
    component: InnovacionComponent
  },
  {
    path: 'quienessomos',
    component: QuienesSomosComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },

  {
    path: 'commitment',
    children: [
      {
        path: 'environment',
        component: HomeComponent
      },
      {
        path: 'wellness',
        component: HomeComponent
      },
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
