import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

function Write() {
    const [value, setValue] = useState('');
    console.log(value);
    return (
        <>
            <Nav />
            <div className="container">
                <div className="row mt-4">
                    <div className="write mt-2 col-md-8">
                        <label forHtml="text" className="mb-2">Title</label>
                        <input type="text" className="form-control w-25" />
                        <ReactQuill className="mt-4 h-50" theme="snow" value={value} onChange={setValue} />
                    </div>
                    <div className="col-md-4 custom-col">
                        <div className="upload">
                            <div className="d-flex justify-content-between">
                                <input id="file-upload" type="file" />
                                <button className="btn" style={{ backgroundColor: '#00b200', color: 'white' }}>Submit</button>
                            </div>
                        </div>
                        <div className="category">
                            <fieldset>
                                <h5 className="mt-3">Select the category :</h5>

                                <div>
                                    <input type="radio" id="huey" name="drone" value="huey" checked />
                                    <label forHtml="huey" className="ml-2">Food</label>
                                </div>

                                <div>
                                    <input type="radio" id="dewey" name="drone" value="dewey" />
                                    <label forHtml="dewey" className="ml-2">Work</label>
                                </div>
                                <div>
                                    <input type="radio" id="louie" name="drone" value="louie" />
                                    <label forHtml="louie" className="ml-2">Sport</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Write
