import { ProductDetail } from "@/components/catalog/product-detail";
import type { TemplateProps } from "./shared";
import { SplitBenefitTemplate } from "./split-benefit";
import { ComparisonTemplate } from "./comparison";
import { BusinessCardsTemplate } from "./business-cards";
import { FeatureGridTemplate } from "./feature-grid";
import { SpecSheetTemplate } from "./spec-sheet";
import { StepsFlowTemplate } from "./steps-flow";
import { IndustryGridTemplate } from "./industry-grid";
import { OfflineReliabilityTemplate } from "./offline-reliability";
import { LifecycleTimelineTemplate } from "./lifecycle-timeline";
import { MetricsLedTemplate } from "./metrics-led";
import { GalleryShowcaseTemplate } from "./gallery-showcase";
import { DeploymentTriptychTemplate } from "./deployment-triptych";
import { ModuleBandsTemplate } from "./module-bands";
import { DistributionNetworkTemplate } from "./distribution-network";
import { ConversionFlowTemplate } from "./conversion-flow";
import { MenuBoardTemplate } from "./menu-board";
import { HardwareGalleryTemplate } from "./hardware-gallery";
import { HardwareSpotlightTemplate } from "./hardware-spotlight";
import { HardwareCompareTemplate } from "./hardware-compare";
import { AccessoryGridTemplate } from "./accessory-grid";
import { SecurityFocusTemplate } from "./security-focus";
import { InfrastructureTemplate } from "./infrastructure";

/**
 * Per-product page templates. Each product's `design` key maps to a bespoke,
 * full-page template (its own layout + elegant colour theme). Products without
 * a design fall back to the default ProductDetail renderer.
 */
const REGISTRY: Record<string, (p: TemplateProps) => React.ReactNode> = {
  "split-benefit": SplitBenefitTemplate,
  comparison: ComparisonTemplate,
  "business-cards": BusinessCardsTemplate,
  "feature-grid": FeatureGridTemplate,
  "spec-sheet": SpecSheetTemplate,
  "steps-flow": StepsFlowTemplate,
  "industry-grid": IndustryGridTemplate,
  "offline-reliability": OfflineReliabilityTemplate,
  "lifecycle-timeline": LifecycleTimelineTemplate,
  "metrics-led": MetricsLedTemplate,
  "gallery-showcase": GalleryShowcaseTemplate,
  "deployment-triptych": DeploymentTriptychTemplate,
  "module-bands": ModuleBandsTemplate,
  "distribution-network": DistributionNetworkTemplate,
  "conversion-flow": ConversionFlowTemplate,
  "menu-board": MenuBoardTemplate,
  "hardware-gallery": HardwareGalleryTemplate,
  "hardware-spotlight": HardwareSpotlightTemplate,
  "hardware-compare": HardwareCompareTemplate,
  "accessory-grid": AccessoryGridTemplate,
  "security-focus": SecurityFocusTemplate,
  infrastructure: InfrastructureTemplate,
};

export function ProductPage({ product, category, related }: TemplateProps) {
  const Template = (product.design && REGISTRY[product.design]) || ProductDetail;
  return <Template product={product} category={category} related={related} />;
}
