import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>

      <Link href="/mini-e-commerce-product-catalog">
        Go to Mini-E Commerce Product Catalog
      </Link>
    </div>
  );
}