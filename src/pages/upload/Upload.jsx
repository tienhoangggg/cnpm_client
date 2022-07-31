import axios from 'axios';
import React from "react";
import FooterWibu from '../../components/FooterWibu';
import Select from 'react-select';
import NavbarWibu from "../../components/NavbarWibu";
import { useEffect, useState } from 'react';
const imageMimeType = /image\/(png|jpg|jpeg)/i;

function Upload() {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [category, setCategory] = useState("")
  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  }
  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);

	const option = [
		{
			value: 'anime', label: 'Anime'
		},
		{
			value: 'girl anime', label: 'Girl Anime'
		},
	]

	const handleTag = () => {
		<Select category={option} />
	}
	var website = 'success';
  const handleSubmission = () => {
	console.log(website)
	const formData = new FormData();

	formData.append(
		'File',
		file,
		file.name,
		category
	);
	axios.post("./upload", formData);
}
  return (
    <>
	<NavbarWibu/>
      <form>
        <p>
          <label htmlFor='image'> Browse images  </label>
          <input
            type="file"
            id='image'
            accept='.png, .jpg, .jpeg'
            onChange={changeHandler}
          />
        </p>
        <p>
		<button onClick={handleSubmission}>Submit</button>
        </p>
      </form>
      {fileDataURL ?
        <p className="img-preview-wrapper">
          {
            <img src={fileDataURL} alt="preview" />
          }
        </p> : null}
    </>
  );
}
export default Upload;