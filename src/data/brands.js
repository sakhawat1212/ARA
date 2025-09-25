const brands = [
  {
    name: "Toyota",
    products: [
      { name: "Toyota Oil Filter", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7T_kfXjRUonT8orC9Xbx7NcnnVZljcrywuw&s", 
        desc: "High-quality oil filter for Toyota engines.", price: "RS 2500", make: "Toyota", model: "Any", year: "2020" },
      { name: "Toyota Brake Pads", img: "https://cache4.pakwheels.com/ad_pictures/8995/toyota-crown-oem-front-brake-pads-89958595.webp",
         desc: "Durable brake pads for Toyota vehicles.", price: "RS 450", make: "Toyota", model: "Any", year: "2020" },
      { name: "Toyota Spark Plug", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpxAkKQ13ixqv65kOu3cUg_DJ_jmx4hR0Kw&s",
         desc: "OEM spark plug for Toyota models.", price: "RS 1500", make: "Toyota", model: "Any", year: "2020" },
      { name: "Toyota Air Filter", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5NPJSxH-PxkNyccToROevljnYtO3YwAW6g&s",
         desc: "Genuine Toyota air filter.", price: "RS 3000", make: "Toyota", model: "Any", year: "2020" },
    ],
  },
  {
    name: "Honda",
    products: [
      { name: "Honda Oil Filter", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8RxrJj9lSVdvgkvLDIQR_-LeFcClcFV-dA&s",
         desc: "Premium oil filter for Honda.", price: "RS 2200", make: "Honda", model: "Any", year: "2020" },
      { name: "Honda Brake Pads", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeGuxzyoc7mDzgX5YcdWQOiIt_PHBllFamA&s",
         desc: "Reliable brake pads for Honda vehicles.", price: "RS 4200", make: "Honda", model: "Any", year: "2020" },
      { name: "Honda Radiator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjxjOnQoiiixtDJyA-GUwuYUGzY__FElsqQ&s",
         desc: "High-efficiency radiator for Honda.", price: "RS 12000", make: "Honda", model: "Any", year: "2020" },
      { name: "Honda Spark Plug", img: "https://partsdirect.pk/cdn/shop/products/y4mgWkXohdZz4GpZLElQ8pBc-e7K2zrIEgAW8JeBK-Oy-X7NYzopXy7XjEEvdJL-VACno5zuKLLqpADXQwVrKzDZ6qZf0gTGwg6--K89nhXrjlgKOYFq2Cl-SLSiOZfeK6xW4px6qJa-YSsEGP0vj4khSFw9P1fMqTvLve0ijhLkAvQFkLhUkMO_796x.jpg?v=1697545937", 
        desc: "OEM spark plug for Honda.", price: "RS 1800", make: "Honda", model: "Any", year: "2020" },
    ],
  },
  {
    name: "Suzuki",
    products: [
      { name: "Suzuki Oil Filter", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYBDd3AOlJrDhqrIiV5WWGBi595MNQVRnTA&s",
         desc: "Oil filter for Suzuki cars.", price: "RS 2000", make: "Suzuki", model: "Any", year: "2020" },
      { name: "Suzuki Brake Shoes", img: "https://cache1.pakwheels.com/ad_pictures/5116/suzuki-vitara-3-door-mk-rear-brake-shoe-k-9934-y-51166260.jpg",
         desc: "Durable brake shoes.", price: "RS 3500", make: "Suzuki", model: "Any", year: "2020" },
      { name: "Suzuki Battery", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgol9_d6k3RIz9DnCKHUYAF4Tx_rz8q_S4IQ&s",
         desc: "Long-lasting battery for Suzuki.", price: "RS 20000", make: "Suzuki", model: "Any", year: "2020" },
      { name: "Suzuki Headlight", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXVoFcjIYfImLmujd5b2feXkJqxAakRo-2Q&s",
         desc: "Bright headlight for Suzuki models.", price: "RS 5500", make: "Suzuki", model: "Any", year: "2020" },
    ],
  },
  {
    name: "Hyundai",
    products: [
      { name: "Hyundai Oil Filter", img: "https://static-01.daraz.pk/p/ad5e6ed4c0ad82261740ab7faf661f63.jpg",
         desc: "OEM oil filter.", price: "RS 2400", make: "Hyundai", model: "Any", year: "2020" },
      { name: "Hyundai Brake Pads", img: "https://i.ebayimg.com/images/g/w7YAAOSwYlJW3sdr/s-l400.jpg",
         desc: "Smooth braking performance.", price: "RS 4800", make: "Hyundai", model: "Any", year: "2020" },
      { name: "Hyundai Radiator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLUdpihMLx5K1DCEMf5mikNzr5gwKuTfO_Q&s",
         desc: "High-performance radiator.", price: "RS 11500", make: "Hyundai", model: "Any", year: "2020" },
      { name: "Hyundai Spark Plug", img: "https://smhttp-ssl-69129-sixityauto.nexcesscdn.net/media/catalog/product/cache/cfe34c5762a92ef1323a352e97da0306/2/0/2024108857image1.jpg",
         desc: "Reliable spark plug.", price: "RS 1900", make: "Hyundai", model: "Any", year: "2020" },
    ],
  },
  {
    name: "Kia",
    products: [
      { name: "Kia Oil Filter", img: "https://theautofy.com/cdn/shop/files/Kia-Oil-Filter-Genuine-OEM_80b4628a-c42b-4960-ad3b-f2dd3330ba9a.png?v=1721657780",
         desc: "Oil filter for Kia cars.", price: "RS 23000", make: "Kia", model: "Any", year: "2020" },
      { name: "Kia Brake Pads", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUf5w2tHlaPWXM7LeNETufhIJvF__AKPPPg&s",
         desc: "Durable brake pads.", price: "RS 4700", make: "Kia", model: "Any", year: "2020" },
      { name: "Kia Radiator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-JGVvaF1gGkNjAQlB73Mt9Y8bIzBCSY61A&s",
         desc: "Radiator for Kia engines.", price: "RS 11800", make: "Kia", model: "Any", year: "2020" },
      { name: "Kia Battery", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmMsTCw8BIiyyEyAaWXNYwtT_tF3PoPv6xw&s",
         desc: "Long-lasting battery.", price: "RS 20000", make: "Kia", model: "Any", year: "2020" },
    ],
  },
  {
    name: "Nissan",
    products: [
      { name: "Nissan Oil Filter", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmG2gaGhR6XRAK_N9ziGCrnV-yJaT-A0HiQ&s",
         desc: "OEM oil filter for Nissan.", price: "RS 2600", make: "Nissan", model: "Any", year: "2020" },
      { name: "Nissan Brake Pads", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAcjmmxk-ivusmwaUmD3RrLZjcH5Zg9QHWg&s",
         desc: "Premium brake pads.", price: "RS 5000", make: "Nissan", model: "Any", year: "2020" },
      { name: "Nissan Spark Plug", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxBA89ax_NLrZKyaHZC40P0Wf56zGiwqIEg&s",
         desc: "High-quality spark plug.", price: "RS 1700", make: "Nissan", model: "Any", year: "2020" },
      { name: "Nissan Air Filter", img: "https://img.drz.lazcdn.com/g/kf/Scf51a2700e45481081a2753b99fb856e5.jpg_720x720q80.jpg",
         desc: "Air filter for clean intake.", price: "RS 3200", make: "Nissan", model: "Any", year: "2020" },
    ],
  },
  {
    name: "Mazda",
    products: [
      { name: "Mazda Oil Filter", img: "https://m.media-amazon.com/images/I/715eDF1g6yL.jpg",
         desc: "Oil filter for Mazda engines.", price: "RS 2500", make: "Mazda", model: "Any", year: "2020" },
      { name: "Mazda Brake Pads", img: "https://mikstoreph.com/cdn/shop/products/ScreenShot2022-05-06at2.12.02PM_2048x.jpg?v=1651817560",
         desc: "Durable brake pads.", price: "RS 4400", make: "Mazda", model: "Any", year: "2020" },
      { name: "Mazda Radiator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_agTCfZHljf7cLEeWYh95B-9b5ywJOBt3lg&s",
         desc: "Radiator for Mazda cars.", price: "RS 11000", make: "Mazda", model: "Any", year: "2020" },
      { name: "Mazda Spark Plug", img: "https://cdn.revolutionparts.io/96d904c41cfdba27f7125b3c4f9eb257/design/oem-plug.jpg",
         desc: "OEM spark plug for Mazda.", price: "RS 1600", make: "Mazda", model: "Any", year: "2020" },
    ],
  },
 
  // ... baki 30 brands same structure me
];

export default brands;
