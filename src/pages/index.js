import {useRouter} from "next/router";
import {BuybackPhone} from "../components/BuybackPhone";
import {Layout} from "../components/layout";
import {useGetBuybackPhones} from "../helpers/hooks";

const transformBBData = (data) => {

  const buyBackData  = data.map ((x) => {
    return {
      id: x._id,
      status : x.status ,
      model : x.OriginalValues.model,
      capacity : x.OriginalValues.capacity,
      grade : x.OriginalValues.grade,
      imei : x.OriginalValues.imei,
      customer:{
        name : x.Customer.Name,
        phone : x.Customer.Phone,
        address: x.Customer.Address
        
      },
      generatedDate :x.externalRef.generatedDate
    }

  }); 



  return buyBackData ;

};


export default function Home() {
  const {
    query: {t: tenant},
  } = useRouter();

  const {isLoading, error, data} = useGetBuybackPhones();
  if (isLoading) {
   
    return "Loading...";
  }
  if (error) {
    return "error...";
  }

  const buybackData = transformBBData(data);

  /*
  "OriginalValues": {
            "SKU": "iPhone12mini-black-128-a",
            "model": "iPhone 8 Plus",
            "capacity": "64GB",
            "color": "Space Gray",
            "grade": "D",
            "imei": "12121212122111",
            "tradeinDiscount": 1500
        },
        "ModifiableValues": {
            "SKU": "iPhone12mini-black-128-a",
            "model": "iPhone 8 Plus",
            "capacity": "64GB",
            "color": "Space Gray",
            "grade": "D",
            "imei": "121212121222222",
            "tradeinDiscount": 1500
        },
        "Customer": {
            "Name": "sundara subramoniam",
            "Email": "sundar@moorup.no",
            "Phone": "92208488",
            "Address": "a long value"
        },
        "externalRef": {
            "generatedDate": "2021-09-09T09:37:33.000Z",
            "IDType": "M",
            "Number": "3661248523480580"
        },
        "status": "Processing",
        "_id": "613620a7b7d8ef5545190709",
        "__v": 0
    }

  */

    console.log(data);
  return (
    <Layout>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 sm:gap-5 mt-10">
        {buybackData.map((x) => (
          <BuybackPhone key={x.id} {...x} />
        ))}
      </div>
    </Layout>
  );
}
