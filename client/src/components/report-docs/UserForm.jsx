import React from "react";
import { useState } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import blob from "./blob.svg";
import "../../css/Report/UserForm.css";
//import Select from 'react-select';

function PageTitle() {
  return(
      <div className="page-title">
          <h1>Why do you want to report this note?</h1>
      </div>
  )
}

//these are the first set of options
const options = [
  { value: 'optionA', label: 'It is spam' },
  { value: 'optionB', label: 'Nudity or Sexual acitivity' },
  { value: 'optionC', label: 'Hate Speech or Symbols' },
  { value: 'optionD', label: 'Suicide or Self Injury' },
  { value: 'option1', label: 'Bullying or Harrassment' },
  { value: 'option2', label: 'False Information' },
  { value: 'option3', label: 'Intellectual Property Violation' },
  { value: 'option4', label: 'Something else' }
];

//these are the first set of sub options
const subOptions = {
  optionA: [
    { value: 'unfollowOption', label: 'Unfollow' },
    { value: 'blockOption', label: 'Block' },
    { value: 'noneOption', label: 'None' },
      ],
  optionB: [
    { value: 'unfollowOption', label: 'Unfollow' },
    { value: 'blockOption', label: 'Block' },
    { value: 'noneOption', label: 'None' },
      ],
  optionC: [
        { value: 'unfollowOption', label: 'Unfollow' },
        { value: 'blockOption', label: 'Block' },
        { value: 'noneOption', label: 'None' },
          ],
  optionD: [
            { value: 'unfollowOption', label: 'Unfollow' },
            { value: 'blockOption', label: 'Block' },
            { value: 'noneOption', label: 'None' },
              ],
    option1: [
        { value: 'bullyingOption' },
        { value: 'bullyingYou',label: 'Does this note bully you?'},
        { value: 'bullyingSomeone', label: 'Does this note bully someone you know?'},
      ],
    option2: [
        { value: 'FalseinfoOption' },
      ],
    option3: [
        { value: 'plagiarismOption' },
        { value: 'plagiarisingYou',label: 'Is this account copying your content?'},
        {value: 'plagiarisingSomeone', label: 'Is this account copying someone you know?'}
      ],
    option4: [
        { value: 'otherOption'}
      ]
      
};


//ultimately at the end the user is presented with these options. 
const finalSelections = {
  //for options
  unfollowOption: [
    {value: 'unfollowMessage',
    label:'This account has been unfollowed!'} ],
  blockOption: [
      {value: 'blockMessage',
      label:'This account has been Blocked!'} ],
  noneOption: [
        {value: 'thankyouMessage',
        label:'Thank you for your report. Please continue enjoying Edu Notes'} ], 
 
        bullyingYou:[{ value: 'bYou', 
  label: 'Edu Notes takes Bullying seriously. We recommend you to unfollow or block the account. We will take necessary action soon!' }],
 
  bullyingSomeone:[{ value: 'bOther', 
  label: 'Edu Notes takes Bullying seriously. We recommend you to unfollow or block the account. We will take necessary action soon!' }],
  
  plagiarisingYou:[{ value: 'pYou', 
  label: 'Edu Notes takes Plagiasrism seriously. We recommend you to unfollow or block the account. We will take necessary action soon!' }],
  
  plagiarisingSomeone:[{ value: 'pOther', 
  label: 'Edu Notes takes Plagiarism seriously. We recommend you to unfollow or block the account. We will take necessary action soon!' }]
                        }





function Pop_up() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [textBoxValue,setTextBoxValue] = useState("");
  const [showMessage, setShowMessage]= useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleOptionChange(event) {
    if(!selectedOption)
    {
    setSelectedOption(event.target.value);
    setSelectedSubOption(null);
    }
  }

  function handleSubOptionChange(event) {
    if(!selectedSubOption)
    {
    setSelectedSubOption(event.target.value);
    }
  }   

  const handleTextBoxChange = (event) => {
    if (!submitted) {
      const {value} = event.target;
      setTextBoxValue(value.slice(0,200));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
    setSubmitted(true);
    // Do something with the selected option value
  }

  const isSubmitDisabled = textBoxValue.trim().length === 0 || submitted;


  return (
    <div>
      {/* for the very first option - prompt user to select one */}
      <div className="user-report-options">
        <h2 className="select-reason-prompt">Select one of the following reasons:</h2>
        <div className="radioGroup1">
        {options.map(option => (
          <label key={option.value}>
            <input className="radio-box" type="radio" name="options" value={option.value} checked={selectedOption === option.value} onChange={handleOptionChange} />
            {option.label}
          </label>
        ))}
        </div>
      </div>


      {/* dependind on the first selected option, display the next set of options
      The BLOCK UNFOLLOW AND NONE OPTIONS ARE PRESENTED HERE */}
      {selectedOption && (
        <div>
          <h2 className="thank-you-message-1">Thank you for letting us know!</h2>
          <h3 className="further-steps-question">Would you like to take any further steps to improve your experience?</h3>
          <div className="radioGroup1">
          {subOptions[selectedOption].map((subOption) => (
<label key={subOption.value}>
  {subOption.value === "bullyingOption" || subOption.value === "FalseinfoOption" ||
  subOption.value === "plagiarismOption" || subOption.value === "otherOption" ? 
  ( 
    <div>
      <form onSubmit={handleSubmit}>
    <input className="information-box" type="text" 
    placeholder="Please provide Further Information" 
    value={textBoxValue} onChange={handleTextBoxChange} 
    disabled={submitted} />
    <button className="submit-button" type="submit" disabled={isSubmitDisabled}>Submit</button>
    </form>
    {showMessage && (
      <div className="post-submission-text">
        <p className="thank-you-message-1">Thank you For letting us know!</p>
        <p className="provided-info-display">Provided Information: {textBoxValue}</p>
         <h4 className="action-processed-message1">Your selected action has been processed. Please continue to enjoy Edu Notes ●'◡'● Your feedback will be reviewed shortly!</h4> 
      </div>
    )}
    </div> )  : (
    <input
      className="radio-box"
      type="radio"
      name="suboptions"
      value={subOption.value}
      checked={selectedSubOption === subOption.value}
      onChange={handleSubOptionChange}
    />
  )}
  {subOption.label}
</label>
))}
          </div>
        </div>
      )}

{/* based on selected Sub Option, it displays the final thank you message and what action has been taken */}
      {selectedSubOption && (
        <div className>
          {finalSelections[selectedSubOption].map(finalSelection => (
            <label className="action-taken-message" 
             key={finalSelection.value}>
            {finalSelection.label}
            </label>
          ))}
          <h4 className="action-processed-message2">Your selected action has been processed. Please continue to enjoy Edu Notes ●'◡'● Your feedback will be reviewed shortly!</h4>
        </div>
      )}
    </div>
  );
  }






export default function UserForm() {
  return(
      <div>
          <PageTitle></PageTitle>
          <Pop_up></Pop_up>
      </div>
  )
}