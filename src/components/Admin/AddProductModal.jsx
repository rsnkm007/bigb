import "./AddProductModal.css";

import { useState } from "react";

import adminApi from "../../api/adminApi";

function AddProductModal({

  closeModal,

  loadProducts,

  editingProduct

}) {

  const [formData, setFormData] = useState(() => ({

    featured: editingProduct ? editingProduct.featured === 1 : false,

    category: editingProduct?.category || "",

    company: editingProduct?.company || "",

    name: editingProduct?.name || "",

    description: editingProduct?.description || "",

    regular_price: editingProduct?.regular_price || "",

    offer_price: editingProduct?.offer_price || "",

    image: editingProduct?.image || ""

}));


  const handleChange = (e) => {

    const {

      name,
      value,
      type,
      checked

    } = e.target;

    setFormData({

      ...formData,

      [name]:

        type === "checkbox"

          ? checked

          : value

    });

  };

  const saveProduct = async () => {

    try {

      if (editingProduct) {

        await adminApi.put(

          `/admin/products/${editingProduct.id}`,

          {

            ...formData,

            featured: formData.featured ? 1 : 0

          }

        );

        alert("Product Updated Successfully");

      }

      else {

        await adminApi.post(

          "/admin/products",

          {

            ...formData,

            featured: formData.featured ? 1 : 0

          }

        );

        alert("Product Added Successfully");

      }

      loadProducts();

      closeModal();

    }

    catch (error) {

      console.error(error);

      alert("Operation Failed");

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>

    {

        editingProduct

            ? "Update Product"

            : "Add Product"

    }

</h2>

        <input
    name="name"
    value={formData.name}
    placeholder="Product Name"
    onChange={handleChange}
/>

        <input
          name="category"
          value={formData.category}
          placeholder="Category"
          onChange={handleChange}
        />

        <input
          name="company"
          value={formData.company}
          placeholder="Company"
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          name="regular_price"
          value={formData.regular_price}
          type="number"
          placeholder="Regular Price"
          onChange={handleChange}
        />

        <input
          name="offer_price"
          value={formData.offer_price}
          type="number"
          placeholder="Offer Price"
          onChange={handleChange}
        />

        <input
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleChange}
        />

        <label>

          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />

          Featured Product

        </label>

        <div className="modal-buttons">

          <button

            onClick={saveProduct}

          >

            {

              editingProduct

                ? "Update Product"

                : "Add Product"

            }

          </button>

          <button

            onClick={closeModal}

          >

            Cancel

          </button>

        </div>

      </div>

    </div>

  );

}

export default AddProductModal;