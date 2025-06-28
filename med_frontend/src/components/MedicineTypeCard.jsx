import React from 'react'

const MedicineTypeCard = ({ item }) => {
    return (
        <div key={item?.id} className='border-1 flex flex-col m-2 p-1 rounded-xl justify-center items-center flex-wrap '>
            <img className='h-50 w-50' alt='url' src={item?.imageURL} />
            <h1>{item?.type}</h1>
        </div>
    )
}

export default MedicineTypeCard