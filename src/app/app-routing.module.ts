import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ExchangeRatesListComponent } from './screens/exchange-rates-list/exchange-rates-list.component';
import { HistorialChartComponent } from './screens/historial-chart/historial-chart.component';
import { Top5ExchangeRatesComponent } from './screens/top-5-exchange-rates/top-5-exchange-rates.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/latest-rates', pathMatch: 'full' },
  { path: 'latest-rates', component: ExchangeRatesListComponent},
  { path: 'historial-rates', component: HistorialChartComponent },
  { path: 'top-5', component: Top5ExchangeRatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ExchangeRatesListComponent, HistorialChartComponent, Top5ExchangeRatesComponent]
