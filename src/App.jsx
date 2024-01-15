import { useState,useEffect } from 'react'
import  {BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Admin from './components/Admin'
import AddProduct from './components/AddProduct'
import Updateproduct from './components/Updateproduct'

function App() {
//   const [postimage, setPostImage] = useState({
//     image:""
//   })
//   const [data, setData] = useState([])
//   const url = 'http://localhost:3000/createproduct'
//   const utl = 'http://localhost:3000'
// const createPost = async (newImage)=>{
//   try {
//     await axios.post(url, newImage)
//   } catch (error) {
//     console.log(error)
//   }
// }
//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     createPost(postimage)
//     console.log("upload")
//   }

//   const handleFileUpload = async (e)=>{
//     const file = e.target.files[0];
//     const base64 = await convertToBase64(file)
//     setPostImage({...postimage, image:base64})
//     console.log(base64)
//   }
//   useEffect(()=>{
//     axios.get(utl).then((resolve)=>{
//       setData(resolve.data)
//     })
//   },[])
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/updateproduct/:id' element={<Updateproduct/>}/>
     </Routes>
    </BrowserRouter>

      {/* <div>
        {
          data.map((e)=>{
            return <img key={e._id} src={e.image} height={50} alt="" />
          })
        }
          <form onSubmit={handleSubmit}>
            <input type="file"
             accept='.jpg,png,.jpeg'
            name="image" id="file-upload" 
            onChange={(e)=>handleFileUpload(e)}
            />
            <button type="submit">Submit</button>
          </form>
        </div> */}
    </>
  )
}

export default App

// function convertToBase64(file){
//   return new Promise((resolve, reject)=>{
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     fileReader.onload=()=>{
//       resolve(fileReader.result)
//     }
//     fileReader.onerror=(error)=>{
//       reject(error)
//     }
//   })
// }
