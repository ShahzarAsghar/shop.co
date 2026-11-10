import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import mockProducts from '@/assets/mockProducts.json';

export const PRODUCTS_COLLECTION = 'products';

/**
 * Fetch products from Firestore.
 * Returns an empty array if Firestore is unreachable/empty or env vars are missing.
 */
export async function fetchProducts({ category = null, pageSize = 8 } = {}) {
  if (!import.meta.env.VITE_FIREBASE_API_KEY) return [];

  try {
    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const constraints = [orderBy('title'), limit(category ? pageSize * 4 : pageSize * 3)];

    const snapshot = await getDocs(query(productsRef, ...constraints));
    if (snapshot.empty) return [];

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return category
      ? products.filter((p) => p.category === category)
      : products;
  } catch (error) {
    console.warn('[productService] Firestore fetch failed, falling back:', error);
    return [];
  }
}

/**
 * Fill each category with mock data until `count` items are available.
 */
export function mergeWithMock(products, { category, count }) {
  if (products.length >= count) return products.slice(0, count);

  const mockByCategory = mockProducts.filter((p) => p.category === category);
  const fallback = mockByCategory.length >= count ? mockByCategory : mockProducts;
  return fallback.slice(0, count);
}

/**
 * Hook-friendly helper used by ProductSection. Always resolves with data —
 * Firestore first, mock dataset as a fallback so the UI never breaks.
 */
export async function getProductsForSection(category, count = 4) {
  const remote = await fetchProducts({ category });
  return mergeWithMock(remote, { category, count });
}
