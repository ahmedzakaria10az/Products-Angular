import { Injectable } from '@angular/core';
import { IProduct } from '../../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticDataService {
  prdList: IProduct[];
  constructor() {
    this.prdList = [
      {
        id: 1,
        title: 'Essence Mascara Lash Princess',
        description:
          'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
        category: 'beauty',
        price: 9.99,
        stock: 1,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
      },
      {
        id: 2,
        title: 'Eyeshadow Palette with Mirror',
        description:
          "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: 'beauty',
        price: 19.99,
        stock: 44,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png',
      },
      {
        id: 3,
        title: 'Powder Canister',
        description:
          'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
        category: 'beauty',
        price: 14.99,
        stock: 0,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
      },
      {
        id: 4,
        title: 'Red Lipstick',
        description:
          'The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',
        category: 'groceries',
        price: 12.99,
        stock: 68,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png',
      },
      {
        id: 5,
        title: 'Red Nail Polish',
        description:
          'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
        category: 'fragrances',
        price: 8.99,
        stock: 71,
        thumbnail:
          'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png',
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.prdList;
  }

  getProductByCategory(category: string): IProduct[] {
    return this.prdList.filter((prd) => prd.category === category);
  }

  getProductDetailsById(ProductId: number): IProduct | null {
    return this.prdList.find((prd) => prd.id === ProductId) || null;
  }

  postProduct(prd: IProduct) {
    this.prdList.push(prd);
  }

  deleteProductById(id: number) {
    this.prdList = this.prdList.filter((prd) => prd.id !== id);
  }

  updateProduct(prd: IProduct) {
    this.prdList = this.prdList.map((p) =>
      p.id === prd.id ? { ...p, ...prd } : prd
    );
  }
}
