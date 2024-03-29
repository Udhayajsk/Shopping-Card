import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import ConditionRendering from './ConditionRendering';
import Footer from './Footer';





const App = () => {
  const[status, setStatus]=useState(true)
  const[cartCount, setCartCount]=useState(0)
  const data=[
    {
      name:"Partywear for women",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQvmJNtIEDT9SwGO216cy4U48cSsfo376nF-bRWCQ9FGCXnBn6xWDNS1Yj_vOTe-tSp4&usqp=CAU",
      price:"$40-$80",
      delprice:"$50-$90",
      rating: false
    },
    {
      name:"Partywear cloth for men",
      image:"https://i.pinimg.com/736x/b1/6c/2c/b16c2c5816de3261197f47a243c0828a.jpg", 
      price:"$50-$80",
      delprice:"$60-$100",
      rating: false
    },
    {
      name:"Apple Watch Series-9",
      image:"data:image/jpeg;base64,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",
      price:"$400",
      delprice:"$450-$500",
      rating: true

    },
    {
      name:"Cloth for Babies",
      image:"data:image/jpeg;base64,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",
       price:"$60",
       delprice:"$70-$80",
       rating: true
    },
    
     {
      name:"Men's Sports Shoe",
      image:"https://abrosshoes.com/cdn/shop/files/PIX-9594-copy.jpg?v=1700589555&width=533",
      price:"$20",
      delprice:"$30-$50",
      rating: false
    },
     
     {
      name:"Cosmetic Kit",
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROaHSjZqMmgz1CZvMrkaXlp1T_pKsCQevXUXIPWKZOLMvBytglWJ9WtyK0etpRFkLlXxQ5hlnB_uUkrIyH2FUP2PMBi8attylyFbULWWzNqKE9Bla-cR9K&usqp=CAE",
      price:"$25",
      delprice:"$30-$40",
      rating: false
    },
     
    
    {
      name:"SunGlasses",
     image:"https://media.istockphoto.com/id/1310279267/photo/blue-green-sunglasses-dark-and-light-mirror-reflection-lens-yellow-background-close-up.jpg?s=612x612&w=0&k=20&c=9bjI3GpbPG9w90S7-GXeJ6Jt4GB0kPZSPuAOpU3a0Jk=",
     price:"$18",
     delprice:"$20-$25",
     rating: true

    },
     {
      name:"Kids  wear",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqKZC8vHeRUr3FKcuI20zghLocxaadoFdxw&usqp=CAU",
      price:"$100-$200",
      delprice:"$150-$250",
      rating: true
    }
  ]
  const[products, setProducts]= useState(data)

  return (
    <div >
      <Navbar cartCount={cartCount} />
      <Header />
     {status? <ConditionRendering setCartCount={setCartCount} cartCount={cartCount} setProducts={setProducts} products={products} /> : " "}
     <Footer />
    </div>
  );
};

export default App;