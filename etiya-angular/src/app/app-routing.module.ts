import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/orders-list/order-list/order-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent },
  {path:'add-product', component: AddProductComponent},

  {path: 'dashboard/customer/add', component:UpdateCustomerComponent,},
  {path: 'dashboard/customers', component:DashboardComponent},
  {path:'dashboard/customer/:id', component:UpdateCustomerComponent},
  {path:"dashboard/product/add",component:ProductFormComponent},
  {path:"dashboard/products",component:ProductDashboardComponent},
  {path:"dashboard/product/:id",component:ProductFormComponent},
  {path:"order-list", component:OrderListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }