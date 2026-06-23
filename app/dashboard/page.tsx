export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-8">Dashboard</h1>

      {/* Welcome Banner */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold">Welcome to Marvelle POS 👋</h2>

        <p className="text-gray-500 mt-2">
          Manage products, sales transactions, and business reports from one
          place.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Sales */}
        <div className="bg-blue-500 text-white rounded-xl shadow p-6">
          <p className="text-sm opacity-80">Sales Today</p>

          <h2 className="text-4xl font-bold mt-2">Rp 0</h2>
        </div>

        {/* Orders */}
        <div className="bg-green-500 text-white rounded-xl shadow p-6">
          <p className="text-sm opacity-80">Orders Today</p>

          <h2 className="text-4xl font-bold mt-2">0</h2>
        </div>

        {/* Products */}
        <div className="bg-orange-500 text-white rounded-xl shadow p-6">
          <p className="text-sm opacity-80">Products</p>

          <h2 className="text-4xl font-bold mt-2">0</h2>
        </div>

        {/* QRIS */}
        <div className="bg-purple-500 text-white rounded-xl shadow p-6">
          <p className="text-sm opacity-80">QRIS Sales</p>

          <h2 className="text-4xl font-bold mt-2">Rp 0</h2>
        </div>
      </div>
    </div>
  );
}
