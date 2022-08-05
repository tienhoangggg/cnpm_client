import axios from '../../axios';
import React from "react";
import "./upload.css"
import FooterWibu from '../../components/FooterWibu';
import Select from 'react-select';
import NavbarWibu from "../../components/NavbarWibu";
import { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Layout from '../layout/Layout';
const imageMimeType = /image\/(png|jpg|jpeg)/i;
const categoryOption = [
  {
    value: 'anime', label: 'Anime'
  },
  {
    value: 'girl anime', label: 'Girl Anime'
  },
  {
    value: 'boy anime', label: 'Boy Anime'
  },
]

function Upload() {
  const [afile, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [category, setCategory] = useState([])
  const changeHandler = (e) => {
    const afile = e.target.files[0];
    if (!afile.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(afile);
  }
  useEffect(() => {
    let fileReader, isCancel = false;
    if (afile) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(afile);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [afile]);

  

  const handleTag = () => {
    <Select options={categoryOption} />
  }
  function checkCate()
  {
    if (category.length<1)
    {
        toast.dark("Category cannot less than 1");
        return false
    }
    else 
    return true
  }
  var website = 'success';
  const handleSubmission = () => {
    console.log(website)
    const formData = new FormData();
    formData.append(
      'File',
      afile,
      afile.name,
      category
    );
//<<<<<<< HEAD
    if (checkCate())
   { 
    axios.post("./upload", formData);
    window.location.reload(false); 
    }

//=======
    axios.post("/upload", formData);
    //window.location.reload(false);
//>>>>>>> c656029766678793db3356897b1023fb4afee5f7
  }
  const imageStyles = { maxWidth: '10rem', maxHeight: '10rem' };
  function ShowSquare(props) {
    const fileDataURL = props.urlimage;
    if (fileDataURL&& afile) {
      return (
        <div className="img-preview-wrapper">
          {
            <img
              src={fileDataURL} alt="preview" id="imgUpload" />
          }
           
        </div>
      );
    } else {
      return (
        <>
          <div  className='uploadZone' >
            <input
              type="file"
              id='image'
              accept='.png, .jpg, .jpeg'
              onChange={changeHandler}

            />
          </div>

        </>);
    }
  }

  return (
    <>
      <NavbarWibu />
        <div className="upload-container">
          <ShowSquare urlimage={fileDataURL} />

          <div className="upload__fields">
            <div className='upload__field'>
              <p className='upload__field-label'>Write description for the image</p>
              <input className='upload__field-input'></input>
            </div>

            <div className='upload__field'>
              <p className='upload__field-label'>Select category</p>
              <Select
                className='upload__field-select'
                closeMenuOnSelect={true}
                defaultValue= {[category[1]]}
                isMulti
                name="category"
                onChange={(e) => setCategory(e)}
                options={categoryOption}
                isClearable
                // className="basic-multi-select"
                classNamePrefix="select"
            
                />
            </div>
            <div className='submit-button'>
            <button onClick={(e)=>setFile(e.target.value=null)}>Cancel</button>
            <button onClick={handleSubmission} >Submit</button>
          
            </div>
      
          </div>

        </div>
      <FooterWibu/>
    </>
  );
}
export default Upload;