"use client"
import { X } from 'lucide-react';
import { MdMic } from "react-icons/md";

const SearchByVoice = ({ searchText, setShowVoiceSearchModal, handleListening, isListening }) => {
    return (
        <div className={`visible bg-white absolute -top-[3px] w-[calc(100%+2px)] h-[300px] xl:h-[362px] -left-[1px] z-10 border border-primary-200 rounded-xl`}>
            <div className="relative m-5 w-[calc(100%-40px)] h-[calc(100%-40px)]">
                <X size={20} className='absolute top-1 xl:top-0 right-0 cursor-pointer' onClick={() => setShowVoiceSearchModal(false)} />
                <div className={`  xl:max-w-[60%] mx-auto flex justify-between items-center gap-6 h-full overflow-y-auto`}>
                    <p className='text-xl xl:text-3xl'>
                        {isListening && !searchText && "Listening..."}
                        {searchText}
                    </p>
                    <div className='border rounded-full p-2 xl:p-4' onClick={() => handleListening("start_listening")}>
                        <MdMic size={80} className={`${isListening ? "text-red-500" : "text-gray-400"} hidden xl:block`} />
                        <MdMic size={40} className={`${isListening ? "text-red-500" : "text-gray-400"} block xl:hidden`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchByVoice