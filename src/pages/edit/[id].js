import {useRouter} from "next/router";
import {useGetBuybackPhone,useUpdateBuyback} from "../../helpers/hooks";
import {HeartIcon} from "../../components/custom_icons";
import {Layout} from "../../components/layout";
import {Select, Form, Button} from "antd";

const {Option} = Select;

const statusValues = [
  {
    name: "Estimation",
    value: "estimation",
  },
  {
    name: "Collection",
    value: "collection",
  },
  {
    name: "Cosmetic",
    value: "cosmetic",
  },
  {
    name: "Functional",
    value: "functional",
  },
  {
    name: "Invoiced",
    value: "invoiced",
  },
  {
    name: "BOS",
    value: "bos",
  },
  {
    name: "Credit Pay",
    value: "creditpay",
  },
  {
    name: "Completed",
    value: "completed",
  },
];

const gradeValues = [
  {
    name: "C",
    value: "c",
  },
  {
    name: "D",
    value: "d",
  },
  {
    name: "E",
    value: "e",
  },
  {
    name: "F",
    value: "f",
  },
  {
    name: "B",
    value: "b",
  },
  {
    name: "A",
    value: "a",
  }
];

export default function EditRecord() {
  const router = useRouter();
  const {id} = router.query;

  const {isLoading, error, data} = useGetBuybackPhone(id);
  const mutation = useUpdateBuyback(id)
  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return "error...";
  }

  console.log(data);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    mutation.mutate(values, {onSuccess: ()=>{
      router.push("/")
    }});
    console.log("Values", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <div className="container mx-auto bg-gray-100">
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <div className="p-2">
            <div className="sm:max-w-5xl sm:mx-auto sm:grid sm:grid-cols-[1.3fr,2fr] sm:border sm:border-solid sm:border-[#7070704D] sm:rounded-lg sm:bg-white">
              <Form.Item label="Status" name="status">
                <Select defaultValue={data[0].status} style={{width: 120}} onChange={handleChange}>
                  {statusValues.map((item) => {
                    return (
                      <Option key={item.name} value={item.value}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
           
              </Form.Item>
            </div>
          </div>
          <div className="rowofphone p-2">{data[0].status}</div>

          <div className="custminfor p-2"></div>
          <div className="genInfo p-2"></div>
          <div className="savebutton p-2">
            <Form.Item wrapperCol={{span: 12, offset: 6}}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Layout>
  );
}
