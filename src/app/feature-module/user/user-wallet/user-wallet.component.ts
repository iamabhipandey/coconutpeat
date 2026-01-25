import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from 'src/app/shared/custom-pagination/pagination.service';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { apiResultFormat, pageSelection, userWallet, userPayment } from 'src/app/shared/services/model/model';

@Component({
  selector: 'app-user-wallet',
  templateUrl: './user-wallet.component.html',
  styleUrls: ['./user-wallet.component.css']
})
export class UserWalletComponent {
  public routes = routes;
  public tableData: Array<userWallet> = [];

  dataSource!: MatTableDataSource<userWallet>;

  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;


  constructor(
    public data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.userWallet) {
        this.getPaymentTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }


  private getTableData(pageOption: pageSelection): void {
    this.data.getuserWallet().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: userWallet, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<userWallet>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public paymentTableData: Array<userPayment> = [];
  paymentDataSource!: MatTableDataSource<userPayment>;

  private getPaymentTableData(pageOption: pageSelection): void {
    const coconutProducts = [
      { name: 'COCONUT FIBER', img: 'assets/img/banner-section2/product1.png' },
      { name: 'COIR MAT', img: 'assets/img/banner-section2/product2.png' },
      { name: 'COCO PEAT', img: 'assets/img/banner-section2/product03.jpeg' },
      { name: 'COIR ROPE', img: 'assets/img/banner-section2/product5.png' },
      { name: 'COIR NET', img: 'assets/img/banner-section2/product7.png' },
      { name: 'DESICCATED COCONUT', img: 'assets/img/banner-section2/product8.jpg' },
      { name: 'SEMI HUSK COCONUT', img: 'assets/img/banner-section2/product9.png' },
      { name: 'COIR BOARD', img: 'assets/img/banner-section2/product10.jpeg' },
      { name: 'COIR FELT NEEDLE', img: 'assets/img/banner-section2/product11.jpg' }
    ];

    this.data.getuserPayment().subscribe((apiRes: apiResultFormat) => {
      this.paymentTableData = [];
      apiRes.data.map((res: userPayment, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          // Override with coconut product data
          const product = coconutProducts[index % coconutProducts.length];
          res.carName = product.name;
          res.img = product.img;

          this.paymentTableData.push(res);
        }
      });
      this.paymentDataSource = new MatTableDataSource<userPayment>(this.paymentTableData);
    });
  }
  public searchPaymentDataValue = '';

  public searchPaymentData(value: string): void {
    this.paymentDataSource.filter = value.trim().toLowerCase();
    this.paymentTableData = this.paymentDataSource.filteredData;
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  initChecked = false;

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
}
