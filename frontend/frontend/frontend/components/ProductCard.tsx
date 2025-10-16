export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-2xl bg-white shadow p-4">
      <div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center">تصویر</div>
      <h3 className="font-semibold mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <div className="font-bold text-green-600">{product.price.toLocaleString()} تومان</div>
    </div>
  );
}
