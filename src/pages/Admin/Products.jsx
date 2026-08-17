import "./Products.css";

import { useEffect, useState, useCallback } from "react";

import productApi from "../../api/productApi";

import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/Topbar";
import AddProductModal from "../../components/Admin/AddProductModal";
import adminApi from "../../api/adminApi";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [company, setCompany] = useState("All");

  const [featured, setFeatured] = useState("All");

  const [categories, setCategories] = useState([]);

  const [companies, setCompanies] = useState([]);

  const loadFilters = useCallback(async () => {

    try {

      const response = await productApi.get("/products/filters");

      setCategories(response.data.categories);

      setCompanies(response.data.companies);

    }

    catch (error) {

      console.error(error);

    }

  }, []);



  const loadProducts = useCallback(async () => {

    try {

      const response = await productApi.get(

        "/products",

        {

          params: {

            search,

            category,

            company,

            featured

          }

        }

      );

      setProducts(response.data);

    }

    catch (error) {

      console.error(error);

    }

  }, [search,

    category,

    company,

    featured]);

  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(

      "Are you sure you want to delete this product?"

    );

    if (!confirmDelete) {

      return;

    }

    try {

      await adminApi.delete(

        `/admin/products/${id}`

      );

      alert("Product Deleted Successfully");

      loadProducts();

    }

    catch (error) {

      console.error(error);

      alert("Failed to Delete Product");

    }

  };

  useEffect(() => {

    loadProducts();

    loadFilters();

  }, [

    loadProducts,

    loadFilters

  ]);

  const [showModal, setShowModal] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  return (

    <div className="admin-layout">

      <Sidebar />

      <div className="admin-main">

        <Topbar />

        <div className="products-page">

          <div className="products-header">

            <div className="product-filters">

              <input
                type="text"
                placeholder="Search Product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >

                <option value="All">

                  All Categories

                </option>

                {

                  categories.map(item => (

                    <option

                      key={item}

                      value={item}

                    >

                      {item}

                    </option>

                  ))

                }

              </select>

              <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >

                <option value="All">

                  All Companies

                </option>

                {

                  companies.map(item => (

                    <option

                      key={item}

                      value={item}

                    >

                      {item}

                    </option>

                  ))

                }

              </select>

              <select
                value={featured}
                onChange={(e) => setFeatured(e.target.value)}
              >
                <option value="All">All Products</option>
                <option value="Yes">Featured</option>
                <option value="No">Not Featured</option>
              </select>

              <button

                onClick={() => {

                  setSearch("");

                  setCategory("All");

                  setCompany("All");

                  setFeatured("All");

                }}

              >

                Reset

              </button>

            </div>

            <h1>

              Products

            </h1>

            <button

              onClick={() =>

                setShowModal(true)

              }

            >

              + Add Product

            </button>

          </div>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Image</th>

                <th>Name</th>

                <th>Category</th>

                <th>Company</th>

                <th>Regular Price</th>

                <th>Offer Price</th>

                <th>Featured</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {

                products.map(product => (

                  <tr key={product.id}>

                    <td>{product.id}</td>

                    <td>

                      <img

                        src={product.image}

                        alt={product.name}

                      />

                    </td>

                    <td>{product.name}</td>

                    <td>{product.category}</td>

                    <td>{product.company}</td>

                    <td>₹{product.regular_price}</td>

                    <td>₹{product.offer_price}</td>

                    <td>

                      {product.featured ? "Yes" : "No"}

                    </td>

                    <td>

                      <button

                        onClick={() => {

                          setEditingProduct(product);

                          setShowModal(true);

                        }}

                      >

                        Edit

                      </button>

                      <button

                        onClick={() =>

                          deleteProduct(product.id)

                        }

                      >

                        Delete

                      </button>

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        </div>

      </div>
      {
        showModal && (

          <AddProductModal

            closeModal={() => {

              setShowModal(false);

              setEditingProduct(null);

            }}

            loadProducts={loadProducts}

            editingProduct={editingProduct}

          />

        )
      }

    </div>

  );

}

export default Products;