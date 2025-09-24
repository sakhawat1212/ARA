const carCareData = [
  {
    name: "Brushes and Sponges",
    children: [
      {
        name: "Detailing Brush",
        products: [
          { name: "Brush Set", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOyQTajU_qYu0y8PftYwEuchYa0GQgb61Sg&s" },
          { name: "Sponge Pack", price: "RS 1200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSIo_TXTSzVPOgOnqeSpml646QMT_B4t3BA&s" },
          { name: "Detailing Brush", price: "RS 800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CHBoMwG9pBvXOP2GuSTPG9mBTkyEkCfwsQ&s" },
          { name: "Microfiber Sponge", price: "RS 1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkrOCgvyP5E83bpTMiA3a6hmhPOKpY3wV2w&s" },
          { name: "Wax Applicator", price: "RS 900", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlStTfWxicARZaEgg7Tbe7_NWU-lWzCFq3Zg&s" }
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
          { name: "Electric Washer", price: "RS 4500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_PtykYjS2ZkYa_uqJKDN-vqDvuqu-QtkbQ&s" },
          { name: "Polisher Machine", price: "RS 6000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWuBMe-SFmV3QOFnjnlyeJuRSdwGtNwGxyg&s" },
          { name: "Mini Polisher", price: "RS 3000", img: "https://m.media-amazon.com/images/I/51-LgWzWRhL.jpg" },
          { name: "Car Buffer", price: "RS 5500", img: "https://media.istockphoto.com/id/152140309/photo/a-red-car-being-polished-by-a-man.jpg?s=612x612&w=0&k=20&c=2g3NgyHcs47WoMTpLEWZB79vQbuDujRJ5OM_HPjxibU=" },
          { name: "Hand Polisher", price: "RS 2500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzs8Vu4ZXlxVC4_hSAcfOcSNvmdBJ9IlgiVg&s" }
        ]
      },
      { name: "Rotary Polisher" }
    ]
  },
  {
    name: "Car Wash/Shampoo",
    products: [
      { name: "Car Shampoo", price: "RS 1200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6hREuSo25BgoupEes25pY1pgYSupgTnt1g&s" },
      { name: "Foam Wash", price: "RS 1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdtJlqjy1U34dawmC-b5AbbJavilbGcjz6w&s" },
      { name: "Quick Wash", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbV3254fb0xQUVjjqsRzmcO_hC2VkMnxIyA&s" },
      { name: "Shampoo Pack", price: "RS 1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAesVS82GRN3IH78awmVNSVAqxzgZlnGSXg&s" },
      { name: "Premium Car Wash", price: "RS 2000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_tAj4PUxkCWYDAREnP2LoXzbmfUjfHdjow&s" }
    ]
  },
  {
    name: "Exterior Cleaners",
    products: [
      { name: "Glass Cleaner", price: "RS 800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHAao0DjcXP5Jihg3v-5JNcZ6ko_IQ2GNtA&s" },
      { name: "Metal Cleaner", price: "RS 1200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsmazAWgn72YB4jHf9H1MyUojvYfpX2n2jg&s" },
      { name: "Plastic Cleaner", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3g84WpHF_NQGV6Rq9RYlbvCtimdsgMjsN4g&s" },
      { name: "Wheel Cleaner", price: "RS 1500", img: "https://i.ytimg.com/vi/xoCdWxnd9KM/maxresdefault.jpg" },
      { name: "All-Purpose Cleaner", price: "RS 1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31bsndeyuJx5qX8vAmbmS7c5TOch2o7QQMA&s" }
    ]
  },
  {
    name: "Polishes",
    products: [
      { name: "Car Polish", price: "RS 2000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUfZBgWwdkPAoghLrCDdegncBcqPNj_PMLg&s" },
      { name: "Scratch Remover", price: "RS 1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYxPDgjw3HGe962rBDUa19XTNFWaSVS1yjA&s" },
      { name: "Gloss Polish", price: "RS 2200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Kk_xY-wNaeZp4igqZTMJzCR3c857gNon-g&s" },
      { name: "Premium Polish", price: "RS 2500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5gJqQvPFx1y6tGgP7zJnpT-bB3Iy-4-6qQ&s" },
      { name: "Quick Shine", price: "RS 1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvE8Onw8f8hWuHlLR29CADPtP1wAtOg8kIg&s" }
    ]
  },
  {
    name: "Protectants",
    products: [
      { name: "Leather Protectant", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDgOpbBEtA1o5sUyC4mNi103hhc6mhgsqug&s" },
      { name: "Plastic Protectant", price: "RS 2000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Jy_rySLbucTUS7gsHYkAummGGTfBN-yQhg&s" },
      { name: "Interior Protectant", price: "RS 2500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHP9Oyg-Z0Pr4IAsE2N16CZANRd9qlv-MVw&s" },
      { name: "Exterior Protectant", price: "RS 2800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC0SKHjfd2AUIXPuIzzHSQfVXLqQiKGOoTQ&s" },
      { name: "UV Protectant", price: "RS 1800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnRHrOW2kDuB3Q2Qu-c9gsv9gLoBn5PAcBQ&s" }
    ]
  },
  {
    name: "Tire Care",
    products: [
      { name: "Tire Shine", price: "RS 1200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME6v2vp7JUgjA_WBw4K2Uk1HAJ7RtU9bV4A&s" },
      { name: "Tire Cleaner", price: "RS 1000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfZcSdM7DeB07WBYzVSuo1NIg8fIdmV6YSw&s" },
      { name: "Tire Brush", price: "RS 800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1khlmKCDmXXgmGgazM-jYHPNohjNnhAQ1iw&s" },
      { name: "Tire Foam", price: "RS 1500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqBDkbB9aZ6miii1_AdtAe_IQ9QLkIvL3Nw&s" },
      { name: "Wheel Protectant", price: "RS 2000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPFc1eg1R7OZvpLCNkeqAs52nWIXPjyKy2g&s" }
    ]
  }
];

export default carCareData;
