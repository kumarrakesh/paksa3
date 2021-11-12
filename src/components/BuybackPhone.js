import {Button} from "./ant_components";
import Link from 'next/link';

export function BuybackPhone({id, status, model, capacity, grade, imei, customer, generatedDate}) {
  function getData() {
    return `${model}-${capacity}-${grade}`;
  }

  function handleClick() {
    
  }
  return (
    <div className="w-80 bg-red-200 border border-solid border-gray-200 p-5">
      <div className="wrapper flex flex-col justify-center items-center space-y-1">
        <div className="status">{status}</div>
        <div className="phone-model-capacity-grade">{getData()}</div>
        <div className="imei">{imei}</div>
      </div>

      <div className="customerWrapper grid grid-cols-2 mt-10">
        <div className="left space-y-1">
          <div className="customerName">{customer?.name}</div>
          <div className="customerPhone">{customer?.phone}</div>
          <div className="customerAddress">{customer?.address}</div>
        </div>
        <div className="right flex flex-col">
          <div className="generatedDate ml-auto">{generatedDate}</div>
          <div className="editButton mt-5 ml-auto">
            {/* <Button onClick={handleClick}>Edit</Button> */}
            <Link
          href={{
            pathname: '/edit/[id]',
            query: { id: id },
          }}
        >
          <a>Edit</a>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
