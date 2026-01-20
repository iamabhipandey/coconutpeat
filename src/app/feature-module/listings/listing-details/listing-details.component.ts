import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { MatDialog } from '@angular/material/dialog';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import {
  interestedCars,
  listingDetails,
  thumbnails,
} from 'src/app/shared/services/model/model';
import { DatePipe } from '@angular/common';
import { Lightbox } from 'ngx-lightbox';
import { WriteReviewComponent } from '../../reviews/write-review/write-review.component';
import Swal from 'sweetalert2';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { ActivatedRoute, Router } from '@angular/router';
interface data {
  value: string;
}
interface gallery {
  src: string
}
@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss'],
})
export class ListingDetailsComponent {
  public routes = routes;
  public gallery: Array<gallery> = [];
  public listingDetails: listingDetails[] = [];
  public thumbnails: thumbnails[] = [];
  public interestedCars: interestedCars[] = [];
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
  public selectedValue1 !: string;
  public selectedValue2 !: string;
  selectedList1: data[] = [
    { value: 'Newyork Office - 78, 10th street Laplace USA' },
    { value: 'Newyork Office - 12, 5th street USA' },

  ];
  selectedList2: data[] = [
    { value: 'Newyork Office - 78, 10th street Laplace USA' },
    { value: 'Newyork Office - 12, 5th street USA' },

  ];


  loggedUserData: any;
  loggedUserName: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: any = '';
  loggedUserType: string = '';
  currentLoggedUserId: any;



  constructor(private data: DataService,
    private commonService: CommonService,
    private dataFactory: DataFactoryService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe, private _lightbox: Lightbox, private matDialog: MatDialog) {
    this.listingDetails = this.data.listingDetails;
    this.thumbnails = this.data.thumbnails;

    for (let i = 1; i <= 12; i++) {
      // ensuring we have some gallery images, though we will use productData mostly
      const src = 'assets/img/gallery/gallery-thumb-0' + i + '.jpg';
      this.gallery.push({ src: src });
    }

    this.loggedUserData = this.dataFactory.getCurrentUser();
    if (this.loggedUserData) {
      this.loggedUserName = this.loggedUserData.name;
      this.loggedUserEmail = this.loggedUserData.email;
      this.loggedMobile = this.loggedUserData.mobile;
      this.loggedUserType = this.loggedUserData.userType;
      this.loggedUserId = this.loggedUserData.userProfileId;
      this.currentLoggedUserId = this.loggedUserId;
    }
  }


  trackByProductId(index: number, item: any): string {
    return item.id;
  }

  productData: any;
  productId: any;
  productName: any;

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Static MOCK DATA - Making component static
    this.productData = {
      id: 1,
      productName: 'Premium Coco Peat 5kg Block',
      brandName: 'CocoGrow',
      category: 'Gardening',
      mrp: 399,
      netWeight: 5,
      weightUnit: 'kg',
      imageInfo: {
        imageUrl: 'assets/img/cocopeat.png',
        additionalImages: [
          { id: 1, additionalImageUrl: 'assets/img/cocopeat.png' },
          { id: 2, additionalImageUrl: 'assets/img/cocopeat.png' },
        ]
      },
      idealFor: 'Plants & Gardening',
      productType: 'Organic Fertilizer',
      skinType: 'All Soil Types', // Mapping 'skinType' to Soil Type context
      concern: 'Plant Growth',
      containerType: 'Bag',
      countryOrigin: 'India',
      minimumOrderQuantity: '1 Block',
      shelfLife: '3 Years',
      shortDescription: 'Eco-friendly and sustainable growing medium for all your gardening needs. High water retention and aeration.',
      keyIngredients: '100% Coconut Husk',
      usageInstructions: 'Soak the block in 25 liters of water. It will expand up to 75 liters of coco peat powder.'
    };

    this.reviewsData = [
      {
        user: 'Rahul Kumar',
        rating: 5,
        comment: 'Excellent quality! Expands a lot.',
        date: '10 Jan 2024'
      },
      {
        user: 'Sneha Singh',
        rating: 4,
        comment: 'Good for my home garden.',
        date: '12 Jan 2024'
      }
    ];

    // Commented out dynamic calls
    /*
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'];
      this.productName = params['productName'];
      this.getAllProductDataByID(this.productId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    this.getReviewById(this.productId);
    this.searhProductData();
    */
  }

  getAllProductDataByID(productId: any) {
    // Keeping method structure but doing nothing or could reset static data
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  reviewsData: any = [];
  getReviewById(productId: any) {
    // Mocked in ngOnInit
  }


  similarProductData: any[] = [
    { id: 2, productName: 'COCONUT FIBER', mrp: 3600, productImageId: 'assets/img/banner-section2/product1.png' },
    { id: 3, productName: 'COIR MAT', mrp: 2600, productImageId: 'assets/img/banner-section2/product2.png' },
    { id: 4, productName: 'COCO PEAT', mrp: 1600, productImageId: 'assets/img/banner-section2/product03.jpeg' },
    { id: 5, productName: 'COIR ROPE', mrp: 650, productImageId: 'assets/img/banner-section2/product5.png' },
    { id: 6, productName: 'COIR ROPE (Heavy)', mrp: 700, productImageId: 'assets/img/banner-section2/product6.jpg' },
    { id: 7, productName: 'COIR NET', mrp: 600, productImageId: 'assets/img/banner-section2/product7.png' },
    { id: 8, productName: 'DESICCATED COCONUT', mrp: 200, productImageId: 'assets/img/banner-section2/product8.jpg' },
    { id: 9, productName: 'SEMI HUSK COCONUT', mrp: 800, productImageId: 'assets/img/banner-section2/product9.png' },
    { id: 10, productName: 'COIR BOARD', mrp: 1200, productImageId: 'assets/img/banner-section2/product10.jpeg' },
    { id: 11, productName: 'COIR FELT NEEDLE', mrp: 600, productImageId: 'assets/img/banner-section2/product11.jpg' }
  ];

  searhProductData(
    productName: string = '',
    brandName: string = '',
    category: string = '',
    subCategory: string = '',
    superSubCategory: string = '',
    productType: string = '',
    concern: string = ''
  ) {
    // Static data is populated via class property
  }


  writereview(): void {
    const dialogRef = this.matDialog.open(WriteReviewComponent, {
      data: { productId: this.productData?.id }
    });

    dialogRef.afterClosed().subscribe((res: string) => {
      if (res) {
        console.log("Review Submitted:", res);
      }
      // this.getReviewById(this.productData.id);
    });
  }




  interestedCarsOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
      0: { items: 1 },
      550: { items: 2 },
      700: { items: 3 },
      1000: { items: 4 },
      1200: { items: 5 }
    }
  };
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }


  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }

  close(): void {
    this._lightbox.close();
  }










  addToCart() {
    // Static Cart Action
    Swal.fire({
      title: 'Success',
      text: `Item added to Cart (Static Mode)`,
      icon: 'success',
      confirmButtonColor: '#0E82FD',
    });
  }




  addIntrestedItemToCart(id: any) {
    Swal.fire({
      title: 'Success',
      text: `Item added to Cart (Static Mode)`,
      icon: 'success',
      confirmButtonColor: '#0E82FD',
    });
  }






  // proceedToNext(): void { 
  //   if (!this.user) {
  //     Swal.fire({
  //       title: 'Login Required',
  //       text: 'You need to log in to proceed to checkout.',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Log In',
  //       cancelButtonText: 'Cancel'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         const url = this.router.url;
  //         const userType = 'U'; 
  //         this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: url, userType: userType } });        
  //       }
  //     });
  //   } else {   

  //     this.router.navigate(['/patient-details']);
  //   }
  // }


  isClassAdded: { [key: number]: boolean } = {}; // object jisme har product id ka state rahega

  toggleClass(productId: number) {
    this.isClassAdded[productId] = !this.isClassAdded[productId];
  }


  addToWishlist(productId: number) {
    Swal.fire({
      title: 'Success',
      text: 'Item added to Wishlist (Static Mode)',
      icon: 'success',
      confirmButtonColor: '#0E82FD',
    });
  }


}
