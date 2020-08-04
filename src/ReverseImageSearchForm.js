import React, { useRef } from "react";
import Form from 'react-bootstrap/Form';

const ReverseImageSearchForm = params => {
	const handleChange = (e) => {
	  params.setState({file:e.target.files[0]});
	  console.log({file:e.target.files[0]});
	};

	return(
      <Form>
        <Form.Group>
          <Form.File id="reverse_image_search" label="Input image file for search" onChange={handleChange} accept="image/*"/>
        </Form.Group>
      </Form>
	);	
}

export default ReverseImageSearchForm