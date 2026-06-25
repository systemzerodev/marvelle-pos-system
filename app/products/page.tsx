export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Chiffon Cake Pandan",
      category: "Chiffon Cake",
      price: 65000,
      stock: 10,
    },
    {
      id: 2,
      name: "Butter Cake Vanilla",
      category: "Butter Cake",
      price: 75000,
      stock: 8,
    },
    {
      id: 3,
      name: "Brownies Panggang",
      category: "Brownies",
      price: 80000,
      stock: 15,
    },
    {
      id: 4,
      name: "Marble Cake",
      category: "Marble Cake",
      price: 70000,
      stock: 3,
    },
  ];

  const totalProducts = products.length;

  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

  const totalCategories = new Set(products.map((product) => product.category))
    .size;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-5xl font-bold">Products</h1>
          <p className="text-gray-500 mt-2">Manage your bakery products</p>
        </div>

        <button
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-xl
            shadow-md
            hover:bg-blue-700
            transition-colors
            cursor-pointer
          ">
          + Add Product
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-4xl font-bold mt-2">{totalProducts}</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
          <p className="text-gray-500">Total Stock</p>
          <h2 className="text-4xl font-bold mt-2">{totalStock}</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
          <p className="text-gray-500">Categories</p>
          <h2 className="text-4xl font-bold mt-2">{totalCategories}</h2>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-5 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search product..."
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              p-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-5">Name</th>
              <th className="text-left p-5">Category</th>
              <th className="text-left p-5">Price</th>
              <th className="text-left p-5">Stock</th>
              <th className="text-left p-5">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-5">{product.name}</td>

                <td className="p-5">{product.category}</td>

                <td className="p-5">
                  Rp {product.price.toLocaleString("id-ID")}
                </td>

                <td
                  className={`p-5 font-medium ${
                    product.stock <= 5 ? "text-red-600" : "text-green-600"
                  }`}>
                  {product.stock}
                </td>

                <td className="p-5">
                  <button className="text-blue-600 hover:underline cursor-pointer mr-4">
                    Edit
                  </button>

                  <button className="text-red-600 hover:underline cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State (untuk versi database nanti) */}
        {products.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No products found
          </div>
        )}
      </div>
    </div>
  );
}
