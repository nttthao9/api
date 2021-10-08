const myapi = 'https://5fa3d0d9f10026001618df85.mockapi.io/products';

async function getapi(url) {
  //store response
  const response = await fetch(url);
  //store data in form of JSON
  const data = await response.json();
  if (response) {
    renderProducts(data);
  }
}
getapi(myapi);
const productList = document.querySelector('.product-list');
function renderProducts(data) {
  let product = data.map((item) => {
    return `<div class="item">
<img src=${item.image} class="image">
<div class='item-content'>
  <h3 class="text">${item.name}</h3>
  <p class = "desc">${item.description}</p>
  <span class="price"><span>$</span>${item.price}</span>
  <div class="change">
    <i class="fa fa-plus add"></i>
    <span class="count">0</span>
    <i class="fa fa-minus minus"></i>
  </div>
  <button type="submit" class="order">Order</button>
  </div>
  </div>`;
  });
  return (productList.innerHTML = product.join(''));
}
//post: là phương thức để tạo dữ liệu mới rồi gửi lên database
//get: là phương thức để lấy dữ liệu từ database
//put: là phương thức để cập nhật lại toàn bộ database
