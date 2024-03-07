async function getAllProduct() {
  try {
    let promise = await axios.get("https://shop.cyberlearn.vn/api/Product");
    renderProduct(promise.data.content);
  } catch (error) {
    console.log(error);
  }
}

function renderProduct(arr) {
  let content = "";
  for (let product of arr) {
    content += `
        <div class="col-md-4 col-lg-3 col-sm-6 col-6 my-3">
          <a href="https://vlxx.moe/video/qua-dem-tai-mot-nha-tro-suoi-nuoc-nong-cung-sep/2640/"  >
            <div class="product-common  mt-2 border border-white rounded-4  p-1"; style="background-image: linear-gradient(to right bottom, #e3bde7, #c1c5fe, #8bd0ff, #49d9fc, #2ededb, #42e1ce, #59e3c0, #6fe4b1, #68eac1, #63f0d1, #60f6e1, #5ffbf1)";>
              <img src="${product.image}" class="w-100 imgproduct" />
              <div class="  px-2">
                  <p style="font-size: 14px; overflow: hidden; color:#747576">${product.shortDescription}</p>
                  <i class="far fa-star tick"></i>
                  <i class="far fa-star tick"></i>
                  <i class="far fa-star tick"></i>
                  <i class="far fa-star tick"></i>
                  <i class="far fa-star tick"></i>
              </div>
              <hr  />
              <div class="product-name text-center">
                <h4>${product.name}</h4>
              </div>
              <div class="price-box text-center ">
                <span class="new-price">${product.price}$</span>
              </div>
            </div>
          </a>
        </div>`;
  }
  document.querySelector(".render_product").innerHTML = content;
}
getAllProduct();

