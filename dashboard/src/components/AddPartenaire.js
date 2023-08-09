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
        "http://217.182.207.129:8000/api/v1/partenaire",
        values
      );
      message.success(`Partenaire has been added successfully!`);
      form.resetFields();
      navigate("/partenaire");
    } catch (error) {
      message.error(`An error occurred while adding partenaire`);
    }
  };

  return (
    <div className=" container row p-4">
      <div className="mt-4"></div>
      <div className="container col-12 col-lg-4">
        <h1>Add partenaire</h1>
        <Form form={form} onFinish={onFinish}>
          <div>
            <Form.Item
              label="nom_partenaire"
              name="nom_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  nom_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="adresse_partenaire"
              name="adresse_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  adresse_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="categorie_partenaire"
              name="categorie_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  categorie_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="telephone_partenaire"
              name="telephone_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  telephone_partenaire",
                },
              ]}
            >
              <Input type="integer" />
            </Form.Item>
            <Form.Item
              label="statut_partenaire"
              name="statut_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  statut_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="heure_ete_partenaire"
              name="heure_ete_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  heure_ete_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="heure_hiver_partenaire"
              name="heure_hiver_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  heure_hiver_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="longitude_partenaire"
              name="longitude_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  longitude_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="description_partenaire"
              name="description_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  description_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* 
         
           
            <Form.Item
              label="longitude_partenaire"
              name="longitude_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  longitude_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="description_partenaire"
              name="description_partenaire"
              rules={[
                {
                  required: true,
                  message: "Please enter  description_partenaire",
                },
              ]}
            >
              <Input />
            </Form.Item> */}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Partenaire
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddContribution;
