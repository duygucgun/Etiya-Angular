import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { ProductPipe } from './pipes/filter/product.pipe';
import { SaleDirective } from './directives/sale/sale.directive';
import { ClickProductCardDirective } from './directives/click-product-card/click-product-card.directive';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { OrderListComponent } from './components/orders-list/order-list/order-list.component';
import { WelcomeDirective } from './directives/welcome/welcome.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryListComponent,
    RegisterComponent,
    DashboardComponent,
    UpdateCustomerComponent,
    KdvPipe,
    SaleDirective,
    ProductFormComponent,
    ProductDashboardComponent,
    CustomerFormComponent,
    CustomerDashboardComponent,
    ProductPipe,
    ClickProductCardDirective,
    IfNotDirective,
    WelcomeDirective,
    MultipleDirective,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
