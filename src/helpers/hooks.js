import {useMutation, useQuery} from "react-query";
import {delay} from "./utils";

export function useGetBuybackPhones() {
  let buybackPhones = [{
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
    "status": "completed",
    "_id": "613620a7b7d8ef5545190709",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphone8plus-spacegray-64-d",
      "model": "iPhone 8 Plus",
      "capacity": "64GB",
      "color": "Space Gray",
      "grade": "D",
      "imei": "358629090617568",
      "tradeinDiscount": 865
    },
    "ModifiableValues": {
      "SKU": "iphone8plus-spacegray-64-d",
      "model": "iPhone 8 Plus",
      "capacity": "64GB",
      "color": "Space Gray",
      "grade": "D",
      "imei": "358629090617568",
      "tradeinDiscount": 865
    },
    "Customer": {
      "Name": "sundara subramoniam",
      "Email": "sundar@moorup.no",
      "Phone": "92208488",
      "Address": "durudveien 44\nHaslum, 1344\nNorge"
    },
    "externalRef": {
      "generatedDate": "2021-09-06T09:37:33.000Z",
      "IDType": "Tise Mobile",
      "Number": "4532167959730276"
    },
    "status": "completed",
    "_id": "613621bab7d8ef554519070b",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "359402082053104",
      "model": "iPhone 8 Plus",
      "capacity": "64GB",
      "color": "Space Gray",
      "grade": "D",
      "imei": "iphone8plus-spacegray-64-d",
      "tradeinDiscount": 930
    },
    "ModifiableValues": {
      "SKU": "359402082053104",
      "model": "iPhone 8 Plus",
      "capacity": "64GB",
      "color": "Space Gray",
      "grade": "D",
      "imei": "iphone8plus-spacegray-64-d",
      "tradeinDiscount": 930
    },
    "Customer": {
      "Name": "Elisabeth Hjorthaug",
      "Email": "elihjo69@gmail.com",
      "Phone": "95906099",
      "Address": "Hjorthaugane 10\nFosnavåg, 6091\nNorge"
    },
    "externalRef": {
      "generatedDate": "2021-09-27T18:18:56.000Z",
      "IDType": "Tise Mobile",
      "Number": "8484863057121207"
    },
    "status": "Complete",
    "_id": "6151f5936323871211786c70",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphonexsmax-gold-64-c",
      "model": "iPhone XS Max",
      "capacity": "64GB",
      "color": "Gold",
      "grade": "C",
      "imei": "357288096671169"
    },
    "ModifiableValues": {
      "SKU": "iphonexsmax-gold-64-c",
      "model": "iPhone XS Max",
      "capacity": "64GB",
      "color": "Gold",
      "grade": "C",
      "imei": "357288096671169"
    },
    "Customer": {
      "Name": "Charlotte Fredstad",
      "Email": "charlottefredstadhuuse@hotmail.com",
      "Phone": "47657715",
      "Address": "Ryggeveien 404\nRygge, 1580\nNorge"
    },
    "externalRef": {
      "generatedDate": "2021-10-01T13:26:40.000Z",
      "IDType": "Tise",
      "Number": "2956307898304838"
    },
    "status": "Complete",
    "_id": "615704dc6323871211786cc4",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphone11-black-64-c",
      "model": "iPhone 11",
      "capacity": "64GB",
      "color": "Black",
      "grade": "C",
      "imei": "352923119159413"
    },
    "ModifiableValues": {
      "SKU": "iphone11-black-64-c",
      "model": "iPhone 11",
      "capacity": "64GB",
      "color": "Black",
      "grade": "C",
      "imei": "352923119159413"
    },
    "Customer": {
      "Name": "Synne linea Ringøen",
      "Email": "synnelinea@gmail.com",
      "Phone": "99427844",
      "Address": "Majorstuveien 38\nOslo, 0367\nNorge"
    },
    "externalRef": {
      "generatedDate": "2021-10-08T00:00:00.000Z",
      "IDType": "Tise",
      "Number": "9248230103471745"
    },
    "status": "Cancelled",
    "_id": "6160b3a663238712117871b7",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphonex-spacegraycdma+gsm-256-d",
      "model": "iPhone X",
      "capacity": "256GB",
      "color": "Space Gray CDMA + GSM",
      "grade": "D",
      "imei": "353021092911576"
    },
    "ModifiableValues": {
      "SKU": "iphonex-spacegraycdma+gsm-256-d",
      "model": "iPhone X",
      "capacity": "256GB",
      "color": "Space Gray CDMA + GSM",
      "grade": "D",
      "imei": "353021092911576"
    },
    "Customer": {
      "Name": "Guro Mathiassen",
      "Email": "gurojoh@hotmail.com",
      "Phone": "99157731",
      "Address": "Smørbukklia 3\nTromsø, 9010\nNorge"
    },
    "externalRef": {
      "generatedDate": "2021-10-13T00:00:00.000Z",
      "IDType": "Tise Mobile",
      "Number": "5440219802156005"
    },
    "status": "Complete",
    "_id": "61671ebf6323871211787233",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphonexsmax-gold-128-c",
      "model": "iPhone XS Max",
      "capacity": "128GB",
      "color": "Gold",
      "grade": "C",
      "imei": ""
    },
    "ModifiableValues": {
      "SKU": "iphonexsmax-gold-128-c",
      "model": "iPhone XS Max",
      "capacity": "128GB",
      "color": "Gold",
      "grade": "C",
      "imei": ""
    },
    "Customer": {
      "Name": "Test11111",
      "Email": "est11111@test.com",
      "Phone": "47657715",
      "Address": "est11111"
    },
    "externalRef": {
      "generatedDate": "2021-10-01T13:26:40.000Z",
      "IDType": "TISEBB",
      "Number": "4425112211437322"
    },
    "status": "Test",
    "_id": "6176f49387ff3b046002710e",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphonex-spacegray-256-c",
      "model": "iPhone X",
      "capacity": "256GB",
      "color": "Space Gray",
      "grade": "C",
      "imei": "354877096033165"
    },
    "ModifiableValues": {
      "SKU": "iphonex-spacegray-256-c",
      "model": "iPhone X",
      "capacity": "256GB",
      "color": "Space Gray",
      "grade": "C",
      "imei": "354877096033165"
    },
    "Customer": {
      "Name": "Ingrid Strand Nørstebø",
      "Email": "ingrid.strand.norstebo@gmail.com",
      "Phone": "94039270",
      "Address": "Hestebakken 21 Alvdal, 2560 Norge"
    },
    "externalRef": {
      "generatedDate": "2021-10-31T00:00:00.000Z",
      "IDType": "TISEBB",
      "Number": "1034702524958826"
    },
    "status": "invoiced",
    "_id": "617eede6b12895410617807a",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphonese2-white-128-d",
      "model": "iPhone SE2",
      "capacity": "128GB",
      "color": "White",
      "grade": "D",
      "imei": "356497108617026",
      "tradeinDiscount": 1125
    },
    "ModifiableValues": {
      "SKU": "iphonese2-white-128-d",
      "model": "iPhone SE2",
      "capacity": "128GB",
      "color": "White",
      "grade": "D",
      "imei": "356497108617026",
      "tradeinDiscount": 1125
    },
    "Customer": {
      "Name": "Mailinn Kjellmann Larsen",
      "Email": "mailinnkjellmann@me.com",
      "Phone": "45003308",
      "Address": "Kløyva 9 Talvik, 9540"
    },
    "externalRef": {
      "generatedDate": "2021-11-03T00:00:00.000Z",
      "IDType": "TISEBB",
      "Number": "6869604006642797"
    },
    "status": "Collection",
    "_id": "61850176b1289541061784a7",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphone11promax-silver-64-c",
      "model": "iPhone 11 Pro Max",
      "capacity": "64GB",
      "color": "Silver",
      "grade": "C",
      "imei": "353910105489424",
      "tradeinDiscount": 3550
    },
    "ModifiableValues": {
      "SKU": "iphone11promax-silver-64-c",
      "model": "iPhone 11 Pro Max",
      "capacity": "64GB",
      "color": "Silver",
      "grade": "C",
      "imei": "353910105489424",
      "tradeinDiscount": 3550
    },
    "Customer": {
      "Name": "Sandra Johansen",
      "Email": "sandra.andrea@hotmail.no",
      "Phone": "99295533",
      "Address": "Dronningens gate 47"
    },
    "externalRef": {
      "generatedDate": "2021-11-16T07:56:08.000Z",
      "IDType": "TISEBB",
      "Number": "2994671257020834"
    },
    "status": "Collection",
    "_id": "6193676b536eb86218499e1e",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone X",
      "capacity": "256GB",
      "tradeinDiscount": 1750
    },
    "ModifiableValues": {
      "model": "iPhone X",
      "capacity": "256GB",
      "tradeinDiscount": 1750
    },
    "Customer": {
      "Name": "Aman Mavai",
      "Email": "amanmavai@gmail.com",
      "Phone": "67676766",
      "Address": "stree address undefined"
    },
    "externalRef": {
      "generatedDate": "2021-11-19T05:19:37.000Z",
      "IDType": "TISETI",
      "Number": "9590358080732632"
    },
    "status": "Collection",
    "_id": "619733e9536eb86218499faa",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone X",
      "capacity": "256GB",
      "tradeinDiscount": 1220
    },
    "ModifiableValues": {
      "model": "iPhone X",
      "capacity": "256GB",
      "tradeinDiscount": 1220
    },
    "Customer": {
      "Name": "Aman Mavai02",
      "Email": "aman@gmail.com",
      "Phone": "56767867",
      "Address": "stree02 undefined"
    },
    "externalRef": {
      "generatedDate": "2021-11-19T05:30:28.000Z",
      "IDType": "TISETI",
      "Number": "7788883102851172"
    },
    "status": "Collection",
    "_id": "61973675536eb86218499fca",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone 8",
      "capacity": "256GB",
      "tradeinDiscount": 695
    },
    "ModifiableValues": {
      "model": "iPhone 8",
      "capacity": "256GB",
      "tradeinDiscount": 695
    },
    "Customer": {
      "Name": "Aman Mavai03",
      "Email": "aman@gmia.com",
      "Phone": "23456789",
      "Address": "street03 456567"
    },
    "externalRef": {
      "generatedDate": "2021-11-19T05:32:46.000Z",
      "IDType": "TISETI",
      "Number": "9857168782483190"
    },
    "status": "Collection",
    "_id": "619736fe536eb86218499fd6",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone X",
      "capacity": "256GB",
      "tradeinDiscount": 1750
    },
    "ModifiableValues": {
      "model": "iPhone X",
      "capacity": "256GB",
      "tradeinDiscount": 1750
    },
    "Customer": {
      "Name": "Aman Mavai03",
      "Email": "roaman@gmail.com",
      "Phone": "45678978",
      "Address": "address03 789789"
    },
    "externalRef": {
      "generatedDate": "2021-11-19T06:19:27.000Z",
      "IDType": "TISETI",
      "Number": "3039622811466905"
    },
    "status": "Collection",
    "_id": "619741f0536eb86218499fe2",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone 11 Pro Max",
      "capacity": "256GB",
      "tradeinDiscount": 3800
    },
    "ModifiableValues": {
      "model": "iPhone 11 Pro Max",
      "capacity": "256GB",
      "tradeinDiscount": 3800
    },
    "Customer": {
      "Name": "Abc Ltd",
      "Email": "amanmavai@gmail.com",
      "Phone": "30954496",
      "Address": "474006 GWALIOR 474006"
    },
    "externalRef": {
      "generatedDate": "2021-11-22T06:11:50.000Z",
      "IDType": "TISETI",
      "Number": "0166519232662579"
    },
    "status": "Collection",
    "_id": "619b34a7536eb8621849a07f",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone X",
      "capacity": "256GB",
      "tradeinDiscount": 281
    },
    "ModifiableValues": {
      "model": "iPhone X",
      "capacity": "256GB",
      "tradeinDiscount": 281
    },
    "Customer": {
      "Name": "Sundara Rajan Subramonioam",
      "Email": "sundar@moorup.no",
      "Phone": "92208488",
      "Address": "Durudveien 44 1344"
    },
    "externalRef": {
      "generatedDate": "2021-11-22T13:14:04.000Z",
      "IDType": "TISETI",
      "Number": "7485900913019196"
    },
    "status": "Collection",
    "_id": "619b979c536eb8621849a160",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone 11",
      "capacity": "64GB",
      "tradeinDiscount": 1680
    },
    "ModifiableValues": {
      "model": "iPhone 11",
      "capacity": "64GB",
      "tradeinDiscount": 1680
    },
    "Customer": {
      "Name": "dew sol",
      "Email": "dewangi@moorup.no",
      "Phone": "12345678",
      "Address": "pp 0010"
    },
    "externalRef": {
      "generatedDate": "2021-11-23T06:32:06.000Z",
      "IDType": "TISETI",
      "Number": "0761013700593084"
    },
    "status": "Collection",
    "_id": "619c8ae7536eb8621849a1a4",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone 8 Plus",
      "capacity": "64GB",
      "tradeinDiscount": 237
    },
    "ModifiableValues": {
      "model": "iPhone 8 Plus",
      "capacity": "64GB",
      "tradeinDiscount": 237
    },
    "Customer": {
      "Name": "dew sol",
      "Email": "dewangi@moorup.no",
      "Phone": "12345678",
      "Address": "pp 0010"
    },
    "externalRef": {
      "generatedDate": "2021-11-23T06:48:54.000Z",
      "IDType": "TISETI",
      "Number": "0076722757168452"
    },
    "status": "Collection",
    "_id": "619c8ed6536eb8621849a1da",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone 12",
      "capacity": "256GB",
      "tradeinDiscount": 656
    },
    "ModifiableValues": {
      "model": "iPhone 12",
      "capacity": "256GB",
      "tradeinDiscount": 656
    },
    "Customer": {
      "Name": "dew sol",
      "Email": "dewangi@moorup.no",
      "Phone": "12345678",
      "Address": "pp 0010"
    },
    "externalRef": {
      "generatedDate": "2021-11-23T08:16:10.000Z",
      "IDType": "TISETI",
      "Number": "0835645804671844"
    },
    "status": "Collection",
    "_id": "619ca34b536eb8621849a22c",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphonese2-black-64-f",
      "model": "iPhone SE (2nd generation)",
      "capacity": "64GB",
      "color": "Black",
      "grade": "F",
      "imei": "356487108863506",
      "tradeinDiscount": 300
    },
    "ModifiableValues": {
      "SKU": "iphonese2-black-64-f",
      "model": "iPhone SE (2nd generation)",
      "capacity": "64GB",
      "color": "Black",
      "grade": "F",
      "imei": "356487108863506",
      "tradeinDiscount": 300
    },
    "Customer": {
      "Name": "Adobe Magento5",
      "Email": "vitthal@moorup.no",
      "Phone": "12345678",
      "Address": "CDN tech park 47"
    },
    "externalRef": {
      "generatedDate": "2021-11-24T05:38:21.000Z",
      "IDType": "TISETI",
      "Number": "0835586325109278"
    },
    "status": "Collection",
    "_id": "619dcfeb536eb8621849a2fc",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone XS",
      "capacity": "256GB",
      "tradeinDiscount": 317
    },
    "ModifiableValues": {
      "model": "iPhone XS",
      "capacity": "256GB",
      "tradeinDiscount": 317
    },
    "Customer": {
      "Name": "dew sol",
      "Email": "dewangi@moorup.no",
      "Phone": "12345678",
      "Address": "pp 0090"
    },
    "externalRef": {
      "generatedDate": "2021-11-25T11:05:31.000Z",
      "IDType": "TISETI",
      "Number": "3371189211214643"
    },
    "status": "Collection",
    "_id": "619f6dfc536eb8621849a75a",
    "__v": 0
  }, {
    "OriginalValues": {
      "model": "iPhone X",
      "capacity": "64GB",
      "tradeinDiscount": 1600
    },
    "ModifiableValues": {
      "model": "iPhone X",
      "capacity": "64GB",
      "tradeinDiscount": 1600
    },
    "Customer": {
      "Name": "dew",
      "Email": "dew@moorup.no",
      "Phone": "12345678",
      "Address": "pp Oslo 0158"
    },
    "externalRef": {
      "generatedDate": "2021-11-25T11:11:48.000Z",
      "IDType": "TISETI",
      "Number": "5560298665258326"
    },
    "status": "Collection",
    "_id": "619f6f74536eb8621849a765",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphonexr-white-64-f",
      "model": "iPhone XR",
      "capacity": "64GB",
      "color": "White",
      "grade": "F",
      "imei": "357348097980041",
      "tradeinDiscount": 274
    },
    "ModifiableValues": {
      "SKU": "iphonexr-white-64-f",
      "model": "iPhone XR",
      "capacity": "64GB",
      "color": "White",
      "grade": "F",
      "imei": "357348097980041",
      "tradeinDiscount": 274
    },
    "Customer": {
      "Name": "Dewangi S",
      "Email": "dewangi@moorup.no",
      "Phone": "12345678",
      "Address": "Abc corp 123"
    },
    "externalRef": {
      "generatedDate": "2021-11-25T12:17:12.000Z",
      "IDType": "TISETI",
      "Number": "4857842907713204"
    },
    "status": "Collection",
    "_id": "619f7ec9536eb8621849a790",
    "__v": 0
  }, {
    "OriginalValues": {
      "SKU": "iphone11promax-spacegray-64-f",
      "model": "iPhone 11 Pro Max",
      "capacity": "64GB",
      "color": "Space Gray",
      "grade": "F",
      "imei": "353925109975251",
      "tradeinDiscount": 530
    },
    "ModifiableValues": {
      "SKU": "iphone11promax-spacegray-64-f",
      "model": "iPhone 11 Pro Max",
      "capacity": "64GB",
      "color": "Space Gray",
      "grade": "F",
      "imei": "353925109975251",
      "tradeinDiscount": 530
    },
    "Customer": {
      "Name": "Vitthal G",
      "Email": "vitthal@moorup.no",
      "Phone": "12345678",
      "Address": "Abc"
    },
    "externalRef": {
      "generatedDate": "2021-11-25T12:26:16.000Z",
      "IDType": "TISETI",
      "Number": "4533421825775348"
    },
    "status": "Collection",
    "_id": "619f80ea536eb8621849a7a3",
    "__v": 0
  }];
  let headers = new Headers();

  //headers.append('Content-Type', 'text/json');
  if (typeof window !== "undefined") {
    headers.set("Authorization", "Basic " + window.btoa("admin" + ":" + "supersecret"));
  }
  return buybackPhones;
  // return useQuery("getBuybackPhones", () =>
  //   fetch(`http://paksa3.moorup.no/srotah/api/getalldevices`, {headers: headers, method: "GET"}).then((res) => res.json())
  // );
}

export function useGetBuybackPhone(id) {
  let headers = new Headers();

  //headers.append('Content-Type', 'text/json');
  if (typeof window !== "undefined") {
    headers.set("Authorization", "Basic " + window.btoa("admin" + ":" + "supersecret"));
  }

  return useQuery("getBuybackPhone", () =>
    fetch(`http://paksa3.moorup.no/srotah/api/buybackdevice/${id}`, {headers: headers, method: "GET"}).then((res) => res.json())
  );
}

export function useUpdateBuyback(id) {
  let headers = new Headers();

  //headers.append('Content-Type', 'text/json');
  if (typeof window !== "undefined") {
    headers.set("Authorization", "Basic " + window.btoa("admin" + ":" + "supersecret"));
    headers.append("Content-Type", "application/json");
  }



  return useMutation(formData => {
    //debugger;
    
    return fetch(`http://paksa3.moorup.no/srotah/api/editonedevice/`,{headers: headers, method: "POST", body: JSON.stringify({...formData, _id: id})})
  });
}
/* 
"updateBuyback", () =>
    fetch(`http://paksa3.moorup.no/api/editonedevice/`, {headers: headers, method: "GET"}).then((res) => res.json())
  
formData => {
     return fetch('/api', formData)
   }

*/

/*
.get("http://paksa3.moorup.no/api/buybackdevice/" + this.props.match.params.id,{
        auth: {
          username: 'admin',
          password: 'supersecret'
        }

axios
      .get("http://paksa3.moorup.no/api/getalldevices",{
        auth: {
          username: 'admin',
          password: 'supersecret'
        }
        }).then((response) => {
          console.log (JSON.stringify(response));
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
*/

const brandItems = [
  {brand: "apple", image: "/img/brand/apple.png", state: "initial"},
  {brand: "google", image: "/img/brand/google.png", state: "initial"},
  {brand: "htc", image: "/img/brand/htc.png", state: "initial"},
  {brand: "gionee", image: "/img/brand/gionee.png", state: "disabled"},
];

export function useGetBrands() {
  return useQuery("getBrands", () => delay(brandItems));
}

const modelItems = [
  {model: "Apple Iphone 12", image: "/img/phones/1.png", state: "initial"},
  {model: "Apple Iphone SE", image: "/img/phones/bf8ed21e-96c9-1.png", state: "initial"},
  {model: "Apple Iphone 11 Pro Max", image: "/img/phones/bf8ed21e-96c9-2.png", state: "initial"},
  {model: "Apple Iphone 11 Pro", image: "/img/phones/bf8ed21e-96c9-2.png", state: "initial"},
  {model: "Apple Iphone 11", image: "/img/phones/bf8ed21e-96c9-2.png", state: "initial"},
  {model: "Apple Iphone XR", image: "/img/phones/bf8ed21e-96c9-4.png", state: "initial"},
  {model: "Apple Iphone XS", image: "/img/phones/bf8ed21e-96c9-3.png", state: "initial"},
  {model: "Apple Iphone X", image: "/img/phones/bf8ed21e-96c9-4.png", state: "initial"},
  {model: "Apple Iphone 8", image: "/img/phones/bf8ed21e-96c9-5.png", state: "initial"},
  {model: "Apple Iphone 8 Plus", image: "/img/phones/bf8ed21e-96c9-5.png", state: "initial"},
  {model: "Apple Iphone 7", image: "/img/phones/bf8ed21e-96c9-5.png", state: "initial"},
  {model: "Apple Iphone 7 Plus", image: "/img/phones/bf8ed21e-96c9-5.png", state: "initial"},
  {model: "Apple Iphone 6s", image: "/img/phones/bf8ed21e-96c9-6.png", state: "initial"},
  {model: "Apple Iphone 6", image: "/img/phones/bf8ed21e-96c9-7.png", state: "initial"},
  {model: "Apple Iphone 6 Plus", image: "/img/phones/bf8ed21e-96c9-8.png", state: "initial"},
  {model: "Apple Iphone 5s", image: "/img/phones/bf8ed21e-96c9-6.png", state: "initial"},
];

export function useGetModels() {
  return useQuery("getModels", () => delay(modelItems));
}

const deviceDetailResponse = {
  brand: "apple",
  model: "iphone12promax",
  capacity: "128GB",
  color: "gold",
  imei: "122344567778911",
  skupattern: "iphone12promax-gold-128-d",
};

export function useGetDeviceDetails(imei) {
  return useQuery("getDeviceDetails", () => delay(deviceDetailResponse), {
    refetchOnWindowFocus: false,
    enabled: false,
  });
}

const specificationsResponse = {
  capacity: [64, 128, 256],
  color: ["red", "blue"],
  specifications: {Processor: "Apple A14 Bionic", RAM: "4GB", Storage: "64GB / 128GB / 256GB", Battery: "2815 mAh"},
};

export function useGetSpecifications(model) {
  return useQuery("getSpecifications", () => delay(specificationsResponse), {
    refetchOnWindowFocus: false,
  });
}

/**
 *
 * @param {import("next/router").NextRouter} router
 * @param {object} param
 */
export function addQueryParams(router, queryParams) {
  router.replace(
    {
      query: {
        ...router.query,
        ...queryParams,
      },
    },
    undefined,
    {
      shallow: true,
    }
  );
}

/**
 *
 * @param {import("next/router").NextRouter} router
 * @param {String} param
 */

export function removeQueryParam(router, param) {
  const {[param]: _, ...restQueryParams} = router.query;
  router.replace(
    {
      query: {
        ...restQueryParams,
      },
    },
    undefined,
    {
      shallow: true,
    }
  );
}
