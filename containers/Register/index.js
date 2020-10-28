import React from "react";


import { Form, Input, Button, Select,notification } from 'antd';
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
const onFinish = (values) => {
    notification["success"]({
        message: "Registro Exitoso",
        style: {
          width: 600,
        },
        description: `Te llamas ${values.nombre} y tu apellido ${values.apellido} tu edad es ${values.edad} vives en ${values.pais} en la ciudad de ${values.ciudad}`,
      });
  };



export const Register = () => {
    const register =(values)=>{
        alert(values.alert)
    }
    return (
     <div style={{ 
           
        backgroundColor: "orange", 
        textAlign : "center",
     }}> 
     <h1>REGISTRATE</h1>
    <div style={{ 
           
        
        width: 300,
        height : 1000,
        display: "inline-flex", flexDirection: "column" 
        }}>
         <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      
    >
      <Form.Item
        label="Nombre"
        name="nombre"
     
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellido"
        name="apellido"
      
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Cedula"
        name="cedula"
       
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Edad"
        name="edad"
        
      >
        <Input />
      </Form.Item>
      <Form.Item label="Pais"
        name="pais">
      <Select
    showSearch
    
    placeholder="Select a country"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="bolivia">Bolivia</Option>
    <Option value="peru">Peru</Option>
    <Option value="colombia">Colombia</Option>
  </Select>
  </Form.Item>
     
      <Form.Item
        label="Ciudad"
        name="ciudad"
      
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          REGISTRAR
        </Button>
      </Form.Item>
    </Form>
        
    </div>
    </div>
  );
};

export default Register;