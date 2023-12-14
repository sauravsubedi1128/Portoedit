import React from 'react'
import Headerinput from './Headerinput'
import Contactinput from './Contactinput'
import Careerobjinput from './Careerobjinput'
import Eduinput from './Eduinput'
import WorkExpinput from './WorkExpinput'
import VolunteerExpInput from './VolunteerExpInput'
import KeyQualiinput from './KeyQualiinput'
import Skilssinput from './Skilssinput'
import Languageinput from './Languageinput'
import { useState } from 'react'
const Inputapp = () => {
  const [contactDetails, setContactDetails] = useState({
    phoneNumber: '',
    email: '',
    address: '',
    linkedin: '',
  });
  const handleContactDetailsChange = (newContactDetails) => {
    setContactDetails(newContactDetails);
  };

  return (
    <div>
      <Headerinput/>
      <Contactinput onChange={handleContactDetailsChange}/>
      <Careerobjinput/>
      <Eduinput/>
      <WorkExpinput/>
      <VolunteerExpInput/>
      <KeyQualiinput/>
      <Skilssinput/>
      <Languageinput/>
</div>
  )
}

export default Inputapp
