import React, { useState } from "react";
import { Form, Input, Button, message, DatePicker, InputNumber } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMonument() {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleAddMonument = async (values) => {
    try {
      const response = await axios.post(
        "http://217.182.207.129:8000/api/v1/monument",
        values
      );
      message.success(`Monument has been added successfully!`);
      form.resetFields();
      navigate("/monument");
    } catch (error) {
      message.error(`An error occurred while adding monuments`);
    }
  };

  const uploadImage = async () => {
    //headhi tnajem tfasakhha
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "wiemifaoui");
    await axios
      .post("https://api.cloudinary.com/v1_1/dihjiztft/upload", form)
      .then((result) => {
        setUrl(result.data.secure_url);
      });
  };

  const onFinish = async (values) => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "wiemifaoui");
    await axios
      .post("https://api.cloudinary.com/v1_1/dihjiztft/upload", form)
      .then(async (result) => {
        // lahne a7na sur eli upload sar
        setUrl(result.data.secure_url);
        // wa9tha najmou n3mlou el add monument
        // handleAddMonument te9bl variable values ama yelzem feha qr_code: result.data.secure_url
        await handleAddMonument({
          ...values,
          qr_code: result.data.secure_url,
        });
      });
  };

  return (
    <div className=" container row p-4">
      <div className="mt-4"></div>
      <div className="container col-12 col-lg-4">
        <h1>Add Monument</h1>
        <Form form={form} onFinish={onFinish}>
          <div>
            <Form.Item
              label="geom"
              name="geom"
              rules={[{ required: true, message: "Please enter  geom" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="nom_monument"
              name="nom_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  nom_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="latitude_monument"
              name="latitude_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  latitude_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="longitude_monument"
              name="longitude_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  longitude_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="statut_monument"
              name="statut_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  statut_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="relief"
              name="relief"
              rules={[
                {
                  required: true,
                  message: "Please enter  relief",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="adresse_monument"
              name="adresse_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  adresse_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="importance_monument"
              name="importance_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  importance_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="accessibilite_monument"
              name="accessibilite_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  accessibilite_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="description_monument"
              name="description_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  description_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="horaire_ouverture_ete"
              name="horaire_ouverture_ete"
              rules={[
                {
                  required: true,
                  message: "Please enter  horaire_ouverture_ete",
                },
              ]}
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
              rules={[
                {
                  required: true,
                  message: "Please enter  horaire_fermeture_ete",
                },
              ]}
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
              rules={[
                {
                  required: true,
                  message: "Please enter  horaire_ouverture_hiver",
                },
              ]}
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
              rules={[
                {
                  required: true,
                  message: "Please enter  horaire_fermeture_hiver",
                },
              ]}
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
              name="epoque_dominante"
              rules={[
                {
                  required: true,
                  message: "Please enter  epoque_dominante",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="epoque_moins_visible"
              name="epoque_moins_visible"
              rules={[
                {
                  required: true,
                  message: "Please enter  epoque_moins_visible",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="troisieme_epoque"
              name="troisieme_epoque"
              rules={[
                {
                  required: true,
                  message: "Please enter  troisieme_epoque",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="fonction_monument"
              name="fonction_monument"
              rules={[
                {
                  required: true,
                  message: "Please enter  fonction_monument",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="image_panoramique"
              name="image_panoramique"
              rules={[
                {
                  required: true,
                  message: "Please enter  image_panoramique",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="etat_conservation"
              name="etat_conservation"
              rules={[
                {
                  required: true,
                  message: "Please enter  duree_visite",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="duree_visite"
              name="duree_visite"
              rules={[
                {
                  required: true,
                  message: "Please enter  duree_visite",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

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
            </Form.Item>
            <Form.Item
              label="affect"
              name="affect"
              rules={[
                {
                  required: true,
                  message: "Please enter  affect",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="qr_code"
              name="qr_code"
              rules={[
                {
                  required: true,
                  message: "Please enter  qr_code",
                },
              ]}
              onChange={(e) => setFile(e.target.files[0])}
            >
              <Input type="file" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Monument
              </Button>{" "}
              <img src={url} width={200} />{" "}
              {/*chouf ena jebet l image b url nheb
              l url hedheka nhezou li tableau ywali yokhrej image*/}
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddMonument;
