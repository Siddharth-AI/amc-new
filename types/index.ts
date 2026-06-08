/**
 * TypeScript Types
 * All database and API types
 */


export interface AdminUser {
  id: string;
  full_name: string;
  email: string;
  password: string;
  role: 'admin' | 'super_admin';
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  href: string;
  product_count: number;
  id: string;
  name: string;
  slug: string;
  title: string | null;
  description: string | null; // Added description field
  img_original_name: string | null;
  base_url: string | null;
  img_name: string | null;
  img_type: string | null;
  // NEW FIELDS
  deployment_type: string | null;
  external_url: string | null;
  is_external: boolean;
  product_type: 'Software' | 'Hardware' | 'Service' | null;
  category_order: number;
  // EXISTING FIELDS
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  title: string | null;
  description: string | null;
  is_warranty: boolean;
  warranty_period: string | null;
  // NEW FIELDS
  deployment_type: string | null;
  external_url: string | null;
  is_external: boolean;
  product_type: 'Software' | 'Hardware' | 'Service' | null;
  features: string[] | null; // JSONB array
  pricing_info: string | null;
  // EXISTING FIELDS
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface ProductImage {
  id: string;
  product_id: string;
  original_name: string;
  base_url: string;
  name: string;
  type: string;
  is_primary: boolean;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface ProductKeyFeature {
  id: string;
  product_id: string;
  name: string;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface ProductSpecification {
  id: string;
  product_id: string;
  specification_key: string;
  specification_value: string;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string; // HTML content
  img_original_name: string | null;
  base_url: string | null;
  img_name: string | null;
  img_type: string | null;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface BlogTag {
  id: string;
  blog_id: string;
  name: string;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface Enquiry {
  id: string;
  category_id: string | null;
  product_id: string | null;
  full_name: string;
  email: string;
  phone: string;
  company_name: string | null;
  message: string;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

export interface ContactUs {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
}

// Extended types with relations
export interface ProductWithDetails extends Product {
  category?: Category;
  images?: ProductImage[];
  key_features?: ProductKeyFeature[];
  specifications?: ProductSpecification[];
}

export interface BlogWithTags extends Blog {
  tags?: BlogTag[];
}

// Form data types for admin
export interface CategoryFormData {
  name: string;
  slug: string;
  title?: string;
  description?: string; // Added description field
  deployment_type?: string;
  external_url?: string;
  is_external?: boolean;
  product_type: 'Software' | 'Hardware' | 'Service';
  category_order?: number;
  img_original_name?: string;
  base_url?: string;
  img_name?: string;
  img_type?: string;
}

export interface ProductFormData {
  category_id: string;
  name: string;
  slug: string;
  title?: string;
  description?: string;
  deployment_type?: string;
  external_url?: string;
  is_external?: boolean;
  product_type?: 'Software' | 'Hardware' | 'Service';
  features?: string[];
  pricing_info?: string;
  is_warranty?: boolean;
  warranty_period?: string;
}

// Deployment type options
export const DEPLOYMENT_TYPES = [
  'Cloud',
  'On-Premise', 
  'Cloud/On-Premise',
  'Hardware',
  'Service'
] as const;

export const PRODUCT_TYPES = [
  'Software',
  'Hardware', 
  'Service'
] as const;

export type DeploymentType = typeof DEPLOYMENT_TYPES[number];
export type ProductType = typeof PRODUCT_TYPES[number];

