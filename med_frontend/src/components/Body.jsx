import React, {useState} from 'react'
import MedicineTypeCard from './MedicineTypeCard'

const Body = () => {
    const [MedicineTypes, SetMedicineTypes] = useState([
        {
            id : 1,
            type : "Tablets",
            desc : "A small amount of medicine in solid form that you swallow",
            imageURL : "https://5.imimg.com/data5/GZ/CM/TQ/SELLER-3092624/cefpodoxime-tablets-500x500.png"
        },
        {
            id : 2,
            type : "Capsules",
            desc : "A capsule is also a form used for medicine that is taken by mouth. It usually has a shell made of gelatin with the medicine inside.",
            imageURL : "https://pharma-trends.com/wp-content/uploads/2019/09/capsules.jpg"
        },
        {
            id : 3,
            type : "Syrups",
            desc : "Syrups are thick, sweet liquids, typically used to add sweetness or flavor to food and drinks",
            imageURL : "https://sigmasoftgel.in/wp-content/uploads/2023/12/Top-10-Syrups-Manufacturing-Companies-In-India.jpeg"
        }

    ])
  return (
     <div className='w-full flex flex-row justify-evenly flex-wrap bg-gray-200 shadow-2xl'>
          {
            MedicineTypes.map((item,index)=>(
                 <MedicineTypeCard item={item}/> 
            ))
          }
    </div>
  )
}

export default Body