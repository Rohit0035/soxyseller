import React from "react";
import { Card, CardBody, Col, Row, Form, Button,Input,Label,CustomInput,FormGroup } from "reactstrap";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
//import axiosConfig from "../../../../axiosConfig";
class InvoiceSetting extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     description: "",
  //   };
  // }
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.editorState);
    //axiosConfig
    //   .post("/addprivacy_policy", data)
    //   .then((response) => {
    //     console.log(response);
    //     this.props.history.push("/app/privacyPolicy/privacyPolicy");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  render() {
    const { editorState } = this.state;
    const editData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(editData);
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
            Edit Invoice Setting
            </h1>
          </Col>
          {/* <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() => history.push("/app/privacyPolicy/privacyPolicy")}
            >
              Back
            </Button>
          </Col> */}
        </Row>

        <CardBody>
          <Form onSubmit={this.submitHandler}>
            <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Order Prefix:</Label>
                <Input type="text" placeholder="USer Code" />
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Invoice Prefix:</Label>
                <Input type="text" placeholder="USer Code" />
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Invoice Postfix:</Label>
                <Input type="text" placeholder="USer Code" />
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Invoice No. Start From:</Label>
                <Input type="text" placeholder="USer Code" />
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>COD Prefix:</Label>
                <Input type="text" placeholder="USer Code" />
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>COD Postfix:</Label>
                <Input type="text" placeholder="USer Code" />
              </Col>
            </Row> 
            <Editor
              toolbarClassName="demo-toolbar-absolute"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              editorState={editorState}
              onEditorStateChange={this.onEditorStateChange}
              toolbar={{
              options: ["inline", "blockType", "fontSize", "fontFamily"],
              inline: {
              options: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "monospace",
                  ],
              bold: { className: "bordered-option-classname" },
              italic: { className: "bordered-option-classname" },
              underline: { className: "bordered-option-classname" },
              strikethrough: { className: "bordered-option-classname" },
              code: { className: "bordered-option-classname" },
              },
                blockType: {
                  className: "bordered-option-classname",
                },
                fontSize: {
                  className: "bordered-option-classname",
                },
                fontFamily: {
                  className: "bordered-option-classname",
                },
              }}
            />
            <Row>
             <FormGroup>
              <Col lg="6" md="6" sm="6" className="mb-2">
              <Label for="exampleCustomFileBrowser">Seal:</Label>
                <CustomInput 
                    type="file" 
                    id="exampleCustomFileBrowser" 
                    name="customFile" />
              <Label for="exampleCustomFileBrowser">Sign:</Label>
                <CustomInput 
                    type="file" 
                    id="exampleCustomFileBrowser" 
                    name="customFile" />
                    </Col>
            </FormGroup>
          </Row>
            <Button color="primary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default InvoiceSetting;

