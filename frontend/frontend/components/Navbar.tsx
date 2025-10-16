import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">فروشگاه لوازم خانگی</Link>
        <nav className="space-x-4 space-x-reverse">
          <Link href="/" className="hover:underline">خانه</Link>
          <Link href="/products" className="hover:underline">محصولات</Link>
        </nav>
      </div>
    </header>
  );
}
