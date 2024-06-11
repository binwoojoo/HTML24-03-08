import Product from "./components/Product.js";
import ProductItem from "./components/ProductItem.js";

// 상품 데이터
const p1 = new Product(
  "에어팟",
  200000,
  "에어팟으로 노래를 들어요",
  "https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
);

const p2 = new Product(
  "족발",
  40000,
  "냠냠쩝쩝 족발은 앞다리야~",
  "https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp"
);

// 서버에서 전송된 JSON
const productList = {
  products: [
    p1,
    p2,
    new Product(
      "요구르트",
      500,
      "요거어어어어어어르트",
      "https://img-cf.kurly.com/shop/data/goods/1630556476801z0.jpg"
    ),
    new Product(
        "햄버거",
        7000,
        "햄븍",
        "https://health.chosun.com/site/data/img_dir/2024/01/22/2024012201607_0.jpg"
      ),
  ],

  render() {
    const $prodList = document.createElement("ul");
    $prodList.classList.add("product-list");
    // 반복해서 li태그를 생성
    // console.log('products: ', this.products);
    this.products.forEach((prod) => {

      const product = new ProductItem(prod);
      
      $prodList.appendChild(product.render());
    });

    // div#app에 ul추가
    document.getElementById("app").appendChild($prodList);
  },
};

productList.render();