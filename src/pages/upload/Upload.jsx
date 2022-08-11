import axios from "../../axios";
import React from "react";
import "./upload.css";
import FooterWibu from "../../components/FooterWibu";
import Select from "react-select";
import Resizer from "react-image-file-resizer";
import NavbarWibu from "../../components/NavbarWibu";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { getCate } from "../../services/imageServices";
const imageMimeType = /image\/(png|jpg|jpeg)/i;
const categoryOption = [
  {
    value: "anime",
    label: "Anime",
  },
  {
    value: "girl anime",
    label: "Girl Anime",
  },
  {
    value: "boy anime",
    label: "Boy Anime",
  },
];

function Upload() {
  const [afile, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [fileDataURL1, setFileDataURL1] = useState(null);
  const [category, setCategory] = useState([]);
  const [text, setText] = useState("");
  const [alternativeFile, setAlternativeFile] = useState(null);
  //const [categoryOption,setCategoryOption]=useState([]);
  const [selectValue, setSelectValue] = useState(null);
  const name = useState("");

  const resizeFile = (afile) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        afile,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  const changeHandler = async (e) => {
    // const afile = e.target.files[0];
    // const image = resizeFile(afile);
    // if (!afile.type.match(imageMimeType)) {
    //   alert("Image mime type is not valid");
    //   return;
    // }
    // setFile(afile);
    // setAlternativeFile(image);

    const fileo = e.target.files[0];
    setFile(fileo);
    const image = await resizeFile(fileo);
    setAlternativeFile(image);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (afile) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
          
        }
      };
      fileReader.readAsDataURL(afile);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [afile]);


 

  function checkCate() {
    if (category.length < 1) {
      toast.dark("Category cannot less than 1");
      return false;
    } else return true;
  }

  //const cateOp=async()=>{
  //const cateName=await getCate(name)
  //setCategoryOption(name);
  //}

  const handleSubmission = async () => {
    if (!checkCate()) {
      return;
    }

    const formData = new FormData();
    const alternativeForm = new FormData();
    formData.append("file", afile);

    formData.append("fileName", afile.name);

    formData.append(
      "category",
      category.map((cate) => {
        return cate.value;
      })
    );
    formData.append("description", text);

    alternativeForm.append("file", alternativeFile);

    alternativeForm.append("fileName", alternativeFile.name);

    alternativeForm.append(
      "category",
      category.map((cate) => {
        return cate.value;
      })
    );
    alternativeForm.append("description", text);
    try {
      const response = await axios.post("upload/", formData);
      const response1 = await axios.post("upload/", alternativeForm);
    } catch (error) {
      console.log(error);
    }
    toast.dark("Upload success");
    window.location.reload(false);
  };

  const imageStyles = { maxWidth: "10rem", maxHeight: "10rem" };
  function ShowSquare(props) {
    const fileDataURL = props.urlimage;
    if (fileDataURL && afile) {
      return (
        <div className="img-preview-wrapper">
          {<img src={fileDataURL} alt="preview" id="imgUpload" />}
        </div>
      );
    } else {
      return (
        <>
          <div className="uploadZone">
            <input
              type="file"
              id="image"
              accept=".png, .jpg, .jpeg"
              onChange={changeHandler}
            />
          </div>
        </>
      );
    }
  }

  return (
    <>
      <NavbarWibu />
      <div className="upload-container">
        <ShowSquare urlimage={fileDataURL} />

        <div className="upload__fields">
          <div className="upload__field">
            <p className="upload__field-label">
               Description
            </p>
            <input
              className="upload__field-input"
              placeholder="Write description for the image"
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="upload__field">
            <p className="upload__field-label">Select category</p>
            <Select
              className="upload__field-select"
              closeMenuOnSelect={true}
              defaultValue={[category[1]]}
              isMulti
              name="category"
              onChange={(e) => setCategory(e)}
              options={categoryOption}
              isClearable
              // className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="submit-button">
            <button onClick={(e) => setFile((e.target.value = null))}>
              Cancel
            </button>
            <button onClick={handleSubmission}>Submit</button>
          </div>
        </div>
      </div>
      <FooterWibu />
    </>
  );
}
export default Upload;

