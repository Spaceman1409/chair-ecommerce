import { IoMdClose } from "react-icons/io";

const Modal = ({ children, title, show, hide, height, width }) => {
    return (
        <>
            <div
                className={`fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50 transition duration-300 ease-in-out ${
                    show ? "modal-open" : "modal-close"
                }`}
            >
                <div
                    className={`bg-white p-2 rounded shadow-md ${
                        width ? width : "w-full"
                    } ${height ? height : "h-full"}`}
                >
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">
                            {title ? title : ""}
                        </h4>
                        <IoMdClose onClick={hide} className="cursor-pointer" />
                    </div>
                    <hr className="h-4 mt-2 w-full" />
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
