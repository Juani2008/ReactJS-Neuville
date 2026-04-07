const products = [
    {marca:"Gan",tipo:"3x3",precio:400, imagen:"public/images/gan3x3.png",id:1, stock:10},
    {marca:"Dayan",tipo:"2x2",precio:600,imagen:"public/images/dayan2x2.png",id:2, stock:5},
    {marca:"Moyu",tipo:"4x4",precio:300,imagen:"src/assets/moyu4x4.jfif",id:3, stock:8},
    {marca:"Qiyi",tipo:"5x5",precio:800,imagen:"src/assets/qiyi5x5.jfif",id:4, stock:3},
    {marca:"Qiyi",tipo:"Megaminx",precio:1200,imagen:"src/assets/megamixQIyi.jpg",id:5, stock:2},
    {marca:"Gan",tipo:"Pyraminx",precio:700,imagen:"src/assets/piraminxGan.jfif",id:6, stock:7},
    {marca:"Moyu",tipo:"Square 1",precio:500,imagen:"src/assets/square1Moyu.jfif",id:7, stock:6},
    {marca:"Dayan",tipo:"Skewb",precio:900,imagen:"src/assets/skewbDayan.jfif",id:8, stock:4},
    {marca:"Qiyi",tipo:"6x6",precio:1500,imagen:"src/assets/qiyi6x6.jfif",id:9, stock:2},
    {marca:"Moyu",tipo:"7x7",precio:2000,imagen:"src/assets/moyu7x7.jfif",id:10, stock:1},
    {marca:"Qiyi",tipo:"Mirror",precio:1100,imagen:"src/assets/qiyimirror.jfif",id:11, stock:3},
    {marca:"Dayan",tipo:"Ghost",precio:1300,imagen:"src/assets/ghostdayan.webp",id:12, stock:2},
    {marca:"Qiyi",tipo:"Windmill",precio:1400,imagen:"src/assets/windmillqiyi.jfif",id:13, stock:1},
    {marca:"Qiyi",tipo:"Dino",precio:750,imagen:"src/assets/dinoqiyi.jfif",id:14, stock:5},
    {marca:"Moyu",tipo:"Fisher",precio:950,imagen:"src/assets/fishermoyu.jfif",id:15, stock:4},
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productos.find((p) => p.id === Number(id));
      resolve(product);
    }, 1000);
  });
};