"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & {
  quantity: number;
};

export default function PosPage() {
  const products: Product[] = [
    {
      id: 1,
      name: "Chiffon Cake Pandan",
      price: 65000,
    },
    {
      id: 2,
      name: "Butter Cake Vanilla",
      price: 75000,
    },
    {
      id: 3,
      name: "Brownies Panggang",
      price: 80000,
    },
    {
      id: 4,
      name: "Marble Cake",
      price: 70000,
    },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQty = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQty = (id: number) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert("Cart masih kosong");
      return;
    }

    alert(`Transaksi berhasil\nTotal: Rp ${total.toLocaleString("id-ID")}`);

    setCart([]);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold">POS</h1>
        <p className="text-gray-500 mt-2">
          Create transactions and manage sales
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Product List */}
        <div className="col-span-7 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 mb-6"
          />

          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => addToCart(product)}
                className="border rounded-xl p-4 cursor-pointer hover:bg-gray-50 hover:shadow-md transition">
                <h3 className="font-semibold text-lg">{product.name}</h3>

                <p className="text-blue-600 font-bold mt-2">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="col-span-5 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Cart</h2>

          <div className="border-b pb-4 mb-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">No items selected</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="border rounded-lg p-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>

                        <p className="text-sm text-gray-500">
                          Rp {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500">
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded">
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between text-xl font-bold mb-4">
            <span>Total</span>

            <span>Rp {total.toLocaleString("id-ID")}</span>
          </div>

          <div className="space-y-3">
            <button
              onClick={checkout}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
