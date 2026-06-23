import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold">Marvelle POS</h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="block rounded-lg p-3 hover:bg-gray-100">
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="block rounded-lg p-3 hover:bg-gray-100">
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/pos"
              className="block rounded-lg p-3 hover:bg-gray-100">
              POS
            </Link>
          </li>

          <li>
            <Link
              href="/transactions"
              className="block rounded-lg p-3 hover:bg-gray-100">
              Transactions
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              className="block rounded-lg p-3 hover:bg-gray-100">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
