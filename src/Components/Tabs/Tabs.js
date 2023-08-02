// import React, { useEffect, useState } from "react";
// // import "./Tab.css";
// import TabContent from "./TabContent";
// import TabNavItem from "./TabNavItem";
// import TrendingImageComp from "./TrendingImageComp";

// const Data = [
//     {
//         "menu_type_id": 1,
//         "menu_type_desc": "Vegan",
//         "menu_id": 2,
//         "menu_name": "Lentil Bolognese",
//         "price": 160,
//         "menu_image": "https://www.feastingathome.com/wp-content/uploads/2021/10/Lentil-Bolognese-23-1024x1536.jpg",
//         "ingredients": "Red wine, red lentils, balsamic vinegar, tomato paste, olive oil",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 1,
//         "menu_type_desc": "Vegan",
//         "menu_id": 4,
//         "menu_name": "Butternut Squash Risotto",
//         "price": 200,
//         "menu_image": "https://www.feastingathome.com/wp-content/uploads/2020/10/Instant-Pot-Butternut-Risotto_-15-1024x1536.jpg",
//         "ingredients": "Cubed butternut squash, white wine, arborio rice, rosemary",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 1,
//         "menu_type_desc": "Vegan",
//         "menu_id": 6,
//         "menu_name": "Bombay Burrito",
//         "price": 180,
//         "menu_image": "https://www.feastingathome.com/wp-content/uploads/2018/02/Frankie-Recipe-Indian-Burrito-115.jpg",
//         "ingredients": "Yellow curry powder, mashed potatoes, baby potatoes",
//         "menu_status": "not-available"
//     },
//     {
//         "menu_type_id": 2,
//         "menu_type_desc": "Veg",
//         "menu_id": 1,
//         "menu_name": "Dosa",
//         "price": 60,
//         "menu_image": "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "ingredients": "Rice, urad dal and fenugreek seeds",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 2,
//         "menu_type_desc": "Veg",
//         "menu_id": 3,
//         "menu_name": "Idlli",
//         "price": 80,
//         "menu_image": "https://images.pexels.com/photos/8312083/pexels-photo-8312083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         "ingredients": "black gram, rice, salt and water",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 2,
//         "menu_type_desc": "Veg",
//         "menu_id": 5,
//         "menu_name": "Chapati",
//         "price": 100,
//         "menu_image": "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         "ingredients": " whole-wheat flour",
//         "menu_status": "not-available"
//     },
//     {
//         "menu_type_id": 3,
//         "menu_type_desc": "Non-Veg",
//         "menu_id": 7,
//         "menu_name": "Pepper Chicken",
//         "price": 360,
//         "menu_image": "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg",
//         "ingredients": "Coconut milk, chicken, garam masala powder, green",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 3,
//         "menu_type_desc": "Non-Veg",
//         "menu_id": 8,
//         "menu_name": "Smoked Tandoori Chicken",
//         "price": 260,
//         "menu_image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Stove_Top_Grilled__Smoked_Tandoori_Chicken.jpg",
//         "ingredients": "Chicken thighs, greek yogurt, charcoal, garam masala",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 3,
//         "menu_type_desc": "Non-Veg",
//         "menu_id": 9,
//         "menu_name": "Mutton Rezala",
//         "price": 460,
//         "menu_image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Mutton_Rezala_.jpg",
//         "ingredients": "Mutton, dahi, poppy seeds, cashew nuts, ginger",
//         "menu_status": "not-available"
//     },
//     {
//         "menu_type_id": 4,
//         "menu_type_desc": "Dessert",
//         "menu_id": 10,
//         "menu_name": "Chocolate mousse",
//         "price": 260,
//         "menu_image": "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",
//         "ingredients": "chocolate, cream, sugar, eggs and butter",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 4,
//         "menu_type_desc": "Dessert",
//         "menu_id": 11,
//         "menu_name": "Poached pear vacherin",
//         "price": 360,
//         "menu_image": "https://img.delicious.com.au/0i2_daZ8/w759-h506-cfill/del/2022/05/poached-packham-pear-vacherin-168605-1.png",
//         "ingredients": "Creme fraiche, egg whites, cinnamon, icing sugar",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 4,
//         "menu_type_desc": "Dessert",
//         "menu_id": 12,
//         "menu_name": "lemon meringue pie",
//         "price": 180,
//         "menu_image": "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
//         "ingredients": "pastry base filled with lemon curd and topped with meringue",
//         "menu_status": "not-available"
//     },
//     {
//         "menu_type_id": 5,
//         "menu_type_desc": "Chocolate",
//         "menu_id": 13,
//         "menu_name": "Black forest cake",
//         "price": 290,
//         "menu_image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/black-forest-cake-1.jpg",
//         "ingredients": "chocolate sponge cake sandwiched with whipped cream and cherries",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 5,
//         "menu_type_desc": "Chocolate",
//         "menu_id": 14,
//         "menu_name": "chocolate brownie ",
//         "price": 360,
//         "menu_image": "https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/eggless-brownie-recipe.jpg",
//         "ingredients": "Unsweetened cocoa powder, honey, butter, egg",
//         "menu_status": "available"
//     },
//     {
//         "menu_type_id": 5,
//         "menu_type_desc": "Chocolate",
//         "menu_id": 15,
//         "menu_name": "doughnut recipe",
//         "price": 170,
//         "menu_image": "https://www.vegrecipesofindia.com/wp-content/uploads/2016/12/eggless-doughnut-recipe.jpg",
//         "ingredients": "Milk, eggs, vanilla, active dry yeast, hot water",
//         "menu_status": "not-available"
//     }
// ];

// const TabList = () => {



//   const [tableData , setTableData] = useState([])

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000//api/dashboard/sales/topselling?param=salesByCustomer`);
//       const jsonData = await response.json();
//       setTableData(jsonData.data);
//       console.log(jsonData.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   // useEffect(() => {
//   //   fatchchennel();
//   // }, []);

//   // const fatchchennel = async () => {
//   //   try {
//   //     const response = await fetch(`http://127.0.0.1:8000//api/dashboard/sales/topselling?param=cusinie`);
//   //     const jsonData = await response.json();
//   //     setTableData(jsonData.data);
//   //     console.log(jsonData.data);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   fatchproduct();
//   // }, []);

//   // const fatchproduct = async () => {
//   //   try {
//   //     const response = await fetch(`http://127.0.0.1:8000//api/dashboard/sales/topselling?param=product`);
//   //     const jsonData = await response.json();
//   //     setTableData(jsonData.data);
//   //     console.log(jsonData.data);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // };
  
//   const [data, setData] = useState(Data);
//   const [activeTab, setActiveTab] = useState("Vegan");


//   const menuTypes = [...new Set(data?.map((item) => item.menu_type_desc))];

//   // Filter data based on the active tab
//   const filteredData = data.filter((item) => item.menu_type_desc === activeTab);

//   return (
//     <div className="tab-nav-list-container">
//       <div className="Tabs">
//         <ul className="nav">
//           {menuTypes?.map((menuType) => (
//             <TabNavItem
//               key={menuType}
//               id={menuType}
//               title={menuType}
//               activeTab={activeTab}
//               setActiveTab={setActiveTab}
//             />
//           ))}
//         </ul>
//       </div>
//       <div className="outlet">
//         <TabContent activeTab={activeTab}>
//           {filteredData?.map((item) => (
//             <TrendingImageComp
//               key={item.menu_id}
//               imageUrl={item.menu_image}
//               productName={item.menu_name}
//               disc={item.ingredients}
//             />
//           ))}
//         </TabContent>
//       </div>
//     </div>
//   );
// };

// export default TabList;



import React, { useEffect, useState } from "react";
// import "./Tab.css";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavItem";
import TrendingImageComp from "./TrendingImageComp";
import {TOP_TRENDING_FOOD} from "../../Data"



// const productUrls = {
//   Vegan: [
//     "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg",
//         "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",
//         "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/black-forest-cake-1.jpg",
//         "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
//          "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
 

  
//   ],
//   "Fast Food": [
//     "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg",
//         "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",
//         "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/black-forest-cake-1.jpg",
//         "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
//         "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",




  
//   ],
//   "Dessert": [
//     "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg",
//         "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",
//         "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/black-forest-cake-1.jpg",
//         "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
//          "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",

  
//   ],
//   "Non-Veg": [
//     "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg",
//         "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",
//         "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/black-forest-cake-1.jpg",
//         "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
//          "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",


  
//   ],
//   "Chocolate": [
//     "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg",
//         "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",
//         "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/black-forest-cake-1.jpg",
//         "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
//          "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
  
//   ]

//   // Add more image URLs for other tabs
// };




const TabList = () => {



  // const [tableData , setTableData] = useState([])

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`http://127.0.0.1:8000//api/dashboard/sales/topselling?param=salesByCustomer`);
  //     const jsonData = await response.json();
  //     setTableData(jsonData.data);
  //     console.log(jsonData.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  
  const [data, setData] = useState(TOP_TRENDING_FOOD);
  const [activeTab, setActiveTab] = useState("Vegan");



  const menuTypes = [...new Set(data?.map((item) => item.name))];

  // Filter data based on the active tab

  // useEffect(() => {
  //   const interval = setInterval(updateImage, 10000); // Change image every 1 minute
  //   return () => clearInterval(interval);
  // }, []);
    
  // const getRandomImageUrl = () => {
  //   const imageUrls = productUrls[activeTab];
  //   const randomIndex = Math.floor(Math.random() * imageUrls.length);
  //   return imageUrls[randomIndex];
  // };
  
  // const updateImage = () => {
  //   const updateData = data.map((item) => ({
  //     ...item,
  //     ProductDetails: item.ProductDetails.map((product) => ({
  //       ...product,
  //       url: getRandomImageUrl(item.name)
  //     }))
  //   }));
  //   setData(updateData);
  // };

  const filteredData = data.filter((item) => item.name === activeTab);

  return (
    <div className="tab-nav-list-container">
      <div className="Tabs">
        <ul className="nav">
          {menuTypes?.map((menuType) => (
            <TabNavItem
              key={menuType}
              id={menuType}
              title={menuType}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
      </div>
      <div className="outlet">
        <TabContent activeTab={activeTab}>
          {filteredData?.map((item) => (
            item.ProductDetails.map((menu)=>
            <TrendingImageComp
            imageUrl={menu.url}
            productName={menu.Product}
            disc={menu.disc}
          />
            )
           
          ))}
        </TabContent>
      </div>
    </div>
  );
};

export default TabList;


// useEffect(()=>{
//   const interval = setInterval(()=>{
//     updateImage();
//   },2000)
//   return ()=>{
//     clearInterval(interval)
//   }
// })
// const productUrls = {
//   Vegan: [
//   "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg",
//     "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/black-forest-cake-1.jpg",
//     "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
//      "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg"
//     // Add more image URLs for each product in the Vegan tab
//   ],
//   "Fast Food" : [
//     "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg",
//     "https://img.delicious.com.au/iTVxN7mv/w759-h506-cfill/del/2022/12/p88-chocolate-mousse-with-salted-caramel-and-mochi-180615-2.png",
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/black-forest-cake-1.jpg",
//     "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg",
//      "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg"
//     // Add more image URLs for each product in the Fast Food tab
//   ],
//   Dessert: [
//     "https://www.example.com/image4.jpg",
//     "https://www.example.com/image5.jpg",
//     "https://www.example.com/image6.jpg",
//     // Add more image URLs for each product in the Fast Food tab
//   ],
//   "Non-Veg": [
//     "https://www.example.com/image4.jpg",
//     "https://www.example.com/image5.jpg",
//     "https://www.example.com/image6.jpg",
//     // Add more image URLs for each product in the Fast Food tab
//   ],
//   "Chocolate": [
//     "https://www.example.com/image4.jpg",
//     "https://www.example.com/image5.jpg",
//     "https://www.example.com/image6.jpg",
//     // Add more image URLs for each product in the Fast Food tab
//   ],
// }
// const updateImage = () => {
//   const updateData = data.map((item) => {
//     if (item.name in productUrls) {
//       const updatedProductDetails = item.ProductDetails.map((product, index) => {
//         if (index < productUrls[item.name].length) {
//           return {
//             ...product,
//             url: productUrls[item.name][index]
//           };
//         }
//         return product;
//       });
//       return {
//         ...item,
//         ProductDetails: updatedProductDetails
//       };
//     }
//     return item;
//   });
//   setData(updateData);
// };



// differt code 

// useEffect(() => {
//   const interval = setInterval(updateImage,10000); // Update every 1 minute
//   return () => clearInterval(interval); // Cleanup interval on component unmount
// }, []);

// const updateImage = () => {
//   setCurrentIndex((prevIndex) => (prevIndex + 1) % productUrls[activeTab].length);
// };

// useEffect(() => {
//   const updateData = data.map((item) => {
//     if (item.name === activeTab) {
//       const updatedProductDetails = item.ProductDetails.map((product, index) => {
//         if (index === currentIndex) {
//           return {
//             ...product,
//             url: productUrls[activeTab][currentIndex]
//           };
//         }
//         return product;
//       });
//       return {
//         ...item,
//         ProductDetails: updatedProductDetails
//       };
//     }
//     return item;
//   });
//   setData(updateData);
// }, [currentIndex]);
