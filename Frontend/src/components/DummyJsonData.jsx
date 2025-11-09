import React, { useState } from "react";
import DevtoolLeftBar from "./DevtoolLeftBar";
import "@ant-design/v5-patch-for-react-19";
import { Button, Card, Empty, Form, InputNumber, message, Select, Tooltip } from "antd";
import { Copy } from "lucide-react";
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, ToastContainer } from "react-toastify";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


function DummyJsonData() {
  const [payload, setPayload] = useState("");
  const [type,setType]=useState('users')
  const [num,setNum]=useState(2)
  const [openMenu,setOpenMenu]=useState(false)

  const current=new Date()
  const date=current.toLocaleString()
  console.log(date);
  
  

  const designation=[
      'manager',
      'sales executive',
      'font-end developer',
      'backend developer',
      'android developer',
      'ceo',
      'cto',
      'product manager'
  ]
  const getDegination=()=>{
     const indexs=Math.floor(Math.random()*designation.length)
     return designation[indexs]
  }

  const generateUser = () => {
    return {
      id: nanoid(),
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      mobile: faker.phone.number({ style: "international" }),
      gender: faker.person.sex(),
      streetAddress: faker.location.streetAddress({ useFullAddress: true }),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      pincode: faker.location.zipCode(),
      createdAt: faker.date.anytime(),
    };
  };
  const generatProduct = () => {
    return {
      id: nanoid(),
      productName: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price({ min: 200, max: 10000 })),
      discount: Number(faker.commerce.price({ min: 0, max: 40 })),
      rating: Number(faker.commerce.price({ min: 1, max: 5 })),
      category: faker.commerce.productAdjective(),
      brand: faker.company.buzzNoun(),
      image: faker.image.urlLoremFlickr(),
      createdAt: faker.date.anytime(),
    };
  };

const generatPayments = () => {
    return {
      id: nanoid(),
      user:{
         id: nanoid(),
         fullName: faker.person.fullName(),
         email: faker.internet.email(),
         mobile: faker.phone.number({ style: "international" }),
        },
      product:{
         id: nanoid(),
         productName: faker.commerce.productName(),
         },
      amount:Number(faker.commerce.price({ min: 200, max: 10000 })),
      orderId:`OID-${nanoid()}`,
      transactionId:`TID-${nanoid()}`,
      method:'UPI',
      tax:Number(faker.commerce.price({ min: 0, max: 40 })),
      createdAt:faker.date.anytime(),

    };
  };

  const generateEmployees=()=>{
     return{
       id: nanoid(),
      emloyeeName: faker.person.fullName(),
      email: faker.internet.email(),
      mobile: faker.phone.number({ style: "international" }),
      salary:Number(faker.commerce.price({ min: 15000, max: 100000 })),
      designation:getDegination(),
      gender: faker.person.sex(),
      streetAddress: faker.location.streetAddress({ useFullAddress: true }),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      pincode: faker.location.zipCode(),
      createdAt: faker.date.anytime(),
     }
  }

  const generateData = (value) => {
    const temp = [];
    for (let i = 0; i < value.noOfData; i++) {
      if (value.data === "users") {
        temp.push(generateUser());
        setType("Users")
      } else if (value.data === "products") {
        temp.push(generatProduct());
        setType("Products")
      } else if (value.data === "payments") {
        temp.push(generatPayments())
        setType("Payments")
      }
      else if(value.data === "employee"){
          temp.push(generateEmployees())
          setType("Employees")
      }
      else{
        message.error("Match not found!")
      }
    }
    const strjson = JSON.stringify(temp, null, 4);
    setPayload(strjson);
    setNum(temp.length)
  };


  //for copy json code
  const onCopy = () => {
    navigator.clipboard.writeText(payload);
    toast.success("JSON data copied!");
  };

//for download json code
const onDownload = () => {
  if (!payload) {
    toast.error("No data to download!");
    return;
  }

  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${type}_${num}_items.json`;
  link.click();
  URL.revokeObjectURL(url);
  toast.success("JSON downloaded successfully!");
};


  return (
    <div className="min-h-screen mt-24 w-full md:mt-22">
      <div className="flex flex-row ">
        <div className="md:w-[280px] min-h-screen  justify-center items-center px-4 md:block hidden bg-gray-700 border-gray-500 border ">
          <DevtoolLeftBar />

        </div>
        {/* for mobile */}
        <div className="md:hidden fixed top-22 z-1 left-4">
          <button
           onClick={()=>setOpenMenu(!openMenu)}
           className=" "
          >
            {openMenu?"":<DragIndicatorIcon fontSize="large"/>}

          </button>
          {
            openMenu&&(
                <div className="w-full rounded-r-lg bg-gray-500 min-h-screen">
                    <button onClick={()=>setOpenMenu(!openMenu)} className="absolute bg-amber-500 cursor-pointer  font-semibold hover:bg-amber-600 hover:text-white rounded-lg px-2 py-1 mb-4 right-2 top-8 hover:scale-110 transition-transform duration-200">CLOSE</button>
                    <DevtoolLeftBar/>
                </div>
            )
          }
        </div>

        <div className="flex w-full flex-col gap-6 bg-gray-600  px-10 pb-50 md:pb-10 py-12">
          <div className=" space-y-4">
            <h1 className="text-3xl font-semibold space-y-3">Dummy JSON Generator — Premium Dev Tool</h1>
            <p>
              Generate up to 100 realistic JSON records for development, seeding
              databases, or API testing — with MongoDB-ready ObjectId & $date
              support.
            </p>
          </div>
          <div className="Dynamic_change_data border px-4 rounded-lg w-fit py-2 space-y-2">
            <h1>{type}</h1>
            <span>{num} items. {date}</span>
          </div>

          <div className="row1   h-[calc(100vh-210px)] flex flex-col md:flex-row md:gap-4 gap-8  bg-gray-600">
            <Card style={{
    backgroundColor: "#6B7180", // dark gray
    color: "white",
    border: "1px solid #475569",
    paddingTop:"30px"
  }}>
              <Form
                onFinish={generateData}
                className="flex text-white flex-col gap-2"
                layout="vertical"
                initialValues={{
                  data: "users",
                  noOfData: 2,
                }}
              >
                <Form.Item
                  label={<span className="text-white">Choose category of Data :</span>}
                  name="data"
                  rules={[{ required: true }]}
                  className="text-white"
                >
                  <Select size="large" placeholder="Choose data">
                    <Select.Option value="users">Users</Select.Option>
                    <Select.Option value="products">Products</Select.Option>
                    <Select.Option value="employee">Employees</Select.Option>
                    <Select.Option value="payments">Payments</Select.Option>
                    {/* <Select.Option value="users">Users</Select.Option> */}
                  </Select>
                </Form.Item>
                <Form.Item
                  label={<span className="text-white">Set Number of items (max-100) :</span>}
                  name="noOfData"
                  rules={[{ required: true }]}
                  className="w-full"
                >
                  <InputNumber
                    size="large"
                    placeholder="Enter Number of items"
                    className="!w-full"
                    max={100}
                  ></InputNumber>
                </Form.Item>
                <Form.Item className="w-full">
                  <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    className="w-full text-center"
                  >
                    Generate
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            {
                payload.length===0?
                <div className="w-full flex border border-gray-500 justify-center items-center">
                <Empty description={
                    <span className="text-2xl text-white">"Click Generate button to get Your data "</span>
                } size="large" className="text-white"/>
                </div>
                :
                <Card
              title={<span className="text-white  px-3 rounded ">{num} items available</span>}
              extra={<div className="flex justify-between items-center gap-10 ">
                <Tooltip title="Copy data" className="order-2">
                  <Copy onClick={onCopy} className="text-white cursor-pointer space-y-2" />
                </Tooltip>
                <Tooltip  className="order-1" title="Download Data">
                         <Button onClick={onDownload} className="order-1" type="primary"><FileDownloadIcon/>Download</Button>
                </Tooltip>
                
            </div>
              }
              className="md:w-8/12 space-x-2 "
              style={{
    backgroundColor: "#6B7180", // dark gray
    color: "white",
    border: "1px solid #475569",
  }}
            >
              <div className="h-[400px] overflow-y-auto scrollbar-hide">
                <SyntaxHighlighter
                  wrapLongLines
                  language="javascript"
                  style={dark}
                >
                  {payload}
                </SyntaxHighlighter>
              </div>
            </Card>
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DummyJsonData;
