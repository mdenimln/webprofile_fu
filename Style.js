const bar = document.querySelector('.bar input');
const navi = document.querySelector('nav ul');

const filterItem = document.querySelector('.items');
const filterImg = document.querySelectorAll('.image');
const filterVidio = document.querySelectorAll('.vid');

const tombol = document.querySelector('.PotVid');
const filterGaleri = document.querySelectorAll('.galeri');

    
bar.onclick = function() {
  navi.classList.toggle('geser');
}

window.onload = ()=> { //once window loaded

  filterItem.onclick = (selectedItem)=> {
    if(selectedItem.target.classList.contains('item')){
      filterItem.querySelector('.on').classList.remove('on');
      selectedItem.target.classList.add('on');
      let filterName = selectedItem.target.getAttribute('data-name');
      filterImg.forEach((image)=>{
        let filterImages = image.getAttribute('data-name');
        if ((filterImages == filterName) || filterName == 'All') {
          image.classList.add('show');
          image.classList.remove('hide');
        } else {
          image.classList.add('hide');
          image.classList.remove('show');
        }
      });
      filterVidio.forEach((vidio)=>{
        let filterVidios = vidio.getAttribute('data-name');
        if ((filterVidios == filterName) || filterName == 'All') {
          vidio.classList.add('show');
          vidio.classList.remove('hide');
        } else {
          vidio.classList.add('hide');
          vidio.classList.remove('show');
        }
      });
    } 
  }
  
  tombol.onclick = (seleksiGaleri)=> {
    if (seleksiGaleri.target.classList.contains('PV')){
      tombol.querySelector('.on').classList.remove('on');
      seleksiGaleri.target.classList.add('on');
      let filterName = seleksiGaleri.target.getAttribute('name');
      filterGaleri.forEach((galeri) => {
        let filterGaleries = galeri.getAttribute('name');
        if ( filterGaleries == filterName ) {
          galeri.classList.add('ada')
          galeri.classList.remove('hilang')
        } else {
          galeri.classList.add('hilang')
          galeri.classList.remove('ada')
        }
      })
    }
  }
  
}
