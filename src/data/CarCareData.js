const carCareData = [
  {
    name: "Brushes and Sponges",
    children: [
      {
        name: "Detailing Brush",
        products: [
          { name: "Brush Set", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOyQTajU_qYu0y8PftYwEuchYa0GQgb61Sg&s", make: "Toyota", model: "Corolla", year: "2020" },
          { name: "Sponge Pack", price: "RS 1200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSIo_TXTSzVPOgOnqeSpml646QMT_B4t3BA&s", make: "Toyota", model: "Corolla", year: "2020" },
          { name: "Detailing Brush", price: "RS 800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CHBoMwG9pBvXOP2GuSTPG9mBTkyEkCfwsQ&s", make: "Toyota", model: "Corolla", year: "2020" },
          { name: "Microfiber Sponge", price: "RS 1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkrOCgvyP5E83bpTMiA3a6hmhPOKpY3wV2w&s", make: "Toyota", model: "Corolla", year: "2020" },
          { name: "Wax Applicator", price: "RS 900", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlStTfWxicARZaEgg7Tbe7_NWU-lWzCFq3Zg&s", make: "Toyota", model: "Corolla", year: "2020" }
        ]
      },
      { name: "Foam Brush" },
      { name: "Microfiber Sponge" }
    ]
  },
  {
    name: "Washers and Polishers",
    children: [
      {
        name: "Dual Action Polisher",
        products: [
          { name: "Electric Washer", price: "RS 4500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_PtykYjS2ZkYa_uqJKDN-vqDvuqu-QtkbQ&s", make: "Toyota", model: "Corolla", year: "2020" },
          { name: "Polisher Machine", price: "RS 6000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWuBMe-SFmV3QOFnjnlyeJuRSdwGtNwGxyg&s", make: "Toyota", model: "Corolla", year: "2020" },
          { name: "Mini Polisher", price: "RS 3000", img: "https://m.media-amazon.com/images/I/51-LgWzWRhL.jpg", make: "Toyota", model: "Corolla", year: "2020" },
          { name: "Car Buffer", price: "RS 5500", img: "https://media.istockphoto.com/id/152140309/photo/a-red-car-being-polished-by-a-man.jpg?s=612x612&w=0&k=20&c=2g3NgyHcs47WoMTpLEWZB79vQbuDujRJ5OM_HPjxibU=", make: "Toyota", model: "Corolla", year: "2020" },
          { name: "Hand Polisher", price: "RS 2500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzs8Vu4ZXlxVC4_hSAcfOcSNvmdBJ9IlgiVg&s", make: "Toyota", model: "Corolla", year: "2020" }
        ]
      },
      { name: "Rotary Polisher" }
    ]
  },
  {
    name: "Car Wash/Shampoo",
    products: [
      { name: "Car Shampoo", price: "RS 1200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6hREuSo25BgoupEes25pY1pgYSupgTnt1g&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Foam Wash", price: "RS 1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdtJlqjy1U34dawmC-b5AbbJavilbGcjz6w&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Quick Wash", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbV3254fb0xQUVjjqsRzmcO_hC2VkMnxIyA&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Shampoo Pack", price: "RS 1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAesVS82GRN3IH78awmVNSVAqxzgZlnGSXg&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Premium Car Wash", price: "RS 2000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_tAj4PUxkCWYDAREnP2LoXzbmfUjfHdjow&s", make: "Toyota", model: "Corolla", year: "2020" }
    ]
  },
  {
    name: "Exterior Cleaners",
    products: [
      { name: "Glass Cleaner", price: "RS 800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHAao0DjcXP5Jihg3v-5JNcZ6ko_IQ2GNtA&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Metal Cleaner", price: "RS 1200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsmazAWgn72YB4jHf9H1MyUojvYfpX2n2jg&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Plastic Cleaner", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3g84WpHF_NQGV6Rq9RYlbvCtimdsgMjsN4g&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Wheel Cleaner", price: "RS 1500", img: "https://i.ytimg.com/vi/xoCdWxnd9KM/maxresdefault.jpg", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "All-Purpose Cleaner", price: "RS 1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31bsndeyuJx5qX8vAmbmS7c5TOch2o7QQMA&s", make: "Toyota", model: "Corolla", year: "2020" }
    ]
  },
  {
    name: "Polishes",
    products: [
      { name: "Car Polish", price: "RS 2000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUfZBgWwdkPAoghLrCDdegncBcqPNj_PMLg&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Scratch Remover", price: "RS 1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYxPDgjw3HGe962rBDUa19XTNFWaSVS1yjA&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Gloss Polish", price: "RS 2200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Kk_xY-wNaeZp4igqZTMJzCR3c857gNon-g&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Premium Polish", price: "RS 2500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5gJqQvPFx1y6tGgP7zJnpT-bB3Iy-4-6qQ&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Quick Shine", price: "RS 1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvE8Onw8f8hWuHlLR29CADPtP1wAtOg8kIg&s", make: "Toyota", model: "Corolla", year: "2020" }
    ]
  },
  {
    name: "Protectants",
    products: [
      { name: "Leather Protectant", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDgOpbBEtA1o5sUyC4mNi103hhc6mhgsqug&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Plastic Protectant", price: "RS 2000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Jy_rySLbucTUS7gsHYkAummGGTfBN-yQhg&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Interior Protectant", price: "RS 2500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHP9Oyg-Z0Pr4IAsE2N16CZANRd9qlv-MVw&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Exterior Protectant", price: "RS 2800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC0SKHjfd2AUIXPuIzzHSQfVXLqQiKGOoTQ&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "UV Protectant", price: "RS 1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnRHrOW2kDuB3Q2Qu-c9gsv9gLoBn5PAcBQ&s", make: "Toyota", model: "Corolla", year: "2020" }
    ]
  },
  {
    name: "Tire Care",
    products: [
      { name: "Tire Shine", price: "RS 1200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME6v2vp7JUgjA_WBw4K2Uk1HAJ7RtU9bV4A&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Tire Cleaner", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfZcSdM7DeB07WBYzVSuo1NIg8fIdmV6YSw&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Tire Brush", price: "RS 800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1khlmKCDmXXgmGgazM-jYHPNohjNnhAQ1iw&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Tire Foam", price: "RS 1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqBDkbB9aZ6miii1_AdtAe_IQ9QLkIvL3Nw&s", make: "Toyota", model: "Corolla", year: "2020" },
      { name: "Wheel Protectant", price: "RS 2000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPFc1eg1R7OZvpLCNkeqAs52nWIXPjyKy2g&s", make: "Toyota", model: "Corolla", year: "2020" }
    ]
  }
];

export default carCareData;
