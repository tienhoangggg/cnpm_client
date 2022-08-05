import axios from 'axios';
import React from "react";
import "./upload.css"
import FooterWibu from '../../components/FooterWibu';
import Select from 'react-select';
import NavbarWibu from "../../components/NavbarWibu";
import { useEffect, useState, useCallback } from 'react';
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
  const [category, setCategory] = useState("")
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
    axios.post("./upload", formData);
    //window.location.reload(false);
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
            <div className='submit-button'>
            <button onClick={(e)=>setFile(e.target.value=null)}>Cancel</button>
            <button onClick={handleSubmission} >Submit</button>
            </div>
      
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

  function handleCategoryChange([e]) {
    if (e.value){
      console.log([e.value]);
   }
  }

  return (
    <>
      <NavbarWibu />
      <ShowSquare urlimage={fileDataURL} />
      <Select 
      closeMenuOnSelect={true}
      defaultValue= {[category[1]]}
      isMulti
      name="category"
      onChange={handleCategoryChange }
      options={categoryOption}
      className="basic-multi-select"
      classNamePrefix="select" />
    </>
  );
}
export default Upload;