function openProduct(id) {
  currentProduct = products.find(p => p.id === id);
  pvQty = 1;
  
  // dados atualizados
  document.getElementById('pv-img').src = currentProduct.img;
  document.getElementById('pv-name').innerText = currentProduct.name;
  
  // transiçao
  document.getElementById('home-view').classList.add('hidden-view');
  document.getElementById('product-view').classList.add('active');
  window.scrollTo(0, 0);
}
