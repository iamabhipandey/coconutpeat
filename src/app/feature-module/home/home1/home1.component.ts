import { DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { testimonials, thumbnails1 } from 'src/app/shared/services/model/model';
interface data {
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class HomeComponent implements AfterViewInit {
  activeTab: string = 'hangover';

  openedHang: number | null = null;
  openedSleep: number | null = null;

  toggle(i: number, type: string) {
    if (type === 'hang') {
      this.openedHang = this.openedHang === i ? null : i;
    } else {
      this.openedSleep = this.openedSleep === i ? null : i;
    }
  }

  hangoverFAQ = [
    { q: "HOME.FAQ_QA.Q1", a: "HOME.FAQ_QA.A1" },
    { q: "HOME.FAQ_QA.Q2", a: "HOME.FAQ_QA.A2" },
    { q: "HOME.FAQ_QA.Q3", a: "HOME.FAQ_QA.A3" },
    { q: "HOME.FAQ_QA.Q4", a: "HOME.FAQ_QA.A4" },
    { q: "HOME.FAQ_QA.Q5", a: "HOME.FAQ_QA.A5" },
    { q: "HOME.FAQ_QA.Q6", a: "HOME.FAQ_QA.A6" },
    { q: "HOME.FAQ_QA.Q7", a: "HOME.FAQ_QA.A7" }
  ];


  sleepFAQ = [
    { q: "HOME.SLEEP_QA.Q1", a: "HOME.SLEEP_QA.A1" },
    { q: "HOME.SLEEP_QA.Q2", a: "HOME.SLEEP_QA.A2" },
    { q: "HOME.SLEEP_QA.Q3", a: "HOME.SLEEP_QA.A3" },
    { q: "HOME.SLEEP_QA.Q4", a: "HOME.SLEEP_QA.A4" },
    { q: "HOME.SLEEP_QA.Q5", a: "HOME.SLEEP_QA.A5" },
    { q: "HOME.SLEEP_QA.Q6", a: "HOME.SLEEP_QA.A6" },
    { q: "HOME.SLEEP_QA.Q7", a: "HOME.SLEEP_QA.A7" }
  ];

  public selectedValue1!: string;
  public selectedValue2!: string;
  public selectedValue3!: string;
  selectedList1: data[] = [
    { value: 'HOME.CATEGORIES.COCONUT' },
    { value: 'HOME.CATEGORIES.AGRICULTURAL' },
    { value: 'HOME.PRODUCT_ITEMS.DESICCATED_COCONUT' },
    { value: 'HOME.CATEGORIES.OTHER_PRODUCTS' },

  ];
  selectedList2: data[] = [
    { value: 'HOME.SEARCH.FINE_POWDER' },
    { value: 'HOME.SEARCH.FIBER_LONG' },
    { value: 'HOME.SEARCH.FIBER_SHORT' },
    { value: 'HOME.SEARCH.PEAT_BLOCK_5KG' },
    { value: 'HOME.SEARCH.PEAT_BRICK_650G' },
    { value: 'HOME.SEARCH.HUSK_CHIPS_LARGE' },
    { value: 'HOME.SEARCH.HUSK_CHIPS_SMALL' },

  ];
  selectedList3: data[] = [
    { value: 'HOME.SEARCH.INDIA' },
    { value: 'HOME.SEARCH.KOREA' },

  ];
  public routes = routes
  public thumbnails1: thumbnails1[] = [];
  public testimonials: testimonials[] = [];

  constructor(private data: DataService, private datePipe: DatePipe) {
    this.testimonials = this.data.testimonials;
    this.thumbnails1 = this.data.thumbnails1;


  }
  contactNow() {
    alert('Contact form or chat popup triggered!');
  }



  newArrivalProducts = [
    {
      image: 'assets/img/product/fab-you1.webp',
      title: 'HOME.NEW_ARRIVALS.PRODUCT_1_TITLE',
      brandname: 'HOME.NEW_ARRIVALS.PRODUCT_1_BRAND',
      price: 1596,
      oldPrice: null,
      discount: null
    },
    {
      image: 'assets/img/product/product-2.avif',
      title: 'HOME.NEW_ARRIVALS.PRODUCT_2_TITLE',
      brandname: 'HOME.NEW_ARRIVALS.PRODUCT_2_BRAND',
      price: 299,
      oldPrice: null,
      discount: null,
    },
    {
      image: 'assets/img/product/fab-you2.webp',
      title: 'HOME.NEW_ARRIVALS.PRODUCT_3_TITLE',
      brandname: 'HOME.NEW_ARRIVALS.PRODUCT_3_BRAND',
      price: 1191,
      oldPrice: null,
      discount: null,
    },
    {
      image: 'assets/img/product/fab-you3.webp',
      title: 'HOME.NEW_ARRIVALS.PRODUCT_4_TITLE',
      brandname: 'HOME.NEW_ARRIVALS.PRODUCT_4_BRAND',
      price: 1407,
      oldPrice: null,
      discount: null,
    },
    {
      image: 'assets/img/product/ratplan-6.jpg',
      title: 'HOME.NEW_ARRIVALS.PRODUCT_5_TITLE',
      brandname: 'HOME.NEW_ARRIVALS.PRODUCT_5_BRAND',
      price: 2000,
      oldPrice: null,
      discount: null,
    }
  ];


  promotionProducts = [
    {
      image: 'assets/img/banners/Loche Tox 100Unit.jpg',
      title: 'HOME.PROMO.LOCHE_TOX_100',
    },
    {
      image: 'assets/img/banners/Loche Tox 200Unit.jpg',
      title: 'HOME.PROMO.LOCHE_TOX_200',
    },
    {
      image: 'assets/img/banners/PDRNelle.jpg',
      title: 'HOME.PROMO.PDRNELLE',
    },
    {
      image: 'assets/img/banners/IMG-20251025-WA0033.jpg',
      title: 'HOME.PROMO.PDRNELLE_SKINBOOSTER',
    },
    {
      image: 'assets/img/banners/Loche injector .jpg',
      title: 'HOME.PROMO.LOCHE_INJECTOR',
    },
    {
      image: 'assets/img/banners/Pdrnelle vega shine.jpg',
      title: 'HOME.PROMO.PDRNELLE_VEGA_SHINE',
    },
    {
      image: 'assets/img/banners/pdrnelle V .jpg',
      title: 'HOME.PROMO.PDRNELLE_V',
    },
  ];


  secondsection: OwlOptions = {
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },

      550: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      },

    },
  };
  bikefeatureOwlOptions: OwlOptions = {
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },

      550: {
        items: 2
      },
      700: {
        items: 3
      },
      892: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    },
  };
  blogsliderOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    smartSpeed: 2000,
    autoplay: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  };
  carimagesliderOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 2000,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },

      550: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 6
      },
      1200: {
        items: 6
      }
    }
  };
  firstsecOptions: OwlOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 3
      },
      550: {
        items: 4
      },
      700: {
        items: 5
      },
      1000: {
        items: 6
      },
      1200: {
        items: 7
      },

    },
  };
  categorysec: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },

      550: {
        items: 3
      },
      700: {
        items: 4
      },
      1000: {
        items: 5
      },
      1200: {
        items: 5
      }
    }
  };
  yachttypeOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      676: {
        items: 3
      },
      867: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  };
  BrandsliderOwlOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },

      550: {
        items: 3
      },
      700: {
        items: 4
      },
      1000: {
        items: 7
      },
      1200: {
        items: 7
      }
    }
  };
  TopBrands: OwlOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },

      550: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      }
    },
  };
  NewArrival: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },

      550: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      }
    },
  };

  pramotionsec: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    items: 1,
    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },

      550: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      }
    },
  };

  public ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'))
  }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    asNavFor: '.testimonial-thumbnails'
  };

  thumbnailConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider',
    focusOnSelect: true
  };
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];
}
