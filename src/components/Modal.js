import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import SlidingPane from "react-sliding-pane";
import CustomTextInput from "./CustomTextInput";
import emailjs from 'emailjs-com';
function Modal(props) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hv9p905', 'template_8thxsei', e.target, 'user_znv0CUhhBwi9RaaMD5pQi')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
       
      });
      e.target.reset()
  }
  return (
    <div>
      <SlidingPane
        className="model"
        isOpen={props.showModal}
        from="right"
        onRequestClose={() => props.onClose()}
      >
        <div className="modelOutArea justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="model relative w-auto my-9 mx-auto max-w-9xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between  border-b border-solid border-blueGray-200 rounded-t">
                <div>
                  <div className="flex">
                    <h3 className="text-3xl p-10 font-semibold">
                      Inquiry Form
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => props.onClose()}
                    >
                      <span className="text-black h-6 w-6 text-2xl">
                        <CloseIcon />
                      </span>
                    </button>
                  </div>

                  {/*body*/}
                  <form className="form Modal-form"  onSubmit={sendEmail} noValidate>
                    <CustomTextInput
                      id="Name"
                      label="Name"
                      name="Name"
                      onChange={(e) => console.log(e)}
                    />
                    <CustomTextInput
                      id="MobileNumber"
                      label="Mobile Number"
                      name="MobileNumber"
                      onChange={(e) => console.log(e)}
                    />
                    <CustomTextInput
                      id="Email"
                      label="Email Address"
                      name="Email"
                      onChange={(e) => console.log(e)}
                    />
                    <CustomTextInput
                      id="City"
                      label="City"
                      name="city"
                      onChange={(e) => console.log(e)}
                    />
                    <CustomTextInput
                      id="Message"
                      type="text"
                      label="Message"
                      name="Message"
                      onChange={(e) => console.log(e)}
                    />
                    <div className="buttonTopMargin">
                      <button
                      type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlidingPane>
    </div>
  );
}

export default Modal;
