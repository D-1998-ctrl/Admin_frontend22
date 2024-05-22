import React, { useState, useEffect, useRef } from 'react';
import { RiAddCircleLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState, Modifier } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "./emailtemp.css"
import Select from 'react-select';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate } from 'react-router-dom';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { BsQuestionCircle } from 'react-icons/bs';

import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';
import makeAnimated from 'react-select/animated';

const NewTemplate = () => {

    const [inputText, setInputText] = useState('');
    const [selectedShortcut, setSelectedShortcut] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredShortcuts, setFilteredShortcuts] = useState([]);
    const dropdownRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState('contacts'); // Default selected option
    const [isSendReminders, setIsSendReminders] = useState(false)
    const handleSendReminder = (checked) => {
        setIsSendReminders(checked)
    }

    const [shortcuts, setShortcuts] = useState([]);
    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputText(value); // Update inputText state with the new value
        // console.log("Email Subject:", value); // Log the value to the console
    };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setSearchTerm(''); // Clear search term when showing the dropdown
    };
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleAddShortcut = (shortcut) => {
        setInputText(prevText => prevText + `[${shortcut}]`);
        setShowDropdown(false);
    };
    useEffect(() => {
        setFilteredShortcuts(shortcuts.filter(shortcut => shortcut.title.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, shortcuts]);
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

    const handlechatsubject = (e) => {
        const { value } = e.target;
        setInputText(value);
    };

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [shortcodeType, setShortcodeType] = useState('contact');
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

    const insertText = (text) => {
        const contentState = editorState.getCurrentContent();
        const selectionState = editorState.getSelection();
        const newContentState = Modifier.insertText(contentState, selectionState, text);
        const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
        setEditorState(newEditorState);
    };

    const [showTextDropdown, setShowTextDropdown] = useState(false);
    const handleClickOutside = (event) => {
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

    useEffect(() => {
        if (viewMode === 'wysiwyg') {
            const rawContentState = convertToRaw(editorState.getCurrentContent());
            const htmlContent = draftToHtml(rawContentState);
            setHtmlContent(htmlContent);
        }
    }, [editorState, viewMode]);

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

    const handleViewModeChange = (event) => {
        const newMode = event.target.value;
        if (newMode === 'wysiwyg') {
            const contentBlock = htmlToDraft(htmlContent);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            setEditorState(EditorState.createWithContent(contentState));
        }
        setViewMode(newMode);
    };

    const API_KEY = process.env.REACT_APP_API_IP;
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    const toggleHelp = () => {
        setIsHelpOpen(!isHelpOpen);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [templateName, setTemplateName] = useState("");

    const handleInputChange1 = (e) => {
        setTemplateName(e.target.value);
    };

    const animatedComponents = makeAnimated();
    const [userdata, setUserData] = useState([]);
    const [selecteduser, setSelectedUser] = useState();

    const handleuserChange = (selectedOptions) => {
        setSelectedUser(selectedOptions);
        // Map selected options to their values and send as an array

    }
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            // const url = `${API_KEY}/common/user/`;
            const url = `${API_KEY}/common/users/roles?roles=Admin`;
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // console.log(userdata);
    const option = userdata.map((user) => ({
        value: user._id,
        label: user.username
    }));

    const navigate = useNavigate();
    const SendData = () => {

        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const htmlContent = draftToHtml(rawContentState);
        // Validation checks


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            templatename: templateName,
            from: selecteduser.value,
            emailsubject: inputText,
            wysiwyg: "true",
            html: "false",
            emailbody: htmlContent,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        const url = `${API_KEY}/workflow/emailtemplate/`;
        fetch(url, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then((result) => {
                toast.success('Data sent successfully');
                setTimeout(() => navigate('/firmtemplates/emails'), 1000);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleShortcodeClick = (shortcode) => {
        insertText(`[${shortcode.value}]`);
        setShowDropdown(false);
    };




    return (
        <div className='email-temp-create'>


            <div className="panel"    >

                <div className="panel__header">
                    <h1 className="panel__title">Create email template</h1>
                </div>
                <div className="panel__content">
                    <form noValidate="">
                        <div className="form">

                            <section className="form__section " >
                                <div className="form__row">
                                    <div className="form_col form_col_100">
                                        <label className="_input_1k08l_1">
                                            <span className="_inputLabel_1k08l_46">Template Name</span>


                                            <div className="_field_1k08l_14" >
                                                <input style={{ padding: '8px 12px', width: '100%', border: '2px solid rgb(100, 149, 237)', borderRadius: '10px', margin: '10px 0' }}
                                                    className="simple-input col-10"
                                                    placeholder="TemplateName"
                                                    type="text"
                                                    onChange={handleInputChange1}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </section>

                            {/* Mode */}
                            <div className="m-t-15 m-b-10">
                                <h2 className="panel__subtitle ">
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

                            </div>
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

                            <div className="form__row">
                                <div className="form_col form_col_100">
                                    <div className="_select_5n3c2_115">
                                        <label className="_selectLabel_5n3c2_221">From</label>
                                        <div className="react-select-container css-b62m3t-container">
                                            <div className="select-container">
                                                <Select className='job-template-select-dropdown'
                                                    placeholder="Form"
                                                    options={option}
                                                    components={animatedComponents}
                                                    isMulti={false} // Enable multi-select
                                                    value={selecteduser}
                                                    isClearable

                                                    isSearchable
                                                    onChange={handleuserChange}
                                                />

                                            </div>
                                            <div className="react-select__indicators css-tlfecz-indicators">
                                                <div className="react-select__indicator css-1wy0on6"></div>
                                            </div>
                                        </div>
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
                                        editorState={editorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                        toolbarCustomButtons={[<CustomToolbar />]}
                                        onEditorStateChange={setEditorState}
                                        editorStyle={{height:'250px'}}
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
                    </form>
                </div>

                <div className='new-temp-btns-container' style={{ display: 'flex', gap: '20px' }}>
                    <div className='new-temp-save'>
                        <button type="submit" onClick={SendData} href="/listemail" className="btn1">
                            Save
                        </button>
                    </div>
                    <div className='new-temp-cnsl'>
                        <button type="button"
                            className="btn2">
                            Cancel
                        </button>
                    </div>
                </div>
                <ToastContainer />
            </div>
            {/* <div><p>hdgfh</p></div> */}
        </div>
    );
};

export default NewTemplate