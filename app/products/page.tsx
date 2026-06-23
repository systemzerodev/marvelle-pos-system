export default function ProductsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-5xl font-bold">Products</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Stock</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">Chiffon Cake Pandan</td>
              <td className="p-4">Chiffon Cake</td>
              <td className="p-4">Rp 65.000</td>
              <td className="p-4">10</td>
              <td className="p-4">Edit</td>
            </tr>

            <tr className="border-b">
              <td className="p-4">Butter Cake Vanilla</td>
              <td className="p-4">Butter Cake</td>
              <td className="p-4">Rp 75.000</td>
              <td className="p-4">8</td>
              <td className="p-4">Edit</td>
            </tr>

            <tr className="border-b">
              <td className="p-4">Brownies Panggang</td>
              <td className="p-4">Brownies</td>
              <td className="p-4">Rp 80.000</td>
              <td className="p-4">15</td>
              <td className="p-4">Edit</td>
            </tr>

            <tr>
              <td className="p-4">Marble Cake</td>
              <td className="p-4">Marble Cake</td>
              <td className="p-4">Rp 70.000</td>
              <td className="p-4">12</td>
              <td className="p-4">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
