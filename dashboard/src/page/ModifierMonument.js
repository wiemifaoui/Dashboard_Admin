import React, { useEffect, useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toaster from "react-hot-toast";
import toast from "react-hot-toast";
import {
  Form,
  Input,
  Button,
  message,
  onChange,
  InputNumber,
  DatePicker,
} from "antd";

function ModifierMonument() {
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const { id } = useParams();
  const [contribution, setContribution] = useState([]);

  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://217.182.207.129:8000/api/v1/monument/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleUpdate = (values) => {
    axios
      .put(`http://217.182.207.129:8000/api/v1/monument/${id}`, values)
      .then((response) => {
        navigate("/monument");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" container row p-4">
      <div className="mt-4"></div>
      <div className="container col-12 col-lg-4">
        <Form initialValues={data} onFinish={handleUpdate}>
          <div>
            <Form.Item label="geom" name="geom">
              <Input />
            </Form.Item>

            <Form.Item label="nom_monument" name="nom_monument" rules={[{}]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="latitude_monument"
              name="latitude_monument"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="longitude_monument"
              name="longitude_monument"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="statut_monument"
              name="statut_monument"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item label="relief" name="relief" rules={[{}]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="adresse_monument"
              name="adresse_monument"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="importance_monument"
              name="importance_monument"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="accessibilite_monument"
              name="accessibilite_monument"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="description_monument"
              name="description_monument"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="horaire_ouverture_ete"
              name="horaire_ouverture_ete"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <DatePicker
                showTime={{
                  format: "HH:mm",
                  minuteStep: 15,
                }}
                // defaultValue={now}
                // onChange={onChange}
                // format="YYYY-MM-DD HH:mm"
              />
            </Form.Item>
            <Form.Item
              label="horaire_fermeture_ete"
              name="horaire_fermeture_ete"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <DatePicker
                showTime={{
                  format: "HH:mm",
                  minuteStep: 15,
                }}
              />
            </Form.Item>

            <Form.Item
              label="horaire_ouverture_hiver"
              name="horaire_ouverture_hiver"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <DatePicker
                showTime={{
                  format: "HH:mm",
                  minuteStep: 15,
                }}
              />
            </Form.Item>
            <Form.Item
              label="horaire_fermeture_hiver"
              name="horaire_fermeture_hiver"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <DatePicker
                showTime={{
                  format: "HH:mm",
                  minuteStep: 15,
                }}
              />
            </Form.Item>
            <Form.Item
              label="epoque_dominante"
              value="epoque_dominante"
              name="epoque_dominante"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="epoque_moins_visible"
              name="epoque_moins_visible"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="troisieme_epoque"
              name="troisieme_epoque"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="fonction_monument"
              name="fonction_monument"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="image_panoramique"
              name="image_panoramique"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="etat_conservation"
              name="etat_conservation"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="duree_visite"
              name="duree_visite"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="priorite"
              name="priorite"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="affect"
              name="affect"
              rules={[{}]}
              onChangeHandler={onChangeHandler}
            >
              <Input />
            </Form.Item>

            {/* 
           
            <Form.Item
              label="priorite"
              name="priorite"
              rules={[
                {
                  required: true,
                  message: "Please enter  priorite",
                },
              ]}
            >
              <Input />
            </Form.Item> */}
            {/* 
            
          
          
           
           */}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Modifier Monument
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ModifierMonument;
