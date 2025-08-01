import { useState } from 'react'

import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('male');
  const [subject, setSubject] = useState({
      english: true,
      maths: false,
      physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState('');
  const [choice, setChoice] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      contact,
      gender,
      choice,
      subject,
      resume,
      url,
      about
    };

    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubject({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setChoice("");
        setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="post">
          <label for="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Enter First Name'
            required
          />
          <label for="lastname">Last Name</label>
          <input type="text"
            id='lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Enter Last Name'
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            required
          />
          <label for="contact">Contact</label>
          <input type="text" id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder='Enter Contact Number'
            required
          />
          <label for="gender">Gender</label>
          <input type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other

          <label for="subject">Subjects</label>
          <input type="checkbox"
            name="subject"
            id="english"
            checked={subject.english === true}
            onChange={(e) => handleSubjectChange("english")} />
          English
          <input type="checkbox"
            name="subject"
            id="maths"
            checked={subject.maths == true}
            onChange={(e) => handleSubjectChange("maths")} />
          Maths
          <input type="checkbox"
            name="subject"
            id="physics"
            checked={subject.physics === true}
            onChange={(e) => handleSubjectChange("physics")} />
          Physics

          <label for="file">Upload Resume</label>
          <input type="file"
            id="file"
            name="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Upload Resume"
            required
          />

          <label for="url">Website URL</label>
          <input type="url"
            id="url"
            name='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Enter Website URL'
            required
          />
          <label for="choice">Choose an option</label>
          <select
            name="choice"
            id="choice"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}>
            <option value="" disabled selected={choice === ''}>Select your choice</option>
            <optgroup label='Beginners'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Javascript</option>
            </optgroup>
            <optgroup label='Advance'>
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
            </optgroup>
            <option value="t">MongoDB</option>
          </select>


          <label for="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder='Tell us about yourself'
            required>
          </textarea>

          <button type="submit" value="submit" onClick={handleSubmit}>Submit</button>
          <button type="reset" value="reset" onClick={handleReset}>Reset</button>

        </form>
      </fieldset>  
    </div>
  )
}

export default App

{/* <fieldset>
        <form action={"#"} method="post">
          

          

          
          
          
          

          
        </form>
      </fieldset> */}