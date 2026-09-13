// apps/company/app/[locale]/trip-requests/review/[id]/_types/types.ts

export interface SignatureInfo {
  name: string;
  licenseOrPhone: string;
  locationOrEmail: string;
  signatureSvgUrl?: string;
}

export interface VehicleInfoData {
  mileage: string;
  fuelPercentage: string;
  items: string[];
  dashboardImgUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface DamageReportData {
  title: string;
  place: string;
  type: string;
  description: string;
  mainImage: string;
  thumbnails: string[];
}

export interface TripProtocolData {
  id: string;
  headerDate: string;
  tripId: string;
  pickupLocation: string;
  pickupDate: string;
  deliveryLocation: string;
  deliveryDate: string;
  distance: string;
  duration: string;
  driverSignature: SignatureInfo;
  clientSignature: SignatureInfo;
  vehicleInfo: VehicleInfoData;
  gallery: GalleryItem[];
  damageReport: DamageReportData;
  driverNote: string;
}