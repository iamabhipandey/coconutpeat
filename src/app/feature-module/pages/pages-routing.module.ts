import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  {
    path: 'terms-condition',
    loadChildren: () =>
      import('./terms-condition/terms-condition.module').then(
        (m) => m.TermsConditionModule
      ),
  },
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./maintenance/maintenance.module').then(
        (m) => m.MaintenanceModule
      ),
  },
  {
    path: 'coming-soon',
    loadChildren: () =>
      import('./coming-soon/coming-soon.module').then(
        (m) => m.ComingSoonModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },


  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  },


  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },


  {
    path: 'beauty-book',
    loadChildren: () => import('./beauty-book/beauty-book.module').then((m) => m.BeautyBookModule),
  },

  {
    path: 'cocopeat',
    loadChildren: () => import('./cocopeat/cocopeat.module').then((m) => m.CocopeatModule),
  },
  {
    path: 'usage-farms',
    loadChildren: () => import('./usage-farms/usage-farms.module').then((m) => m.UsageFarmsModule),
  },
  {
    path: 'performance',
    loadChildren: () => import('./performance/performance.module').then((m) => m.PerformanceModule),
  },
  {
    path: 'factory',
    loadChildren: () => import('./factory/factory.module').then((m) => m.FactoryModule),
  },
  {
    path: 'quality-control',
    loadChildren: () => import('./quality-control/quality-control.module').then((m) => m.QualityControlModule),
  },
  {
    path: 'agricultural-research-institute',
    loadChildren: () => import('./agricultural-research-institute/agricultural-research-institute.module').then((m) => m.AgriculturalResearchInstituteModule),
  },
  {
    path: 'certification-details',
    loadChildren: () => import('./certification-details/certification-details.module').then((m) => m.CertificationDetailsModule),
  },
  {
    path: 'partner-organizations',
    loadChildren: () => import('./partner-organizations/partner-organizations.module').then((m) => m.PartnerOrganizationsModule),
  },
  {
    path: 'oem-odm-inquiries',
    loadChildren: () => import('./oem-odm-inquiries/oem-odm-inquiries.module').then((m) => m.OemOdmInquiriesModule),
  },



  {
    path: 'CeoGreeting',
    loadChildren: () => import('./ceo-greeting/ceo-greeting.module').then((m) => m.CeoGreetingModule),
  },
  {
    path: 'Vision2030',
    loadChildren: () => import('./vision-2030/vision-2030.module').then((m) => m.Vision2030Module),
  },
  {
    path: 'CompanyHistory',
    loadChildren: () => import('./company-history/company-history.module').then((m) => m.CompanyHistoryModule),
  },
  {
    path: 'SocialContribution',
    loadChildren: () => import('./social-contribution/social-contribution.module').then((m) => m.SocialContributionModule),
  },
  {
    path: 'AffiliateInquiry',
    loadChildren: () => import('./affiliate-inquiry/affiliate-inquiry.module').then((m) => m.AffiliateInquiryModule),
  },
  {
    path: 'LocheNews',
    loadChildren: () => import('./loche-news/loche-news.module').then((m) => m.LocheNewsModule),
  },
  {
    path: 'CleanRoom',
    loadChildren: () => import('./clean-room/clean-room.module').then((m) => m.CleanRoomModule),
  },
  { path: 'shipping-policy', loadChildren: () => import('./shipping-policy/shipping-policy.module').then(m => m.ShippingPolicyModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
