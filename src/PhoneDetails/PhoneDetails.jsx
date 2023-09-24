import { useLoaderData, useParams } from "react-router-dom";

const PhoneDetails = () => {
    const phones = useLoaderData()
    // console.log(phones)
    const {id} = useParams()
    // const idInt=parseInt(id)
    // console.log(idInt)
    
    const phone = phones.find(phones=>phones.id===id)
    // console.log(phone)

    const btnHandle= ()=>{
        const favBrand = []
        const getItem = localStorage.getItem('brand')
        const item = JSON.parse(getItem)
        // console.log(item)
        if(!item){
            favBrand.push(phone)
            // console.log(phone)
            localStorage.setItem('brand',JSON.stringify(favBrand))
        }
        else{

           const isExist = item.find(phone=>phone.id===id)
            // console.log(isExist)
            if(!isExist){
                favBrand.push(...item,phone)
                localStorage.setItem('brand',JSON.stringify(favBrand))
            }
            else{
                alert('already ache')
            }

           
        }
        // console.log(phone)
        // localStorage.setItem('brand',JSON.stringify([{name:"arif"}]))
    }

    return (
        <div>
            <h2>Phone details</h2>
            <img src={phone.image} alt="" />
            <p>brand name:{phone.brand_name}</p>
            <button onClick={btnHandle} className="btn btn-primary">Add to Favorite</button>
        </div>
    );
};

export default PhoneDetails;