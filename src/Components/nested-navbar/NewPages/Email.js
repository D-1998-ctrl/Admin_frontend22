import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { RiAddCircleLine } from 'react-icons/ri';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsQuestionCircle } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState, Modifier } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const Email = () => {


  const [shortcodeType, setShortcodeType] = useState('contact');
  const [selectedOption, setSelectedOption] = useState('contacts'); // Default selected option
  const [shortcuts, setShortcuts] = useState([]);


  useEffect(() => {
    if (selectedOption === 'contacts') {
      // Set contact shortcuts
      const contactShortcuts = [
        { title: 'Account Shortcodes', isBold: true },
        { title: 'Account Name', isBold: false, value: 'ACCOUNT_NAME' },
        { title: 'Custom field:Website', isBold: false, value: 'ACCOUNT_CUSTOM_FIELD:Website' },
        { title: 'Contact Shortcodes', isBold: true, },
        { title: 'Contact Name', isBold: false, value: 'CONTACT_NAME' },
        { title: 'First Name', isBold: false, value: 'FIRST_NAME' },
        { title: 'Middle Name', isBold: false, value: 'MIDDLE_NAME' },
        { title: 'Last Name', isBold: false, value: 'LAST_NAME' },
        { title: 'Phone number', isBold: false, value: 'PHONE_NUMBER' },
        { title: 'Country', isBold: false, value: 'COUNTRY' },
        { title: 'Company name', isBold: false, value: 'COMPANY_NAME ' },
        { title: 'Street address', isBold: false, value: 'STREET_ADDRESS' },
        { title: 'City', isBold: false, value: 'CITY' },
        { title: 'State/Province', isBold: false, value: 'STATE / PROVINCE' },
        { title: 'Zip/Postal code', isBold: false, value: 'ZIP / POSTAL CODE' },
        { title: 'Custom field:Email', isBold: false, value: 'CONTACT_CUSTOM_FIELD:Email' },

        { title: 'Date Shortcodes', isBold: true },
        { title: 'Current day full date', isBold: false, value: 'CURRENT_DAY_FULL_DATE' },
        { title: 'Current day number', isBold: false, value: 'CURRENT_DAY_NUMBER' },
        { title: 'Current day name', isBold: false, value: 'CURRENT_DAY_NAME' },
        { title: 'Current week', isBold: false, value: 'CURRENT_WEEK' },
        { title: 'Current month number', isBold: false, value: 'CURRENT_MONTH_NUMBER' },
        { title: 'Current month name', isBold: false, value: 'CURRENT_MONTH_NAME' },
        { title: 'Current quarter', isBold: false, value: 'CURRENT_QUARTER' },
        { title: 'Current year', isBold: false, value: 'CURRENT_YEAR' },
        { title: 'Last day full date', isBold: false, value: 'LAST_DAY_FULL_DATE' },
        { title: 'Last day number', isBold: false, value: 'LAST_DAY_NUMBER' },
        { title: 'Last day name', isBold: false, value: 'LAST_DAY_NAME' },
        { title: 'Last week', isBold: false, value: 'LAST_WEEK' },
        { title: 'Last month number', isBold: false, value: 'LAST_MONTH_NUMBER' },
        { title: 'Last month name', isBold: false, value: 'LAST_MONTH_NAME' },
        { title: 'Last quarter', isBold: false, value: 'LAST_QUARTER' },
        { title: 'Last_year', isBold: false, value: 'LAST_YEAR' },
        { title: 'Next day full date', isBold: false, value: 'NEXT_DAY_FULL_DATE' },
        { title: 'Next day number', isBold: false, value: 'NEXT_DAY_NUMBER' },
        { title: 'Next day name', isBold: false, value: 'NEXT_DAY_NAME' },
        { title: 'Next week', isBold: false, value: 'NEXT_WEEK' },
        { title: 'Next month number', isBold: false, value: 'NEXT_MONTH_NUMBER' },
        { title: 'Next month name', isBold: false, value: 'NEXT_MONTH_NAME' },
        { title: 'Next quarter', isBold: false, value: 'NEXT_QUARTER' },
        { title: 'Next year', isBold: false, value: 'NEXT_YEAR' }



      ];
      setShortcuts(contactShortcuts);
    } else if (selectedOption === 'account') {
      // Set account shortcuts
      const accountShortcuts = [
        { title: 'Account Shortcodes', isBold: true },
        { title: 'Account Name', isBold: false, value: 'ACCOUNT_NAME' },
        { title: 'Custom field:Website', isBold: false, value: 'ACCOUNT_CUSTOM_FIELD:Website' },
        { title: 'Date Shortcodes', isBold: true },
        { title: 'Current day full date', isBold: false, value: 'CURRENT_DAY_FULL_DATE' },
        { title: 'Current day number', isBold: false, value: 'CURRENT_DAY_NUMBER' },
        { title: 'Current day name', isBold: false, value: 'CURRENT_DAY_NAME' },
        { title: 'Current week', isBold: false, value: 'CURRENT_WEEK' },
        { title: 'Current month number', isBold: false, value: 'CURRENT_MONTH_NUMBER' },
        { title: 'Current month name', isBold: false, value: 'CURRENT_MONTH_NAME' },
        { title: 'Current quarter', isBold: false, value: 'CURRENT_QUARTER' },
        { title: 'Current year', isBold: false, value: 'CURRENT_YEAR' },
        { title: 'Last day full date', isBold: false, value: 'LAST_DAY_FULL_DATE' },
        { title: 'Last day number', isBold: false, value: 'LAST_DAY_NUMBER' },
        { title: 'Last day name', isBold: false, value: 'LAST_DAY_NAME' },
        { title: 'Last week', isBold: false, value: 'LAST_WEEK' },
        { title: 'Last month number', isBold: false, value: 'LAST_MONTH_NUMBER' },
        { title: 'Last month name', isBold: false, value: 'LAST_MONTH_NAME' },
        { title: 'Last quarter', isBold: false, value: 'LAST_QUARTER' },
        { title: 'Last_year', isBold: false, value: 'LAST_YEAR' },
        { title: 'Next day full date', isBold: false, value: 'NEXT_DAY_FULL_DATE' },
        { title: 'Next day number', isBold: false, value: 'NEXT_DAY_NUMBER' },
        { title: 'Next day name', isBold: false, value: 'NEXT_DAY_NAME' },
        { title: 'Next week', isBold: false, value: 'NEXT_WEEK' },
        { title: 'Next month number', isBold: false, value: 'NEXT_MONTH_NUMBER' },
        { title: 'Next month name', isBold: false, value: 'NEXT_MONTH_NAME' },
        { title: 'Next quarter', isBold: false, value: 'NEXT_QUARTER' },
        { title: 'Next year', isBold: false, value: 'NEXT_YEAR' }



      ]; setShortcuts(accountShortcuts);
    }
  }, [selectedOption]);








  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [viewMode, setViewMode] = useState('wysiwyg'); // New state for view mode
  const [htmlContent, setHtmlContent] = useState(''); // State to store raw HTML content


  useEffect(() => {
    const contactShortcuts = [
      { title: 'Account Shortcodes', isBold: true },
      { title: 'Account Name', isBold: false, value: 'ACCOUNT_NAME' },
      { title: 'Custom field:Website', isBold: false, value: 'ACCOUNT_CUSTOM_FIELD:Website' },
      { title: 'Contact Shortcodes', isBold: true },
      { title: 'Contact Name', isBold: false, value: 'CONTACT_NAME' },
      { title: 'First Name', isBold: false, value: 'FIRST_NAME' },
      { title: 'Middle Name', isBold: false, value: 'MIDDLE_NAME' },
      { title: 'Last Name', isBold: false, value: 'LAST_NAME' },
      { title: 'Phone number', isBold: false, value: 'PHONE_NUMBER' },
      { title: 'Country', isBold: false, value: 'COUNTRY' },
      { title: 'Company name', isBold: false, value: 'COMPANY_NAME' },
      { title: 'Street address', isBold: false, value: 'STREET_ADDRESS' },
      { title: 'City', isBold: false, value: 'CITY' },
      { title: 'State/Province', isBold: false, value: 'STATE / PROVINCE' },
      { title: 'Zip/Postal code', isBold: false, value: 'ZIP / POSTAL CODE' },
      { title: 'Custom field:Email', isBold: false, value: 'CONTACT_CUSTOM_FIELD:Email' },
      { title: 'Date Shortcodes', isBold: true },
      { title: 'Current day full date', isBold: false, value: 'CURRENT_DAY_FULL_DATE' },
      { title: 'Current day number', isBold: false, value: 'CURRENT_DAY_NUMBER' },
      { title: 'Current day name', isBold: false, value: 'CURRENT_DAY_NAME' },
      { title: 'Current week', isBold: false, value: 'CURRENT_WEEK' },
      { title: 'Current month number', isBold: false, value: 'CURRENT_MONTH_NUMBER' },
      { title: 'Current month name', isBold: false, value: 'CURRENT_MONTH_NAME' },
      { title: 'Current quarter', isBold: false, value: 'CURRENT_QUARTER' },
      { title: 'Current year', isBold: false, value: 'CURRENT_YEAR' },
      { title: 'Last day full date', isBold: false, value: 'LAST_DAY_FULL_DATE' },
      { title: 'Last day number', isBold: false, value: 'LAST_DAY_NUMBER' },
      { title: 'Last day name', isBold: false, value: 'LAST_DAY_NAME' },
      { title: 'Last week', isBold: false, value: 'LAST_WEEK' },
      { title: 'Last month number', isBold: false, value: 'LAST_MONTH_NUMBER' },
      { title: 'Last month name', isBold: false, value: 'LAST_MONTH_NAME' },
      { title: 'Last quarter', isBold: false, value: 'LAST_QUARTER' },
      { title: 'Last_year', isBold: false, value: 'LAST_YEAR' },
      { title: 'Next day full date', isBold: false, value: 'NEXT_DAY_FULL_DATE' },
      { title: 'Next day number', isBold: false, value: 'NEXT_DAY_NUMBER' },
      { title: 'Next day name', isBold: false, value: 'NEXT_DAY_NAME' },
      { title: 'Next week', isBold: false, value: 'NEXT_WEEK' },
      { title: 'Next month number', isBold: false, value: 'NEXT_MONTH_NUMBER' },
      { title: 'Next month name', isBold: false, value: 'NEXT_MONTH_NAME' },
      { title: 'Next quarter', isBold: false, value: 'NEXT_QUARTER' },
      { title: 'Next year', isBold: false, value: 'NEXT_YEAR' }
    ];

    const accountShortcuts = [
      { title: 'Account Shortcodes', isBold: true },
      { title: 'Account Name', isBold: false, value: 'ACCOUNT_NAME' },
      { title: 'Custom field:Website', isBold: false, value: 'ACCOUNT_CUSTOM_FIELD:Website' },
      { title: 'Date Shortcodes', isBold: true },
      { title: 'Current day full date', isBold: false, value: 'CURRENT_DAY_FULL_DATE' },
      { title: 'Current day number', isBold: false, value: 'CURRENT_DAY_NUMBER' },
      { title: 'Current day name', isBold: false, value: 'CURRENT_DAY_NAME' },
      { title: 'Current week', isBold: false, value: 'CURRENT_WEEK' },
      { title: 'Current month number', isBold: false, value: 'CURRENT_MONTH_NUMBER' },
      { title: 'Current month name', isBold: false, value: 'CURRENT_MONTH_NAME' },
      { title: 'Current quarter', isBold: false, value: 'CURRENT_QUARTER' },
      { title: 'Current year', isBold: false, value: 'CURRENT_YEAR' },
      { title: 'Last day full date', isBold: false, value: 'LAST_DAY_FULL_DATE' },
      { title: 'Last day number', isBold: false, value: 'LAST_DAY_NUMBER' },
      { title: 'Last day name', isBold: false, value: 'LAST_DAY_NAME' },
      { title: 'Last week', isBold: false, value: 'LAST_WEEK' },
      { title: 'Last month number', isBold: false, value: 'LAST_MONTH_NUMBER' },
      { title: 'Last month name', isBold: false, value: 'LAST_MONTH_NAME' },
      { title: 'Last quarter', isBold: false, value: 'LAST_QUARTER' },
      { title: 'Last_year', isBold: false, value: 'LAST_YEAR' },
      { title: 'Next day full date', isBold: false, value: 'NEXT_DAY_FULL_DATE' },
      { title: 'Next day number', isBold: false, value: 'NEXT_DAY_NUMBER' },
      { title: 'Next day name', isBold: false, value: 'NEXT_DAY_NAME' },
      { title: 'Next week', isBold: false, value: 'NEXT_WEEK' },
      { title: 'Next month number', isBold: false, value: 'NEXT_MONTH_NUMBER' },
      { title: 'Next month name', isBold: false, value: 'NEXT_MONTH_NAME' },
      { title: 'Next quarter', isBold: false, value: 'NEXT_QUARTER' },
      { title: 'Next year', isBold: false, value: 'NEXT_YEAR' }
    ];

    if (shortcodeType === 'contact') {
      setShortcuts(contactShortcuts);
    } else if (shortcodeType === 'account') {
      setShortcuts(accountShortcuts);
    }
  }, [shortcodeType]);

  const animatedComponents = makeAnimated();
  const [selectsortcode, setSelectShortcode] = useState("");
  const [userdata, setUserData] = useState([]);
  const [email, setEmail] = useState("");

  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const toggleHelp = () => {
    setIsHelpOpen(!isHelpOpen);
    // Add your logic here to toggle the help content or perform any other action
  };
  const [showTextDropdown, setShowTextDropdown] = useState(false);

  const CustomToolbar = () => (
    <div className="rdw-editor-toolbar">
      <div className="dropdown-button" onClick={() => setShowTextDropdown(!showDropdown)}>
        Add Shortcode
      </div>
      {showTextDropdown && (
        <div className="dropdown-menu" ref={dropdownRef}>
          {shortcuts.map((shortcode, index) => (
            <div
              key={index}
              className={`dropdown-item ${shortcode.isBold ? 'bold' : ''}`}
              onClick={() => handleShortcodeClick(shortcode)}
            >
              {shortcode.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );


  const insertText = (text) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = Modifier.insertText(contentState, selectionState, text);
    const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
    setEditorState(newEditorState);
  };

  const handleShortcodeClick = (shortcode) => {
    insertText(`[${shortcode.value}]`);
    setShowDropdown(false);
  };



  const handlechatsubject = (e) => {
    const { value } = e.target;
    setInputText(value);
  };


  const handleOptionChange = (value) => {
    setSelectedOption(value);

  };




  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownhtml, setShowDropdownhtml] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShortcuts, setFilteredShortcuts] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    setFilteredShortcuts(shortcuts.filter(shortcut => shortcut.title.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm, shortcuts]);

  const handleAddShortcut = (shortcut) => {
    setInputText(prevText => prevText + `[${shortcut}]`);
    setShowDropdown(false);


  };

  const handleAddShortcuthtml = (shortcut) => {
    setTextareaValue(prevText => prevText + `[${shortcut}]`);
    setShowDropdownhtml(false);
  };


  const [textareaValue, setTextareaValue] = useState('');

  const onTextareaChange = (e) => {
    const { value } = e.target;
    setTextareaValue(value);
    console.log(textareaValue)

  };



  const [editorState, setEditorState] = useState(EditorState.createEmpty());


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowTextDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setSearchTerm(''); // Clear search term when showing the dropdown
  };
  const toggleDropdownhtml = () => {
    setShowDropdownhtml(!showDropdownhtml);
    setSearchTerm(''); // Clear search term when showing the dropdown
  };



  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputText(value); // Update inputText state with the new value
    // console.log("Email Subject:", value); // Log the value to the console
  };




  const [mode, setMode] = useState('wysiwyg'); // State to track the current mode

  const handleModeChange = (newMode) => {
    setMode(newMode);
    console.log("Mode:", newMode); // Log the selected mode to the console
  };


  const handleemail = (e) => {
    setEmail(e.target.value);
  };


  const [selecteduser, setSelectedUser] = useState();
  const [selectaccId, setselectaccId] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.1.116:8080/admin/accountdetails");
      const data = await response.json();
    

      setUserData(data.accounts);
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log(userdata);
  const option = userdata.map((user) => ({
    value: user._id,
    label: user.accountName
  }));



  const handleuserChange = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      setSelectedUser(selectedOption);
    } else {
      console.error("Invalid selected options:", selectedOption);
    }
  };

  useEffect(() => {
    if (selecteduser && selecteduser.value) {
      setselectaccId(selecteduser.value);
    }
  }, [selecteduser]);



  const [usetemp, setUserTemp] = useState([]);


  const [selectedTemp, setSelectededTemp] = useState();


  const [selecttempId, setselectTempId] = useState();
  useEffect(() => {
    fetchDataemail();
  }, []);

  const fetchDataemail = async () => {
    try {
      const response = await fetch("http://192.168.1.116:8080/workflow/emailtemplate");
      const data = await response.json();

      setUserTemp(data.emailTemplate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log(userdata);
  const options = usetemp.map((user) => ({
    value: user._id,
    label: user.templatename
  }));

  const handletempemail = (selectedOptions) => {
    if (selectedOptions && selectedOptions.value) {
      setSelectededTemp(selectedOptions);
      fetchDataemaildetails(selectedOptions.value);
    } else {
      console.error("Invalid selected options:", selectedOptions);
    }
  };

  useEffect(() => {
    if (selectedTemp && selectedTemp.value) {
      setselectTempId(selectedTemp.value);

    }
  }, [selectedTemp]);

  const [fetchtemplatedata, setFetchTemplateData] = useState()

  useEffect(() => {
    fetchDataemaildetails();
  }, []);

  const fetchDataemaildetails = async (selecttempId) => {
    try {
      const response = await fetch("http://192.168.1.116:8080/workflow/emailtemplate/" + selecttempId);
      const data = await response.json();


      const contentBlock = htmlToDraft(data.emailTemplate.emailbody);
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      setEditorState(EditorState.createWithContent(contentState));
      setHtmlContent(data.emailTemplate.emailbody);
      setFetchTemplateData(data.emailTemplate);

      dataupdated(data.emailTemplate)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };




  const handleViewModeChange = (event) => {
    const newMode = event.target.value;
    if (newMode === 'wysiwyg') {
      const contentBlock = htmlToDraft(htmlContent);
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      setEditorState(EditorState.createWithContent(contentState));
    }
    setViewMode(newMode);
  };

  const [dataGetEmail, setDataGetEmail] = useState("");
  const datasend = () => {


    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContentState);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      emailtemplateid: selecttempId,
      accountid: selectaccId,
      templatename: templateName,
      emailsubject: inputText,
      emailbody: htmlContent
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    let responseData; // Define a variable to store the response data

    fetch("http://192.168.1.116:8080/templateMailSend", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        responseData = result; // Store the response data in the variable
        setDataGetEmail(responseData)
        toast.success('Email sent successfully');
        window.location.reload()// Log the response data to the console
      })
      .catch((error) => console.error(error));
  };


  const handleValidation = () => {
    if (!email) {
      toast.error('Please enter an email address');
      return false;
    }
    return true;
  };

  const handleSend = () => {
    if (handleValidation()) {
      datasend();
    }
  };


  const [templateName, setTemplateName] = useState("");
  const [inputText, setInputText] = useState('');
  const [selectedShortcut, setSelectedShortcut] = useState('');

  const [selectedShortcuthtml, setSelectedShortcuthtml] = useState('');

  const dataupdated = (txt) => {

    setTemplateName(txt.templatename);
    setInputText(txt.emailsubject)




  }



  const handleInputChange1 = (e) => {
    setTemplateName(e.target.value);
  };








<div className='inputemail'>
              <label style={{margin:'20px'}}>Email</label>
              <input style={{margin:'10px' ,width:'98%'}} placeholder='Enter Email' type='email' onChange={handleemail} />
            </div>




  return (
    <div className='from' style={{ padding: "50px" }}>
      <div className="form__row">
        <div className="form_col form_col_100">
          <div className="_select_5n3c2_115">
            <label className="_selectLabel_5n3c2_221">Account</label>
            <div className="react-select-container css-b62m3t-container">

              <div className="select-container">
                <Select className='job-template-select-dropdown'
                  placeholder="Account"
                  options={option}
                  components={animatedComponents}
                  isMulti={false} // Enable multi-select
                  value={selecteduser}
                  isClearable={true}

                  isSearchable
                  onChange={handleuserChange}
                />
              </div>
            </div>
          </div>

          <div className="_select_5n3c2_115">
            <label className="_selectLabel_5n3c2_221">Email Template</label>
            <div className="react-select-container css-b62m3t-container">

              <div className="select-container">
                <Select className='job-template-select-dropdown'
                  placeholder="Email Template"
                  options={options}
                  components={animatedComponents}
                  isMulti={false} // Enable multi-select
                  value={selectedTemp}
                  isClearable

                  isSearchable
                  onChange={handletempemail}
                />
              </div>
            </div></div></div>
      </div>

      <div className='inputemail'>
        <label>Email</label>
        <input placeholder='Enter Email' type='email' onChange={handleemail} />
      </div>

      <div>

        {/* Display email template data */}
        {fetchtemplatedata && (
          <div>

            <section className="form__section">
              <div className="form__row">
                <div className="form_col form_col_100">
                  <label className="_input_1k08l_1">
                    <span className="_inputLabel_1k08l_46">Template Name</span>


                    <div className="_field_1k08l_14" >
                      <input style={{ padding: '8px 12px', width: '100%', border: '2px solid rgb(100, 149, 237)', borderRadius: '10px', margin: '10px 0' }}

                        className="simple-input"
                        placeholder="Template Name"
                        type="text"
                        value={templateName}
                        onChange={handleInputChange1}

                      />
                    </div>
                  </label>
                </div>
              </div>
            </section>

            <div className="m-t-15 m-b-10">
              <h2 className="panel__subtitle d-flex flex-center-align">
                Mode
                <button style={{ background: "none", border: 'none', marginLeft: '10px' }}
                  type="button"
                  className="help-block__link"
                  onClick={toggleHelp}
                >
                  <BsQuestionCircle className={`v2-icon ${isHelpOpen ? 'active' : ''}`} color="#007bff" />
                </button>
                {/* Render your help content conditionally based on isHelpOpen state */}
                {isHelpOpen && (
                  <div className="help-content">
                    {/* Your help content goes here */}
                  </div>
                )}
              </h2>



              <div onMouseDown={(e) => e.preventDefault()}>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="contact"
                      checked={shortcodeType === 'contact'}
                      onChange={() => setShortcodeType('contact')}
                    />
                    Contact Shortcodes
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="account"
                      checked={shortcodeType === 'account'}
                      onChange={() => setShortcodeType('account')}
                    />
                    Account Shortcodes
                  </label>
                </div>
              </div>
            </div>

            <div className='dropdown-container'>
              <label style={{ fontSize: '14px' }}>Subject</label>
              <input type='text' placeholder='Subject' className='pipeline-input' value={inputText + selectedShortcut} onChange={handlechatsubject} />
              <div className='addshortcodes' style={{ color: 'var(--links-background)', cursor: 'pointer' }}>
                <span onClick={toggleDropdown} className="add-shortcut-icon" style={{ border: 'none', background: 'none', color: 'blue' }}>
                  <RiAddCircleLine /> Add Shortcode
                </span>

                {showDropdown && (
                  <div className="dropdown" ref={dropdownRef}>
                    <div className="search-bar">
                      <input
                        type="text"
                        placeholder="Search shortcuts"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <button className="job-temp-close-icon" style={{ border: 'none', background: 'none', color: '#007bff' }} onClick={toggleDropdown}>
                        <IoIosCloseCircleOutline />
                      </button>
                    </div>
                    <ul className="dropdown-list">
                      {filteredShortcuts.map(shortcut => (
                        <div key={shortcut.title}>
                          <span
                            style={{ fontWeight: shortcut.isBold ? 'bold' : 'normal', cursor: 'pointer' }}
                            onClick={() => handleAddShortcut(shortcut.value)}>
                            {shortcut.title}
                          </span>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>


            <div className="form__row">



              <div onMouseDown={(e) => e.preventDefault()}>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="wysiwyg"
                      checked={viewMode === 'wysiwyg'}
                      onChange={handleViewModeChange}
                    />
                    WYSIWYG
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="html"
                      checked={viewMode === 'html'}
                      onChange={handleViewModeChange}
                    />
                    HTML
                  </label>
                </div>
              </div>

              {viewMode === 'wysiwyg' ? (
                <div style={{ border: '1px solid #fff', marginTop: '20px', borderRadius: "12px", background: 'white' }} >
                  <Editor
                    editorStyle={{ height: '250px' }}
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    toolbarCustomButtons={[<CustomToolbar />]}
                    onEditorStateChange={setEditorState}
                  />
                </div>
              ) : (
                <textarea
                  className="html-view"
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                />
              )}

            </div>
          </div>
        )}


      </div>

      <div>

        <button onClick={handleSend}>Send </button>

        <button >Cancel </button>
      </div>
      <ToastContainer />
    </div>


  )
}

export default Email













