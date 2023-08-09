import React, { useEffect, useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toaster from "react-hot-toast";
import toast from "react-hot-toast";
import { Form, Input, Button, message, onChange } from "antd";

function ModifierContribution() {
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const { id } = useParams();
  const [contribution, setContribution] = useState([]);

  const [text_contribution, settext_contribution] = useState("");
  const [image_importe, setimage_importe] = useState("");
  const [image_capture, setimage_capture] = useState("");
  const [pdfFile, setpdfFile] = useState("");
  const [validation, Setvalidation] = useState("");

  const [errors, setErrors] = useState({
    text_contribution: "",
    image_importe: "",
    image_capture: "",
    pdfFile: "",
    validation: "",
  });

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://217.182.207.129:8000/api/v1/Contribution/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleUpdate = (values) => {
    axios
      .put(`http://217.182.207.129:8000/api/v1/Contribution/${id}`, values)
      .then((response) => {
        navigate("/contribution");
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
          <Form.Item
            label="text_contribution"
            name="text_contribution"
            rules={[
              { required: true, message: "Please enter text_contribution" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="image_importe"
            name="image_importe"
            rules={[{ required: true, message: "Please enter image_importe" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="image_capture"
            name="image_capture"
            rules={[{ required: true, message: "Please enter image_capture" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="pdfFile"
            name="pdfFile"
            rules={[{ required: true, message: "Please enter pdfFile" }]}
            onChange={onChangeHandler}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ModifierContribution;
