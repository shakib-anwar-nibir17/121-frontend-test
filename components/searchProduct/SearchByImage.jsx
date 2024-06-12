"use client"
import { Camera, Search, SwitchCamera, X } from 'lucide-react';
import { SearchImageIcon } from "../icons/icons";
import { useEffect, useRef, useState } from 'react';
import { isDirectImageLink } from "../../utils/isDirectImageLink";
import { useRouter } from 'next/navigation';
import { setSearchImage } from '@/features/searchProduct/searchProductSlice';
import { useDispatch } from 'react-redux';

const SearchByImage = ({ showImageSearchModal, setShowImageSearchModal }) => {
    const modalRef = useRef(null);
    const inputRef = useRef(null);
    const [image, setImage] = useState();
    const [imageUrl, setImageUrl] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [error, setError] = useState({ image: "", imageUrl: "" })
    const router = useRouter();
    const videoRef = useRef();
    const canvasRef = useRef();
    const dispatch = useDispatch();
    const [isFrontCamera, setIsFrontCamera] = useState(false);

    const startCamera = async () => {
        setIsCameraOpen(true);
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const constraints = {
                video: {
                    facingMode: isFrontCamera ? 'user' : 'environment'
                }
            };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }
    };

    const captureImage = () => {
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, 640, 480);
        canvasRef.current.toBlob(blob => {
            const file = new File([blob], 'capturedImage.png', { type: 'image/png' });
            setImage(file);
        }, 'image/png');
    };

    useEffect(() => {
        if (isCameraOpen) {
            startCamera();
        }
    }, [isFrontCamera]);

    useEffect(() => {
        if (image) {
            dispatch(setSearchImage(image));
            router.push(`/search-result?search_type=image_search`);
            setShowImageSearchModal(false);
        }
    }, [image])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowImageSearchModal(false);
                setIsCameraOpen(false);
                setImage(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        setImage(file)
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
        e.dataTransfer.dropEffect = "copy";
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        setImage(file);
    };

    const handleSearchByImageUrl = () => {
        if (imageUrl && isDirectImageLink(imageUrl)) {
            router.push(`/search-result?weblink=${imageUrl ?? ""}`);
            setError({ ...error, imageUrl: "" })
            setShowImageSearchModal(false);
        } else {
            setError({ ...error, imageUrl: "Please enter a valid  PNG or JPG image url" })
        }
    }

    // console.log({ image, imageUrl, searchByImageResult, searchByImageUrlResult, error })
    // console.log({ isFrontCamera, isCameraOpen })
    return (
        <div ref={modalRef} className={`${showImageSearchModal ? "visible" : "hidden"} bg-white absolute -top-[3px] w-[calc(100%+2px)] xl:h-[362px] -left-[1px] z-10 border border-primary-200 rounded-xl`}>
            <div className="relative m-5 w-[calc(100%-40px)] h-[calc(100%-40px)]">
                <p className='text-left xl:text-center mb-[14px]'>
                    Search any product by image
                </p>
                <X size={20} className='absolute top-1 xl:top-0 right-0 cursor-pointer' onClick={() => setShowImageSearchModal(false)} />
                <div
                    className={`${!isCameraOpen && "h-[200px]"} xl:h-[277px] ${isDragging ? "bg-[#F5F9FF]" : "bg-[#f8f9fa]"}  flex flex-col border-dashed border-2 border-slate-300 rounded-lg`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {isDragging ? (
                        <div className='flex-1 flex justify-center items-center'>
                            Drop an image here
                        </div>
                    ) : (
                        <div className='flex-1 flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-[18px]'>
                            <div className='hidden xl:block'>
                                <SearchImageIcon />
                            </div>
                            <div className='block xl:hidden'>
                                {isCameraOpen ? (
                                    <div className='pt-4 flex flex-col items-center relative'>
                                        <video ref={videoRef} width="85%" height="200" className='rounded-lg' />
                                        <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
                                        <div className='flex items-center gap-4 mt-2'>
                                            {/* <SwitchCamera onClick={() => setIsFrontCamera(prevState => !prevState)} /> */}
                                            <Camera onClick={captureImage} />
                                        </div>
                                    </div>
                                ) : (
                                    <div onClick={startCamera} className='flex xl:hidden items-center gap-2'>
                                        <Camera />
                                        <span className='block xl:hidden'>Take a picture &nbsp;</span>
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center'>
                                <span className='hidden xl:block'>Drag an image here or &nbsp;</span>
                                <div className="">
                                    <label
                                        htmlFor="upload-button"
                                        className='text-blue-600 cursor-pointer hover:underline'
                                    >
                                        upload a file
                                    </label>
                                    <input
                                        id="upload-button"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleUpload}
                                        className="hidden"
                                        ref={inputRef}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={`${isDragging ? "hidden" : "block"} px-3 xl:px-5 pb-5`}>
                        <div className='flex items-center gap-5'>
                            <div className='flex-1 border-t border-gray-300 h-[1px]'></div>
                            <p className='text-sm'>OR</p>
                            <div className='flex-1 border-t border-gray-300 h-[1px]'></div>
                        </div>
                        <div className='relative mt-[14px] flex items-center gap-2'>
                            <input
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                type="text"
                                placeholder='Paste image link'
                                className='text-sm xl:text-base h-8 xl:h-10 px-3 xl:px-6 bg-white w-full rounded-full border focus:border-blue-500 focus:outline-none'
                            />
                            {error.imageUrl && <p className='absolute left-4 x:left-6 -bottom-4 text-red-500 text-xs'>{error.imageUrl}</p>}
                            <button onClick={handleSearchByImageUrl} className='text-blue-600 rounded-full bg-white border px-[6px] xl:px-6 py-[6px] xl:py-2 text-sm font-medium'>
                                <span className='hidden xl:block'>Search</span>
                                <Search size={20} className='block xl:hidden text-gray-500' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchByImage