import { useEffect, useRef, useState, useCallback } from "react";
import Button from "./Button";
import cscLogo from "../../assets/Logo/Artboard.svg";

export default function SuccessDialog({
  isOpen,
  onClose,
  autoClose = true,
  autoCloseDuration = 2000,
}) {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef(null);
  const closedRef = useRef(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleClose = useCallback(() => {
    if (closedRef.current) return;
    closedRef.current = true;

    clearTimer();
    setIsClosing(true);

    setTimeout(() => {
      onClose?.();
      setIsClosing(false);
      closedRef.current = false;
    }, 300);
  }, [onClose, clearTimer]);

  useEffect(() => {
    if (isOpen) {
      closedRef.current = false;
    } else {
      clearTimer();
    }

    if (isOpen && autoClose) {
      clearTimer();
      timerRef.current = setTimeout(handleClose, autoCloseDuration);
    }

    return () => clearTimer();
  }, [isOpen, autoClose, autoCloseDuration, handleClose, clearTimer]);

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm ${
        isClosing ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden ${
          isClosing ? "animate-slideDown" : "animate-slideUp"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating checkmark icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden ">

                  {/*ຂ້າງຊ້າຍ*/}
          <div className="absolute top-32 left-27  w-6 h-6 rounded-full border-2  bg-blue-500 border-blue-100 flex items-center justify-center animate-bounce-slow">
            <svg className="w-4 h-4 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="absolute top-19 left-32  w-4 h-4 rounded-full border-2  bg-blue-500 border-blue-100 flex items-center justify-center animate-bounce-slow">
            <svg className="w-2 h-2 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

                    <div className="absolute top-25 left-40  w-2 h-2 rounded-full border-2  bg-blue-500 border-blue-100 flex items-center justify-center animate-bounce-slow">
            <svg className="w-2 h-2 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

                <div className="absolute top-60 left-25  w-4 h-4 rounded-full border-2  bg-blue-500 border-blue-100 flex items-center justify-center animate-bounce-slow">
            <svg className="w-2 h-2 text-blue-100" fill="currentColor" viewBox="0 0 20    20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>


          <div className="absolute bottom-20 left-18  w-8 h-8 rounded-full border-2 border-blue-400 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

                    <div className="absolute bottom-5 left-52  w-4 h-4 rounded-full border-2 border-blue-400 bg-blue-500 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-2 h-2 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>



            <div className="absolute bottom-30 left-10  w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>




                    <div className="absolute bottom-23 left-33  w-2 h-2 rounded-full border-2 border-blue-400 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-1 h-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>


   <div className="absolute bottom-22 left-56  w-1 h-1 rounded-full border-2 border-blue-400 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-1 h-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          
          


   {/*ຂ້າງຂວາ*/}

     <div className="absolute bottom-25 left-80  w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-5 h-5 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>




               <div className="absolute bottom-23 left-92  w-4 h-4 rounded-full bg-blue-300 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-3 h-3 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>


                  <div className="absolute bottom-36 left-92  w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-6 h-6 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>


                  <div className="absolute bottom-37 left-78  w-2 h-2 rounded-full bg-blue-300 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-1 h-1 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>


                  <div className="absolute bottom-45 left-82  w-4 h-4 rounded-full bg-blue-300 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-3 h-3 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
                

          

                  <div className="absolute bottom-50 left-75  w-3 h-3 rounded-full bg-blue-300 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-2 h-2 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>



   <div className="absolute bottom-10 left-82  w-1 h-1 rounded-full border-2 border-blue-400 flex items-center justify-center animate-bounce-slow animation-delay-300">
            <svg className="w-1 h-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>



            
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <img src={cscLogo} alt="CSC Logo" className="w-38 h-38 object-contain" />
          </div>

          <h3 className="text-5xl font-medium text-blue-700 mb-3 text-center">
            ສຳເລັດແລ້ວ
          </h3>
        </div>
      </div>
    </div>
  );
}
