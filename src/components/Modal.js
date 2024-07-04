import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Save Changes</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal