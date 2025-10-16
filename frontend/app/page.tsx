import ProductCard, { Product } from '../components/ProductCard';

async function getProducts(): Promise<Product[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    if (!base) throw new Error('no api');
    const res = await fetch(`${base}/products`, { cache: 'no-store' });
    if (!res.ok) throw new Error('api error');
    return res.json();
  } catch {
    // داده آزمایشی اگر بک‌اند هنوز آماده نیست
    return [
      { id: '1', name: 'ماشین لباسشویی', description: 'کم‌مصرف با ظرفیت بالا', price: 130000000 },
      { id: '2', name: 'تلویزیون 55 اینچ', description: 'هوشمند 4K', price: 150000000 },
      { id: '3', name: 'یخچال فریزر', description: 'کم‌مصرف و کم‌صدا', price: 200000000 }
    ];
  }
}

export default async function HomePage() {
  const products = await getProducts();
  return (
    <>
      <section className="mb-6">
        <h1 className="text-2xl font-bold mb-2">به فروشگاه آنلاین خوش آمدید</h1>
        <p className="text-gray-600">لوازم خانگی منتخب با قیمت رقابتی</p>
      </section>
      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </section>
    </>
  );
}
