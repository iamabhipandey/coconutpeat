import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { listingGrid } from 'src/app/shared/services/model/model';
import { ViewportScroller } from '@angular/common';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
interface data {
  value: string;
}
@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css'],
})
export class ListingGridComponent {



  // close product tabs 
  // open sidebar ts
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  // close sidebar ts



  public selectedValue1!: string;

  public selectedValue3!: string;
  public listingGrid: listingGrid[] = [];
  currentLoggedUserId: any;


  loggedUserData: any;
  loggedUserName: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: any = '';
  loggedUserType: string = '';

  constructor(
    private data: DataService, private datePipe: DatePipe,
    private viewportScroller: ViewportScroller,
    private commonService: CommonService,
    private dataFactory: DataFactoryService,
    private router: Router,
    private spinner: NgxSpinnerService

  ) {
    this.loggedUserData = this.dataFactory.getCurrentUser();
    if (this.loggedUserData) {
      this.loggedUserName = this.loggedUserData.name;
      this.loggedUserEmail = this.loggedUserData.email;
      this.loggedMobile = this.loggedUserData.mobile;
      this.loggedUserType = this.loggedUserData.userType;
      this.loggedUserId = this.loggedUserData.userProfileId;
      this.currentLoggedUserId = this.loggedUserId;

    }
    // this.listingGrid = this.data.listingGrid;
    // this.getAllVerifiedProductData(); // Removed
    this.getAllActiveProductData();

  }


  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }


  showSpinner() {
    this.spinner.show();
    // Simulate data loading
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }


  public routes = routes;
  slidevalue = 55;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }


  isClassAdded: { [key: number]: boolean } = {}; // object jisme har product id ka state rahega

  toggleClass(productId: number) {
    this.isClassAdded[productId] = !this.isClassAdded[productId];
  }





  // toggleClass(productId: number) {
  //   this.isClassAdded[productId] = !this.isClassAdded[productId];

  //   if (this.isClassAdded[productId]) {
  //     this.addToWishlist(productId);  // wishlist me add
  //   } else {
  //     this.removeFromWishlist(productId);  // wishlist se remove (agar API support karti hai)
  //   }
  // }

  // removeFromWishlist(productId:any){

  // }


  // getAllVerifiedProductData removed as it was unused and dynamic



  trackByProductId(index: number, item: any): string {
    return item.id;
  }


  originalProducts: any[] = [];
  getAllProductData: any[] = [];

  activeTab = 'all';

  tabs = [
    { id: 'all', label: 'All' },
    { id: 'Coconut', label: 'Coconut' },
    { id: 'Agricultural', label: 'Agricultural' },
    { id: 'Desiccated coconut', label: 'Desiccated Coconut' },
    { id: 'Other Products', label: 'Other Products' },
    { id: 'Coir Mat', label: 'Coir Mat' },
    { id: 'Coco Peat', label: 'Coco Peat' },
    { id: 'Coir Rope', label: 'Coir Rope' },
    { id: 'Coir Net', label: 'Coir Net' },
    { id: 'Semi Husk Coconut', label: 'Semi Husk Coconut' },
  ];





  // getAllActiveProductData() {
  //   this.commonService.getAllActiveProductData().subscribe({
  //     next: (res: any) => {
  //       if (res.status === 'true') {
  //         // Store API data
  //         this.originalProducts = res.data;
  //         this.getAllProductData = [...this.originalProducts];
  //       } else {
  //         console.warn('No active products found');
  //       }
  //     },
  //     error: (err: any) => {
  //       console.error(err);
  //     }
  //   });
  // }

  // 💡 Computed getter for filtered products


  getAllActiveProductData() {
    // Static Data Implementation
    this.originalProducts = [
      {
        id: '1',
        productName: 'Coconut Fiber',
        superSubCategory: 'Coconut',
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product1.png' },
        mrp: '1200',
        rating: '4.5',
        reviews: '120',
        countryOrigin: 'LocheBio'
      },
      {
        id: '2',
        productName: 'Coir Mat',
        superSubCategory: 'Coir Mat',
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product2.png' },
        mrp: '2600',
        rating: '4.8',
        reviews: '80',
        countryOrigin: 'LocheBio'
      },
      {
        id: '3',
        productName: 'Coco Peat',
        superSubCategory: 'Coco Peat',
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product03.jpeg' },
        mrp: '1600',
        rating: '4.9',
        reviews: '200',
        countryOrigin: 'LocheBio'
      },
      {
        id: '4',
        productName: 'Coir Rope',
        superSubCategory: 'Coir Rope',
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product5.png' },
        mrp: '1500',
        rating: '4.3',
        reviews: '45',
        countryOrigin: 'LocheBio'
      },
      {
        id: '5',
        productName: 'Coir Rope (Heavy Duty)',
        superSubCategory: 'Coir Rope',
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product6.jpg' },
        mrp: '1800',
        rating: '4.7',
        reviews: '60',
        countryOrigin: 'LocheBio'
      },
      {
        id: '6',
        productName: 'Coir Net',
        superSubCategory: 'Coir Net',
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product7.png' },
        mrp: '2200',
        rating: '4.6',
        reviews: '90',
        countryOrigin: 'LocheBio'
      },
      {
        id: '7',
        productName: 'Desiccated Coconut',
        superSubCategory: 'Desiccated coconut',
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product8.jpg' },
        mrp: '200',
        rating: '4.8',
        reviews: '150',
        countryOrigin: 'LocheBio'
      },
      {
        id: '8',
        productName: 'Semi Husk Coconut',
        superSubCategory: 'Semi Husk Coconut',
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product9.png' },
        mrp: '800',
        rating: '4.5',
        reviews: '100',
        countryOrigin: 'LocheBio'
      },
      {
        id: '9',
        productName: 'Coir Board',
        superSubCategory: 'Other Products', // Mapped to Other Products
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product10.jpeg' },
        mrp: '3000',
        rating: '4.4',
        reviews: '30',
        countryOrigin: 'LocheBio'
      },
      {
        id: '10',
        productName: 'Coir Felt Needle',
        superSubCategory: 'Other Products', // Mapped to Other Products
        category: 'Coconut',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product11.jpg' },
        mrp: '3500',
        rating: '4.6',
        reviews: '40',
        countryOrigin: 'LocheBio'
      },
      {
        id: '11',
        productName: 'Coco Grow Bags',
        superSubCategory: 'Agricultural',
        category: 'Agricultural',
        imageInfo: { imageUrl: 'assets/img/banner-section2/product4.png' },
        mrp: '450',
        rating: '4.8',
        reviews: '250',
        countryOrigin: 'LocheBio'
      }
    ];

    // No filtering needed here as we want to show all these products (they are already LocheBio implicitly)
    this.getAllProductData = [...this.originalProducts];
  }



  get filteredProducts() {
    if (this.activeTab === 'all') {
      return this.getAllProductData;
    } else {
      // Match category ignoring case (e.g., "Skin" === "skin")
      return this.getAllProductData.filter(
        (p) => p.superSubCategory?.toLowerCase() === this.activeTab.toLowerCase()
      );
    }
  }

  // 📄 Pagination Logic
  currentPage: number = 1;
  pageSize: number = 8;

  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.pageSize);
  }

  get paginatedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  get pageNumbers(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.viewportScroller.scrollToPosition([0, 0]); // Scroll to top
    }
  }

  // 💡 Change tab
  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.currentPage = 1; // Reset to first page
  }


  // productProfile(product: any) {
  //   this.commonService.setUserProductData(product);
  //   this.router.navigate([this.routes.listingDetails]);  // navigate bhi karo
  // }


  productProfile(productId: any) {
    this.router.navigate(
      [this.routes.listingDetails],
      {
        queryParams: {
          id: productId,
          // name: product.productName
        }
      }
    );
  }


  // addToCart(productId: number) {
  //   const payload = {
  //     productId: productId,
  //     userId: this.currentLoggedUserId,
  //   }

  //   this.commonService.addToCart(payload).subscribe({
  //     next: (res: any) => {
  //       if (res.status === 'true') {

  //         // ✅ cart count update service me push 
  //       this.commonService.updateCartCount(res.data.totalQuantity);

  //         Swal.fire({
  //         title: 'Success',
  //         text: `Item added  to Cart`,
  //         icon: 'success',
  //         confirmButtonColor: '#0E82FD',
  //       }).then((result) => {
  //         if (result.isConfirmed) {

  //         }
  //       });

  //       } else {

  //       }
  //     },
  //     error: (err: any) => {
  //       console.error(err);
  //     }
  //   });

  // }



  addToCart(productId: number) {
    if (this.currentLoggedUserId) {
      const payload = {
        productId: productId,
        userId: this.currentLoggedUserId,
      }

      this.commonService.addToCart(payload).subscribe({
        next: (res: any) => {
          if (res.status === 'true') {

            // ✅ cart count update service me push 
            this.commonService.updateCartCount(res.data.totalQuantity);

            Swal.fire({
              title: 'Success',
              text: `Item added  to Cart`,
              icon: 'success',
              confirmButtonColor: '#0E82FD',
            }).then((result) => {
              if (result.isConfirmed) {

              }
            });

          } else {

          }
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    } else {
      Swal.fire({
        title: 'Login Required',
        text: 'You need to log in to add to cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Log In',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          const url = this.router.url;
          this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: url } });
        }
      });
    }

  }




  addToWishlist(productId: number) {
    if (this.currentLoggedUserId) {
      const payload = {
        productId: productId,
        userId: this.currentLoggedUserId,
      };

      this.commonService.addToWishlist(payload).subscribe({
        next: (res: any) => {
          if (res.status === 'true') {

            Swal.fire({
              title: 'Success',
              text: 'Item added to Wishlist',
              icon: 'success',
              confirmButtonColor: '#0E82FD',
            });

            // service ke through update
            this.commonService.updateWishlistCount(res.data.wishlistCount);


          }
        },
        error: (err) => console.error(err)
      });
    } else {
      Swal.fire({
        title: 'Login Required',
        text: 'You need to log in to add to cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Log In',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          const url = this.router.url;
          this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: url } });
        }
      });
    }
  }




  selectedValue2: string = '';

  selectedList2 = [
    { value: 'Price: Low to High' },
    { value: 'Price: High to Low' },
    { value: 'Name: A to Z' },
    { value: 'Name: Z to A' },
    { value: 'Newest First' },
    { value: 'Oldest First' }
  ];


  onSortChange(sortType: string) {
    switch (sortType) {
      case 'Price: Low to High':
        this.getAllProductData.sort((a: any, b: any) => Number(a.mrp) - Number(b.mrp));
        break;
      case 'Price: High to Low':
        this.getAllProductData.sort((a: any, b: any) => Number(b.mrp) - Number(a.mrp));
        break;
      case 'Name: A to Z':
        this.getAllProductData.sort((a: any, b: any) => a.productName.localeCompare(b.productName));
        break;
      case 'Name: Z to A':
        this.getAllProductData.sort((a: any, b: any) => b.productName.localeCompare(a.productName));
        break;
      case 'Newest First':
        this.getAllProductData.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'Oldest First':
        this.getAllProductData.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
    }
  }




  minPrice: number = 500;
  maxPrice: number = 10000;
  selectedMax: number = 10000;

  onPriceChange(event: any) {
    this.selectedMax = event.target.value;
    this.applyFilters();
  }



  selectedCategories: string[] = [];
  onCategoryChange(event: any, category: string) {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    }
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.originalProducts];

    // Price filter
    filtered = filtered.filter(p => Number(p.sellingPrice) <= this.selectedMax);

    // Category filter
    if (this.selectedCategories.length > 0) {
      filtered = filtered.filter(p => this.selectedCategories.includes(p.category) || this.selectedCategories.includes(p.superSubCategory));
    }

    // ✅ Default Condition — If no result, show all products again
    if (filtered.length === 0) {
      filtered = [...this.originalProducts];
    }

    this.getAllProductData = filtered;
    this.currentPage = 1; // Reset to first page
  }




}
