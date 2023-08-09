import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCircuit() {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://217.182.207.129:8000/api/v1/thematique",
        values
      );
      message.success(`Circuit has been added successfully!`);
      form.resetFields();
      navigate("/circuit");
    } catch (error) {
      message.error(`An error occurred while adding circuit`);
    }
  };

  return (
    <div className=" container row p-4">
      <div className="mt-4"></div>
      <div className="container col-12 col-lg-4">
        <h1>Add Circuit</h1>
        <Form form={form} onFinish={onFinish}>
          <div>
            <Form.Item
              label="nom_thematique"
              name="nom_thematique"
              rules={[
                { required: true, message: "Please enter  nom_thematique" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="description_thematique"
              name="description_thematique"
              rules={[
                {
                  required: true,
                  message: "Please enter  description_thematique",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="categorie_thematique"
              name="categorie_thematique"
              rules={[
                {
                  required: true,
                  message: "Please enter  categorie_thematique",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="nbr_etape"
              name="nbr_etape"
              rules={[
                {
                  required: true,
                  message: "Please enter  nbr_etape",
                },
              ]}
            >
              <Input type="Number" />
            </Form.Item>
            <Form.Item
              label="kilometrage"
              name="kilometrage"
              rules={[
                {
                  required: true,
                  message: "Please enter  kilometrage",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="duree"
              name="duree"
              rules={[
                {
                  required: true,
                  message: "Please enter  duree",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="depart_longitude_circuit"
              name="depart_longitude_circuit"
              rules={[
                {
                  required: true,
                  message: "Please enter  depart_longitude_circuit",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="depart_latitude_circuit"
              name="depart_latitude_circuit"
              rules={[
                {
                  required: true,
                  message: "Please enter  depart_latitude_circuit",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="image"
              name="img"
              rules={[
                {
                  required: true,
                  message: "Please enter  image",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="video"
              name="video"
              rules={[
                {
                  required: true,
                  message: "Please enter  video",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Circuit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddCircuit;
