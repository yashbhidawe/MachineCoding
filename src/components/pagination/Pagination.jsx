import React, { useState, useEffect } from "react";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [pageSkip, setPageSkip] = useState(0);

  const limit = 10;

  const getProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${pageSkip}`
      );
      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [pageSkip]);

  const goToNext = () => {
    if (pageSkip + limit < total) {
      setPageSkip(pageSkip + limit);
    }
  };

  const goToPrevious = () => {
    if (pageSkip >= limit) {
      setPageSkip(pageSkip - limit);
    }
  };

  const currentPage = Math.floor(pageSkip / limit) + 1;
  const totalPages = Math.ceil(total / limit) || 1;

  return (
    <div
      style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "Arial" }}
    >
      <h2 style={{ textAlign: "center" }}>Product List</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading products...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {!loading && !error && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
              }}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button onClick={goToPrevious} disabled={pageSkip === 0}>
          Previous
        </button>

        <span style={{ fontWeight: "bold" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={goToNext} disabled={pageSkip + limit >= total}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
