import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  customerList!: Customer[]
  constructor(private customersService: CustomersService, private router:Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customersService.getList().subscribe(response => {
      this.customerList = response;
    })
  }

  deleteCustomer(id: number) {
    if (confirm("Are you sure want to delete?")) {
      this.customersService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getCustomers();
        }, 1000);
      })
    }
    
  }

  selectedCustomerId(selectedCustomer:Customer):void{
    this.router.navigateByUrl(`dashboard/customer/${selectedCustomer.id}`);
  }


}