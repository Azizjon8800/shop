"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_product_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "index",
  mounted: function mounted() {
    $(document).trigger('changed');
    this.getProducts();
    this.getFilterList();
  },
  data: function data() {
    return {
      products: [],
      popupProduct: null,
      filterList: [],
      categories: [],
      colors: [],
      tags: [],
      prices: [],
      pagination: []
    };
  },
  methods: {
    addToCart: function addToCart(id, isSingle) {
      var qty = isSingle ? 1 : $('.qtyValue').val();
      var cart = localStorage.getItem('cart');
      $('.qtyValue').val(1);
      var newProduct = [{
        'id': id,
        'qty': qty
      }];
      if (!cart) {
        localStorage.setItem('cart', JSON.stringify(newProduct));
      } else {
        cart = JSON.parse(cart);
        cart.forEach(function (productInCart) {
          if (productInCart.id === id) {
            productInCart.qty = Number(productInCart.qty) + Number(qty);
            newProduct = null;
          }
        });
        Array.prototype.push.apply(cart, newProduct);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    },
    filterProducts: function filterProducts() {
      var prices = $('#priceRange').val();
      this.prices = prices.replace(/[\s+]|[$]/g, '').split('-');
      this.getProducts();
    },
    addColor: function addColor(id) {
      if (!this.colors.includes(id)) {
        this.colors.push(id);
      } else {
        this.colors = this.colors.filter(function (elem) {
          return elem !== id;
        });
      }
    },
    addTag: function addTag(id) {
      if (!this.tags.includes(id)) {
        this.tags.push(id);
      } else {
        this.tags = this.tags.filter(function (elem) {
          return elem !== id;
        });
      }
    },
    getProducts: function getProducts() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.axios.post('/api/products', {
        'categories': this.categories,
        'colors': this.colors,
        'tags': this.tags,
        'prices': this.prices,
        'page': page
      }).then(function (res) {
        _this.products = res.data.data;
        _this.pagination = res.data.meta;
        console.log(res);
      })["finally"](function (v) {
        $(document).trigger('changed');
      });
    },
    getProduct: function getProduct(id) {
      var _this2 = this;
      this.axios.get("/api/products/".concat(id)).then(function (res) {
        _this2.popupProduct = res.data.data;
        console.log(res);
      })["finally"](function (v) {
        $(document).trigger('changed');
      });
    },
    getFilterList: function getFilterList() {
      var _this3 = this;
      this.axios.get("/api/products/filters").then(function (res) {
        _this3.filterList = res.data;
        if ($("#price-range").length) {
          $("#price-range").slider({
            range: true,
            min: _this3.filterList.price.min,
            max: _this3.filterList.price.max,
            values: [_this3.filterList.price.min, _this3.filterList.price.max],
            slide: function slide(event, ui) {
              $("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
          });
          $("#priceRange").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));
        }
      })["finally"](function (v) {
        $(document).trigger('changed');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/index.vue?vue&type=template&id=f5b43f7a":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/index.vue?vue&type=template&id=f5b43f7a ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "overflow-hidden"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"breadcrumb-area\" style=\"background-image:url(src/assets/images/inner-pages/breadcum-bg.png);\"><div class=\"container\"><div class=\"row\"><div class=\"col-xl-12\"><div class=\"breadcrumb-content pb-60 text-center wow fadeInUp animated\"><h2>Shop Grid</h2><div class=\"breadcrumb-menu\"><ul><li><a href=\"index.html\"><i class=\"flaticon-home pe-2\"></i>Home</a></li><li><i class=\"flaticon-next\"></i></li><li class=\"active\">Shop Grid</li></ul></div></div></div></div></div></div>", 1);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"product-categories-one pb-60\"><div class=\"container\"><div class=\"row wow fadeInUp animated\"><div class=\"col-xl-12\"><div class=\"product-categories-one__inner\"><ul><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"src/assets/images/shop/product-categories-v1-img1.png\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Accessories</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"src/assets/images/shop/product-categories-v1-img2.png\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Furnitures</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"src/assets/images/shop/product-categories-v1-img3.png\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Jewellery</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"src/assets/images/shop/product-categories-v1-img4.png\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Shoes</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"src/assets/images/shop/product-categories-v1-img5.png\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Electronics</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"src/assets/images/shop/product-categories-v1-img6.png\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Fashion</h6></a></div></li></ul></div></div></div></div></section>", 1);
var _hoisted_4 = {
  "class": "product-grid pt-60 pb-120"
};
var _hoisted_5 = {
  "class": "container"
};
var _hoisted_6 = {
  "class": "row gx-4"
};
var _hoisted_7 = {
  "class": "col-xl-3 col-lg-4"
};
var _hoisted_8 = {
  "class": "shop-grid-sidebar"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "remove-sidebar d-lg-none d-block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cross"
})], -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "sidebar-holder"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form action=\"#0\" class=\"footer-default__subscrib-form m-0 p-0 wow fadeInUp animated\"><div class=\"footer-input-box p-0\"><input type=\"email\" placeholder=\"Email address\" name=\"email\"> <button type=\"submit\" class=\"subscribe_btn\"><i class=\"flaticon-magnifying-glass\"></i></button></div></form>", 1);
var _hoisted_12 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Select Categories", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "checkbox-item"
};
var _hoisted_15 = {
  "class": "form-group"
};
var _hoisted_16 = ["value", "id"];
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_18 = ["for"];
var _hoisted_19 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Color Option ", -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "color-option"
};
var _hoisted_22 = ["onClick"];
var _hoisted_23 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Filter By Price", -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "slider-box"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "price-range",
  "class": "slider"
}, null, -1 /* HOISTED */);
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "output-price"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "priceRange"
}, "Price:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "priceRange",
  readonly: ""
})], -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Tags ", -1 /* HOISTED */);
var _hoisted_30 = {
  "class": "popular-tag"
};
var _hoisted_31 = ["onClick"];
var _hoisted_32 = {
  "class": "col-xl-9 col-lg-8"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "shop-grid-page-top-info p-0 justify-content-md-between justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left-box wow fadeInUp animated"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Showing 1–12 of 50 Results")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "right-box justify-content-md-between justify-content-center wow fadeInUp animated"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "short-by"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "select-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
  "class": "wide"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  "data-display": "Short by latest"
}, "Featured "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "1"
}, "Best selling "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "2"
}, "Alphabetically, A-Z"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "Alphabetically, Z-A"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "Price, low to high"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "Price, high to low"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "Date, old to new")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-view-style d-flex justify-content-md-between justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills",
  id: "pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link active",
  id: "pills-grid-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-grid",
  type: "button",
  role: "tab",
  "aria-selected": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-grid"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-list-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-list",
  type: "button",
  role: "tab",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-list"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "slidebarfilter d-lg-none d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-edit"
})])])])])])], -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "row"
};
var _hoisted_35 = {
  "class": "col-12"
};
var _hoisted_36 = {
  "class": "tab-content",
  id: "pills-tabContent"
};
var _hoisted_37 = {
  "class": "tab-pane fade show active",
  id: "pills-grid",
  role: "tabpanel",
  "aria-labelledby": "pills-grid-tab"
};
var _hoisted_38 = {
  "class": "row"
};
var _hoisted_39 = {
  "class": "col-xl-4 col-lg-6 col-6"
};
var _hoisted_40 = {
  "class": "products-three-single w-100 mt-30"
};
var _hoisted_41 = {
  "class": "products-three-single-img"
};
var _hoisted_42 = {
  href: "shop-details-3.html",
  "class": "d-block"
};
var _hoisted_43 = ["src"];
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "assets/images/home-three/productss2-hover-1.png",
  alt: "",
  "class": "hover-img"
}, null, -1 /* HOISTED */);
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "products-grid-one__badge-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "bg_base badge new"
}, "New")], -1 /* HOISTED */);
var _hoisted_46 = ["onClick"];
var _hoisted_47 = {
  "class": "products-grid__usefull-links"
};
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "wishlist.html"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-heart"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " wishlist")])], -1 /* HOISTED */);
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "compare.html"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-left-and-right-arrows"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " compare")])], -1 /* HOISTED */);
var _hoisted_50 = ["onClick", "href"];
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-visibility"
}, null, -1 /* HOISTED */);
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " quick view", -1 /* HOISTED */);
var _hoisted_53 = [_hoisted_51, _hoisted_52];
var _hoisted_54 = ["id"];
var _hoisted_55 = {
  key: 0,
  "class": "container"
};
var _hoisted_56 = {
  "class": "row justify-content-between align-items-center"
};
var _hoisted_57 = {
  "class": "col-lg-6"
};
var _hoisted_58 = {
  key: 0,
  "class": "quick-view__left-content"
};
var _hoisted_59 = {
  "class": "tabs"
};
var _hoisted_60 = {
  "class": "popup-product-thumb-box"
};
var _hoisted_61 = {
  "class": "tab-nav popup-product-thumb"
};
var _hoisted_62 = ["href"];
var _hoisted_63 = ["src"];
var _hoisted_64 = {
  "class": "popup-product-main-image-box"
};
var _hoisted_65 = ["id"];
var _hoisted_66 = {
  "class": "popup-product-single-image"
};
var _hoisted_67 = ["src"];
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})], -1 /* HOISTED */);
var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})], -1 /* HOISTED */);
var _hoisted_71 = {
  "class": "col-lg-6"
};
var _hoisted_72 = {
  "class": "popup-right-content"
};
var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(112)</span></div>", 1);
var _hoisted_74 = {
  "class": "text"
};
var _hoisted_75 = {
  "class": "price"
};
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, " In stuck", -1 /* HOISTED */);
var _hoisted_77 = {
  "class": "color-varient"
};
var _hoisted_78 = ["onClick"];
var _hoisted_79 = {
  "class": "add-product"
};
var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Qty:", -1 /* HOISTED */);
var _hoisted_81 = {
  "class": "button-group"
};
var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div>", 1);
var _hoisted_83 = ["onClick"];
var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\"><img src=\"src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div>", 1);
var _hoisted_85 = {
  "class": "products-three-single-content text-center"
};
var _hoisted_86 = {
  key: 0,
  "class": "row"
};
var _hoisted_87 = {
  "class": "col-12 d-flex justify-content-center wow fadeInUp animated"
};
var _hoisted_88 = {
  "class": "pagination text-center"
};
var _hoisted_89 = {
  key: 0,
  "class": "next"
};
var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-left-arrows",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_91 = [_hoisted_90];
var _hoisted_92 = ["onClick"];
var _hoisted_93 = {
  key: 1
};
var _hoisted_94 = {
  key: 1,
  "class": "next"
};
var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next-1",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_96 = [_hoisted_95];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Breadcrumb Style2"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Breadcrumb Style2"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Product Categories One"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Product Categories One"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start product-grid"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filterList.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      value: category.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $data.categories = $event;
      }),
      type: "checkbox",
      id: category.id
    }, null, 8 /* PROPS */, _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.categories]]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": category.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.title), 9 /* TEXT, PROPS */, _hoisted_18)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_21, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filterList.colors, function (color) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addColor(color.id);
      }, ["prevent"]),
      href: "#0",
      "class": "color-option-single",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background: #".concat(color.title))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(color.title), 1 /* TEXT */)], 12 /* STYLE, PROPS */, _hoisted_22)]);
  }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.filterProducts && $options.filterProducts.apply($options, arguments);
    }, ["prevent"])),
    "class": "filterbtn",
    type: "submit"
  }, " Filter ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_30, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filterList.tags, function (tag) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addTag(tag.id);
      }, ["prevent"]),
      href: "#0"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tag.title), 9 /* TEXT, PROPS */, _hoisted_31)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: product.image_url,
      "class": "first-img",
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_43), _hoisted_44]), _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addToCart(product.id, true);
      }, ["prevent"]),
      href: "cart.html",
      "class": "addcart btn--primary style2"
    }, " Add To Cart ", 8 /* PROPS */, _hoisted_46), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [_hoisted_48, _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return $options.getProduct(product.id);
      },
      href: "#popup".concat(product.id),
      "class": "popup_link"
    }, _hoisted_53, 8 /* PROPS */, _hoisted_50)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      id: "popup".concat(product.id),
      "class": "product-gird__quick-view-popup mfp-hide"
    }, [$data.popupProduct ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [$data.popupProduct.product_images.length > 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.popupProduct.product_images, function (productImage) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "#tabb".concat(productImage.id)
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: productImage.url,
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_63)], 8 /* PROPS */, _hoisted_62)]);
    }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.popupProduct.product_images, function (productImage) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        id: "tabb".concat(productImage.id),
        "class": "tab-item popup-product-image"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: productImage.url,
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_67)])], 8 /* PROPS */, _hoisted_65);
    }), 256 /* UNKEYED_FRAGMENT */)), _hoisted_68, _hoisted_69, _hoisted_70])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popupProduct.title), 1 /* TEXT */), _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popupProduct.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popupProduct.price) + " USD ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", null, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popupProduct.old_price) + " USD", 1 /* TEXT */)]), _hoisted_76]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.popupProduct.group_products, function (groupProduct) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(groupProduct.colors, function (color) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.getProduct(groupProduct.id);
          }, ["prevent"]),
          href: "#0",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background: #".concat(color.title, ";")),
          "class": "color-name"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(color.title), 1 /* TEXT */)], 12 /* STYLE, PROPS */, _hoisted_78);
      }), 256 /* UNKEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
    }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [_hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addToCart(product.id);
      }, ["prevent"]),
      "class": "btn--primary"
    }, " Add to Cart ", 8 /* PROPS */, _hoisted_83)])]), _hoisted_84])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_54), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.category.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'products.show',
        params: {
          id: product.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.title), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", null, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.old_price), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" $ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price), 1 /* TEXT */)])])])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), $data.pagination.last_page > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_88, [$data.pagination.current_page !== 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getProducts($data.pagination.current_page - 1);
    }, ["prevent"])),
    href: "#0"
  }, _hoisted_91)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.pagination.links, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [Number(link.label) && $data.pagination.current_page - link.label < 2 && $data.pagination.current_page - link.label > -2 || Number(link.label) === 1 || Number(link.label) === $data.pagination.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.getProducts(link.label);
      }, ["prevent"]),
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(link.active ? 'active' : ''),
      href: "#0"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_92)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), Number(link.label) && $data.pagination.current_page !== 3 && $data.pagination.current_page - link.label === 2 || Number(link.label) && $data.pagination.current_page !== $data.pagination.last_page - 2 && $data.pagination.current_page - link.label === -2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_93, "...")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256 /* UNKEYED_FRAGMENT */)), $data.pagination.current_page !== $data.pagination.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getProducts($data.pagination.current_page + 1);
    }, ["prevent"])),
    href: "#0"
  }, _hoisted_96)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End product-grid")])]);
}

/***/ }),

/***/ "./resources/js/views/product/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/product/index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_f5b43f7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f5b43f7a */ "./resources/js/views/product/index.vue?vue&type=template&id=f5b43f7a");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/views/product/index.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_f5b43f7a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/product/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/product/index.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/product/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/product/index.vue?vue&type=template&id=f5b43f7a":
/*!****************************************************************************!*\
  !*** ./resources/js/views/product/index.vue?vue&type=template&id=f5b43f7a ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_f5b43f7a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_f5b43f7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=f5b43f7a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/index.vue?vue&type=template&id=f5b43f7a");


/***/ })

}]);