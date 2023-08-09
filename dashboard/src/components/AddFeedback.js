import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddFeedback() {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://217.182.207.129:8000/api/v1/feedback",
        values
      );
      message.success(`Feedback has been added successfully!`);
      form.resetFields();
      navigate("/feedback");
    } catch (error) {
      message.error(`An error occurred while adding feedback`);
    }
  };

  return (
    <div className=" container row p-4">
      <div className="mt-4"></div>
      <div className="container col-12 col-lg-4">
        <h1>Add Feedbacks</h1>
        <Form form={form} onFinish={onFinish}>
          <div>
            <Form.Item
              label="message"
              name="message"
              rules={[
                { required: true, message: "Please enter feedback message" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="emojie_reaction"
              name="emojie_reaction"
              rules={[
                {
                  required: true,
                  message: "Please enter feedback emojie_reaction",
                },
              ]}
            >
              <Input type="Number" />
            </Form.Item>

            <Form.Item
              label="photoOrVideo"
              name="photoOrVideo"
              rules={[
                {
                  required: true,
                  message: "Please enter feedback photoOrVideo",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="utilisateursId"
              name="utilisateursId"
              rules={[
                {
                  required: true,
                  message: "Please enter feedback utilisateursId",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Feedback
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddFeedback;
