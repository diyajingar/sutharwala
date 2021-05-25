import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import CustomTextInput from "./CustomTextInput";
function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
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
                  <form className="form Modal-form" noValidate>
                    <CustomTextInput
                      id="Name"
                      label="Name"
                      onChange={(e) => console.log(e)}
                    />
                    <CustomTextInput
                      id="MobileNumber"
                      label="Mobile Number"
                      onChange={(e) => console.log(e)}
                    />
                    <CustomTextInput
                      id="Email"
                      label="Email Address"
                      onChange={(e) => console.log(e)}
                    />
                    <CustomTextInput
                      id="Message"
                      type="text"
                      label="Message"
                      onChange={(e) => console.log(e)}
                    />
                    <div className="buttonTopMargin">
                      <Link
                        onClick={() => props.onClose()}
                        className="p-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </Link>
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
