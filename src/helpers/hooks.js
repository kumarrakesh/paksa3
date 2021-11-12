import {useMutation, useQuery} from "react-query";
import {delay} from "./utils";

export function useGetBuybackPhones() {
  let headers = new Headers();

  //headers.append('Content-Type', 'text/json');
  if (typeof window !== "undefined") {
    headers.set("Authorization", "Basic " + window.btoa("admin" + ":" + "supersecret"));
  }

  return useQuery("getBuybackPhones", () =>
    fetch(`http://paksa3.moorup.no/api/getalldevices`, {headers: headers, method: "GET"}).then((res) => res.json())
  );
}

export function useGetBuybackPhone(id) {
  let headers = new Headers();

  //headers.append('Content-Type', 'text/json');
  if (typeof window !== "undefined") {
    headers.set("Authorization", "Basic " + window.btoa("admin" + ":" + "supersecret"));
  }

  return useQuery("getBuybackPhone", () =>
    fetch(`http://paksa3.moorup.no/api/buybackdevice/${id}`, {headers: headers, method: "GET"}).then((res) => res.json())
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
    
    return fetch(`http://paksa3.moorup.no/api/editonedevice/`,{headers: headers, method: "POST", body: JSON.stringify({...formData, _id: id})})
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
