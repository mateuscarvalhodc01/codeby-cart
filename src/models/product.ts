export default interface Product {
  id: string;
  name: string;
  brandName?: string | null;
  imageUrl: string;
  price: number;

  uniqueId?: string | null;
  productId?: string | null;
  productRefId?: string | null;
  refId?: string | null;
  ean?: string | null;
  skuName?: string | null;
  modalType?: string | null;
  parentItemIndex?: string | null;
  parentAssemblyBinding?: string | null;
  assemblies?: any[];
  priceValidUntil?: Date | string | null;
  tax?: number;
  listPrice?: number;
  manualPrice?: number | null;
  sellingPrice?: number;
  rewardValue?: number;
  isGift?: boolean;
  additionalInfo?: {
    brandName?: string | null;
    brandId?: string | null;
    offeringInfo?: string | null;
    offeringType?: string | null;
    offeringTypeId?: string | null;
  };
  preSaleDate?: Date | null;
  productCategoryIds?: string | null;
  productCategories?: any;
  quantity?: number;
  seller?: string | null;
  sellerChain?: string[];
  detailUrl?: string | null;
  components?: any[];
  bundleItems?: any[];
  attachments?: any[];
  attachmentOfferings?: any[];
  offerings?: any[];
  priceTags?: {
    name?: string | null;
    value?: number;
    rawValue?: number;
    isPercentual?: boolean;
    identifier?: string | null;
  }[];
  availability?: string | null;
  measurementUnit?: string | null;
  unitMultiplier?: number;
  manufacturerCode?: any;
}
