import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddContribution() {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://217.182.207.129:8000/api/v1/contribution",
        values
      );
      message.success(`Contribution has been added successfully!`);
      form.resetFields();
      navigate("/contribution");
    } catch (error) {
      message.error(`An error occurred while adding contribution`);
    }
  };

  return (
    <div className=" container row p-4">
      <div className="mt-4"></div>
      <div className="container col-12 col-lg-4">
        <h1>Add Contribution</h1>
        <Form form={form} onFinish={onFinish}>
          <div>
            <Form.Item
              label="text_contribution"
              name="text_contribution"
              rules={[
                {
                  required: true,
                  message: "Please enter contribution text_contribution",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="image_importe"
              name="image_importe"
              rules={[
                {
                  required: true,
                  message: "Please enter contribution image_importe",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="image_capture"
              name="image_capture"
              rules={[
                {
                  required: true,
                  message: "Please enter contribution image_capture",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="pdfFile"
              name="pdfFile"
              rules={[
                {
                  required: true,
                  message: "Please enter contribution pdfFile",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="image_importe"
              name="image_importe"
              rules={[
                {
                  required: true,
                  message: "Please enter contribution image_importe",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="validation"
              name="validation"
              rules={[
                {
                  required: true,
                  message: "Please enter contribution validation",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Contribution
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddContribution;
