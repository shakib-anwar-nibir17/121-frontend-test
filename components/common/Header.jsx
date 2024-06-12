"use client";
import AskForProducts from "@/components/home/AskForProducts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  useGetAllCategoriesQuery,
  useGetAllSubByCatIdQuery,
  useGetProductCategoriesQuery,
  useTextSearchMutation,
} from "@/features/api/product";
import { getUserInfo } from "@/lib/authUser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Cookies from "js-cookie";
import { ChevronDown, Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { useDispatch } from "react-redux";
import Select from "react-select";
import {
  CategoryIcon,
  ConfigureIcon,
  HamburgerMenuIcon,
  ImageIcon,
  MicrophoneIcon,
  SearchIcon,
  UserOutlinedIcon,
  UserProfileIcon,
} from "../../components/icons/icons";
import { get } from "../../features/favourite/favouriteSlice";
import { add } from "../../features/filterParams/filterParamsSlice";
import { debounce } from "../../utils/debounce";
import { getDeviceType } from "../../utils/getDeviceType";
import SearchByImage from "../searchProduct/SearchByImage";
import SearchByVoice from "../searchProduct/SearchByVoice";
import SearchSuggestion from "../searchProduct/SearchSuggestion";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);
  const [searchInputFocused, setSearchInputFocused] = useState(false);
  const [showImageSearchModal, setShowImageSearchModal] = useState(false);
  const [showVoiceSearchModal, setShowVoiceSearchModal] = useState(false);
  const [device, setDevice] = useState("");
  // const totalFavCount = useSelector((state) => state.favourite.favItems.length);
  const dispatch = useDispatch();
  const router = useRouter();
  const [authToken, setAuthToken] = useState("");

  const [searchText, setSearchText] = useState("");
  const [formValue, setFormValue] = useState({});
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [isListening, setIsListening] = useState(false);

  const { data: selectOptions1 } = useGetAllCategoriesQuery();
  const { data: all_sub } = useGetAllSubByCatIdQuery(selectedValue1?.id, {
    skip: selectedValue1 == "" ? true : false,
  });
  const [
    searchProduct,
    {
      data: searchProductData,
      error: searchProductError,
      isLoading: isSearchProductLoading,
    },
  ] = useTextSearchMutation();
  const {
    data: cate_data,
    error,
    isLoading,
  } = useGetProductCategoriesQuery({ limit: 500 });

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  useEffect(() => {
    setAuthToken(Cookies.get("authToken"));
    setDevice(getDeviceType());
  }, []);

  useEffect(() => {
    router.prefetch("/search-result");
    router.prefetch("/details/a-random-string-id-123-product");
    router.prefetch("/category/1/sub-category/1");
    const productIds = ["2", "3", "4", "6", "10"];
    productIds.forEach((id) => router.prefetch(`/impact-type/${id}`));
  }, [router]);

  const debouncedSearchProduct = useRef(debounce(searchProduct, 400)).current;

  useEffect(() => {
    // this function to be called when manually searching with text or when voice typing is complete.
    if (!isListening) {
      debouncedSearchProduct({ text_file: searchText });
    }
  }, [searchText]);

  useEffect(() => {
    if (showVoiceSearchModal) {
      handleListening("start_listening");
    }

    return () => {
      // stop listening when voice typing modal is closed
      handleListening("stop_listening");
    };
  }, [showVoiceSearchModal]);

  const handleListening = useCallback((action) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    if (action === "start_listening") {
      setIsListening(true);
      recognition.interimResults = true;
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchText(transcript);
        if (event.results[0].isFinal) {
          setIsListening(false);
          setShowVoiceSearchModal(false);
          router.push(`/search-result?text_file=${transcript ?? ""}`);
        }
      };
      recognition.start();
    } else if (action === "stop_listening") {
      setIsListening(false);
      recognition.stop();
    }
  }, []);

  const handleSelect1Change = (selectedOption) => {
    setSelectedValue1(selectedOption);
    setFormValue({ category: selectedOption.id });
    setSelectedValue2("");
    setSelectedValue3("");
  };

  const handleSelect2Change = (selectedOption) => {
    setSelectedValue2(selectedOption);
    setFormValue({ brand: selectedOption.brand_id, ...formValue });
    if (selectedOption?.id !== selectedValue3?.brand_id) {
      setSelectedValue3("");
      setFormValue({});
    }
  };

  const handleSelect3Change = (selectedOption) => {
    setSelectedValue3(selectedOption);
    setFormValue({ model: selectedOption.model_id, ...formValue });
  };

  const handleSearchProduct = () => {
    setSearchInputFocused(false);
    router.push(`/search-result?text_file=${searchText ?? ""}`);
  };

  const handleSearchProductOnEnter = (e) => {
    if (event.key === "Enter") {
      handleSearchProduct();
    }
  };

  const handleFindClick = async () => {
    dispatch(add(formValue));
    setFilterToggle(false);
    return router.push(
      `/search-result?category=${
        selectedValue1?.category_name ?? ""
      }&category_id=${formValue.category ?? ""}&brand=${
        selectedValue2?.brand_name ?? ""
      }&brand_id=${formValue.brand ?? ""}&model=${
        selectedValue3?.model_name ?? ""
      }&model_id=${formValue.model ?? ""}`
    );
  };

  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle);
  };

  const handleLogout = () => {
    localStorage.removeItem("active_provider");
    localStorage.removeItem("user_info");
    Cookies.remove("authToken");
    Cookies.remove("authToken");
    Cookies.remove("tokenType");
    signOut();
    return router.push("/signin");
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "5px",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0", // Remove padding around the dropdown indicator
      // color: 'black', // Set the color of the arrow
      // fontSize: '18px', // Adjust the font size as needed
    }),
  };

  const handleMenubarChange = () => {
    setMenuOpen(false);
  };

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "bangla", label: "Bangla" },
    { value: "dutch", label: "Dutch" },
  ];

  const currencyOptions = [
    { value: "usd", label: "  USD" },
    { value: "bdt", label: "BDT" },
  ];

  const customSelectStyle = {
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: "black",
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      color: "black",
    }),
    indicatorContainer: (baseStyles) => ({
      ...baseStyles,
      padding: "0px",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "white" : "white",
      alignItems: "center",
      padding: "0px",
    }),
    indicatorSeparator: (baseStyles) => {
      visibility: "hidden";
    },
  };

  const handleLoseFocus = () => {
    setTimeout(() => {
      setSearchInputFocused(false);
    }, 500);
  };

  const showSearchSuggestions =
    searchInputFocused && searchProductData?.length > 0;

  const user_info = getUserInfo();

  return (
    <nav className="xl:border-b  border-primary-200">
      <div className="container sm:px-8 px-4">
        {/* desktop view top menu  */}
        <div className="hidden xl:flex justify-between items-center">
          <div className="space-x-12 py-6 2xl:py-8">
            {[
              { label: "About Us", value: "about-us" },
              { label: "Contact Us", value: "contact-us" },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.value}
                className="text-base font-normal text-primary-600 hover:text-primary-950"
              >
                {category.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-12">
            <div className="space-x-12 py-6 2xl:py-8">
              <Select
                styles={customSelectStyle}
                options={languageOptions}
                defaultValue={languageOptions[0]}
              />
            </div>
            <div className="space-x-12 py-6 2xl:py-8">
              <Select
                styles={customSelectStyle}
                options={currencyOptions}
                defaultValue={currencyOptions[0]}
              />
            </div>
          </div>
        </div>

        <div className="hidden xl:flex justify-between pb-12">
          <div className="md:w-[219px] md:h-[54px]">
            <Link href={"/"}>
              <Image
                className="md:w-full md:h-full"
                src="/logo.png"
                alt="logo"
                priority={false}
                width={219}
                height={54}
              />
            </Link>
          </div>

          <div className="flex items-center space-x-10">
            <div
              className={`border-r border-t border-l ${
                showSearchSuggestions ? "rounded-t-lg" : "border-b rounded-lg"
              } border-primary-200 xl:w-[45.46rem] 2xl:w-[50rem] relative min-h-[3.375rem] 2xl:min-h-[4rem]`}
            >
              <div className="flex items-center w-full px-2 absolute">
                {/* category menu */}
                <div className="border-r border-primary-200 px-3 flex-shrink-0 w-20">
                  <Menubar className="border-none cursor-pointer">
                    <MenubarMenu>
                      <MenubarTrigger className="cursor-pointer">
                        All
                      </MenubarTrigger>
                      <MenubarContent className="mt-1.5 -ml-5 bg-white">
                        {selectOptions1?.length > 0 &&
                          selectOptions1.map((item, index) => (
                            <MenubarItem
                              className="font-semibold text-gray-900"
                              key={"MenubarItem" + index}
                            >
                              <Link href={`/category/${item?.id}`}>
                                {item?.category_name}
                              </Link>
                            </MenubarItem>
                          ))}
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>

                {/* input box */}
                <div className="flex-1 relative">
                  <input
                    className="py-3 px-10 w-full font-normal text-lg focus:outline-none border-none"
                    type="text"
                    placeholder="Search for parts & accessories"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleSearchProductOnEnter}
                    onFocus={() => setSearchInputFocused(true)}
                    onBlur={handleLoseFocus}
                  />

                  <span className="absolute left-2 top-[25%]">
                    <SearchIcon className="w-6 h-6 text-slate-400" />
                  </span>

                  <div className="absolute right-2 flex items-center space-x-5 2xl:space-x-7 top-[25%]">
                    <button onClick={() => setShowVoiceSearchModal(true)}>
                      <MicrophoneIcon className="w-6 h-6" />
                    </button>
                    <button onClick={() => setShowImageSearchModal(true)}>
                      <ImageIcon className="w-6 h-6" />
                    </button>
                    <button onClick={handleFilterToggle}>
                      <ConfigureIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* search suggestions */}
              <SearchSuggestion
                showSearchSuggestions={showSearchSuggestions}
                searchProductData={searchProductData}
              />
              {/* voice search modal */}
              {showVoiceSearchModal && (
                <SearchByVoice
                  searchText={searchText}
                  setShowVoiceSearchModal={setShowVoiceSearchModal}
                  handleListening={handleListening}
                  isListening={isListening}
                />
              )}
              {/* image search modal */}
              {device === "desktop" && (
                <SearchByImage
                  showImageSearchModal={showImageSearchModal}
                  setShowImageSearchModal={setShowImageSearchModal}
                />
              )}
              {/* advance search */}
              <div
                className={`${
                  filterToggle ? "visible" : "hidden"
                } bg-white  shadow-xl top-14 rounded-2xl border-gray-200  border w-full absolute inset-x-0 z-10`}
              >
                <div className="border-b p-4">
                  <p className="text-gray-950 font-bold text-lg">
                    Advanced Search
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 px-6">
                  <div>
                    <Select
                      name="Category"
                      aria-label="Category"
                      styles={customStyles}
                      placeholder="Select Category"
                      options={selectOptions1}
                      getOptionLabel={(option) => `${option.category_name}`}
                      getOptionValue={(option) => `${option["id"]}`}
                      value={selectedValue1}
                      onChange={handleSelect1Change}
                    />
                  </div>
                  <div>
                    <Select
                      name="Brand"
                      aria-label="Brand"
                      styles={customStyles}
                      placeholder="Select Brand"
                      options={all_sub?.brand}
                      getOptionLabel={(option) => `${option.brand_name}`}
                      getOptionValue={(option) => `${option["brand_id"]}`}
                      value={selectedValue2}
                      onChange={handleSelect2Change}
                    />
                  </div>
                  <div>
                    <Select
                      name="Model"
                      aria-label="Model"
                      styles={customStyles}
                      placeholder="Select Model"
                      options={all_sub?.model}
                      getOptionLabel={(option) => `${option.model_name}`}
                      getOptionValue={(option) => `${option["model_id"]}`}
                      value={selectedValue3}
                      onChange={handleSelect3Change}
                    />
                  </div>
                </div>

                <div className="text-right p-4">
                  <Button className="px-8 py-2.5" onClick={handleFindClick}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* sign in button */}
          <div className="flex space-x-6">
            {authToken ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="group inline-flex justify-center items-center text-sm font-medium text-gray-900 hover:text-primary-950">
                  <UserProfileIcon className="h-12 w-12 text-gray-300 border rounded-full hover:ring-2" />{" "}
                  <span className="ml-2 text-lg mr-2 font-medium">Hi,</span>
                  <span className="text-lg font-bold mr-3">
                    {user_info?.login_name}
                  </span>
                  <MdArrowDropDown size={20} className="mt-1" />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="bg-white w-[300px] h-[216px]"
                  align="end"
                >
                  <div className="p-6 flex items-center gap-2 border-b-2 border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center text-white">
                      <p>TY</p>
                    </div>
                    <div>
                      <h2 className="font-bold text-black">
                        {user_info?.login_name}
                      </h2>
                      <p className="text-sm">General Account</p>
                    </div>
                  </div>
                  <DropdownMenuItem>
                    <Link
                      href={"/eshop-application"}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left flex items-center gap-6 text-medium text-lg"
                    >
                      <PiSquaresFour size={24} /> Apply as a Seller
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div
                      onClick={handleLogout}
                      className="flex items-center text-lg text-medium gap-6 px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left cursor-pointer"
                    >
                      <GrLogout size={20} /> Logout
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={"/signin"}>
                <div className="flex items-center min-w-0 gap-x-3">
                  <UserOutlinedIcon className="w-6 h-6" />
                  <div>
                    <p className="text-primary-600 font-medium pb-px">
                      Sign in
                    </p>
                    <p className="text-primary-950 font-bold">
                      <strong>Account</strong>
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="flex relative justify-center xl:justify-start items-center space-x-6 xl:-mb-1">
          <Menubar className="hidden h-[3.75rem] border-none w-[350px] rounded-none 2xl:w-[450px] bg-[#F2F3F3] rounded-tl-xl p-4 2xl:p-6 rounded-tr-xl xl:flex justify-between items-center">
            <MenubarMenu className="rounded-none">
              <MenubarTrigger className="flex items-center space-x-2 cursor-pointer w-full">
                <div className="w-6 h-6">
                  <HamburgerMenuIcon className="w-6 h-6" />
                </div>
                <p className="font-bold leading-8 flex justify-between items-center text-lg text-[#01060D] w-full">
                  All Categories
                  <span>
                    <IoIosArrowDown className="mt-1" />
                  </span>
                </p>
              </MenubarTrigger>

              <MenubarContent className="-ml-[12px] 2xl:-ml-[20px] bg-white border-b border-l border-r border-[#D9DADB] w-[350px] 2xl:w-[450px] rounded-none rounded-b-xl">
                {isLoading
                  ? "Loading"
                  : cate_data
                  ? cate_data.length > 0 &&
                    cate_data.map((item) => (
                      <div key={item?.category_id}>
                        <MenubarSub className="rounded-b-xl">
                          <MenubarSubTrigger className="py-3 cursor-pointer">
                            <div className="flex items-center space-x-2 2xl:space-x-4">
                              <span>
                                <CategoryIcon className="w-5 h-5 2xl:w-6 2xl:h-6" />
                              </span>
                              <span className="text-sm font-normal text-primary-950 xl:text-base 2xl:text-lg">
                                {item?.category_name}
                              </span>
                            </div>
                          </MenubarSubTrigger>
                          <MenubarSubContent
                            className={`ml-1 shadow border-none py-3 px-4 rounded-lg bg-white 2xl:rounded-xl ${
                              item?.sub_categories ? "visible" : "invisible"
                            }`}
                          >
                            {item?.sub_categories &&
                              item?.sub_categories.length > 0 &&
                              item?.sub_categories.map((sub_cat, index) => (
                                <MenubarItem
                                  key={index}
                                  onClick={() =>
                                    router.push(
                                      `/category/${item?.category_id}/sub-category/${sub_cat?.subcategory_id}`
                                    )
                                  }
                                  className="text-[#01060D] cursor-pointer transition duration-500 hover:text-primary-900 text-lg 2xl:text-xl"
                                >
                                  {sub_cat?.sub_category_name}
                                </MenubarItem>
                              ))}
                          </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSeparator className="bg-[#D9DADB]" />
                      </div>
                    ))
                  : null}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <div className="space-x-4 hidden sm:space-x-12 xl:flex items-center py-3 md:py-5">
            <Link
              href={"/"}
              className="text-sm xl:text-lg text-[#01060D] hover:text-gray-600 leading-8 font-medium"
            >
              Home
            </Link>
            <Link
              href={"/shop"}
              className="text-sm xl:text-lg text-[#01060D] hover:text-gray-600 leading-8 font-medium flex items-center"
            >
              Shop{" "}
              <span className="mt-1 ml-[2px]">
                <IoIosArrowDown />
              </span>
            </Link>
            <Link
              href={"#"}
              className="text-sm xl:text-lg text-[#01060D] hover:text-gray-600 leading-8 font-medium flex items-center"
            >
              <AskForProducts />
            </Link>
            {/* ask for quotation */}
            <div className="absolute right-0 hidden xl:block pr-4 ">
              <Link href={"#"} className="flex items-center gap-2 text-black">
                <PiSquaresFour size={24} /> Apply as a Seller
              </Link>
            </div>
          </div>
          <div className="space-x-4 xl:hidden flex  sm:space-x-12 items-center py-3 md:py-5">
            <Link
              href={"/about-us"}
              className="text-base text-[#01060D] font-medium hover:text-gray-600"
            >
              About Us
            </Link>
            <Select
              styles={customSelectStyle}
              options={languageOptions}
              defaultValue={languageOptions[0]}
            />
            <Select
              styles={customSelectStyle}
              options={currencyOptions}
              defaultValue={currencyOptions[0]}
            />
          </div>
        </div>
      </div>

      <div className="px-4 xl:hidden flex justify-between items-center gap-4 py-4 sm:px-8 border-t border-b border-primary-200">
        <div className="">
          <button className="w-6 h-6" onClick={() => setMenuOpen(true)}>
            <Menu
              size={30}
              className="-ml-1 mt-[6px] stroke-2"
              color="#01060de3"
            />
          </button>
          {/* mobile sidebar */}
          <div
            className={`${
              menuOpen
                ? "fixed border-2 border-primary-900 top-0 bg-white z-50  left-0 w-[300px] h-screen xl:hidden duration-1000 ease-in-out"
                : "fixed bg-white left-[-100%] top-0"
            }`}
          >
            <div className="flex bg-white absolute z-50 flex-col justify-between min-h-screen">
              <div className="bg-white relative">
                <div
                  onClick={handleMenubarChange}
                  className="flex items-center h-16 bg-primary-900 justify-end pr-4"
                >
                  <X color="#fff" size={22} />
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full bg-white px-4"
                >
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="rounded-lg w-full sm:w-[268px] flex justify-between items-center hover:no-underline bg-[#ECF3FF] px-3 mt-5 py-2">
                      <span>All Categories</span>
                      <ChevronDown size={26} />
                    </AccordionTrigger>

                    <AccordionContent>
                      {selectOptions1?.length > 0 &&
                        selectOptions1.map((item) => (
                          <Link
                            href={`/category/${item?.id}`}
                            className=" inline-block w-full py-2 font-normal text-sm px-1.5"
                            key={item?.id}
                          >
                            {item?.category_name}
                          </Link>
                        ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="pl-4 py-2">
                  <Link
                    href={"/"}
                    className=" inline-block w-full py-2 font-normal text-sm px-1.5"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/shop"}
                    className=" inline-block w-full py-2 font-normal text-sm px-1.5"
                  >
                    Shop
                  </Link>
                </div>
              </div>

              <div className="px-6 pb-4">
                <p className="text-sm font-normal">
                  Copyright 2023 © Tools121. All right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 min-w-[200px] md:min-w-[400px] border-r border-t border-l ${
            showSearchSuggestions ? "rounded-t-lg" : "border-b rounded-md"
          } border-primary-200 p-2 flex items-center justify-between relative`}
        >
          {/* search input */}
          <div className="flex-1 relative">
            <input
              className="w-fit text-xs focus:outline-none border-none overflow-hidden"
              type="text"
              placeholder="Search for parts & accessories"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearchProductOnEnter}
              onFocus={() => setSearchInputFocused(true)}
              onBlur={handleLoseFocus}
            />
            <div className="absolute right-2 bg-white flex items-center space-x-1 2xl:space-x-7 top-[15%]">
              <button onClick={handleSearchProduct}>
                <SearchIcon className="w-4 h-4 text-slate-400" />
              </button>
              <button onClick={() => setShowVoiceSearchModal(true)}>
                <MicrophoneIcon className="w-4 h-4" />
              </button>
              <button onClick={() => setShowImageSearchModal(true)}>
                <ImageIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* search suggestions */}
          <SearchSuggestion
            showSearchSuggestions={showSearchSuggestions}
            searchProductData={searchProductData}
          />
          {/* voice search modal */}
          {showVoiceSearchModal && (
            <SearchByVoice
              searchText={searchText}
              setShowVoiceSearchModal={setShowVoiceSearchModal}
              handleListening={handleListening}
              isListening={isListening}
            />
          )}
          {/* image search modal */}
          {device === "mobile" && (
            <SearchByImage
              showImageSearchModal={showImageSearchModal}
              setShowImageSearchModal={setShowImageSearchModal}
            />
          )}
        </div>
        <div>
          {authToken ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-900 hover:text-primary-950">
                <UserProfileIcon className="h-12 w-12 text-gray-300 border rounded-full hover:ring-2" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white" align="end">
                <div className="p-6 flex items-center gap-2 border-b-2 border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center text-white">
                    <p>TY</p>
                  </div>
                  <div>
                    <h2 className="font-bold text-black">
                      {user_info?.login_name}
                    </h2>
                    <p className="text-sm">General Account</p>
                  </div>
                </div>
                <DropdownMenuItem>
                  <Link
                    href={"/eshop-application"}
                    className="px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left flex items-center gap-6 text-medium text-lg"
                  >
                    <PiSquaresFour size={24} /> Apply as a Seller
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    onClick={handleLogout}
                    className="flex items-center text-lg text-medium gap-6 px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left cursor-pointer"
                  >
                    <GrLogout size={20} /> Logout
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={"/signin"}>
              <div className="flex items-center min-w-0 gap-x-2">
                <UserOutlinedIcon className="w-4 h-4" />
                <p className="text-xs text-primary-950 font-medium pb-px leading-[32px]">
                  Sign in
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
