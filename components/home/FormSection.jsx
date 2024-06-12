'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from 'react-select';
import { useGetAllCategoriesQuery, useGetAllSubByCatIdQuery } from "../../features/api/product";
import { add } from "../../features/filterParams/filterParamsSlice";

export default function FormSection() {

  const [formValue, setFormValue] = useState({});
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [selectedValue3, setSelectedValue3] = useState('');
  const [selectedValue4, setSelectedValue4] = useState('');
  // const [selectedValue5, setSelectedValue5] = useState('');
  const [fetchingData, setFetchingData] = useState(false);
  const [value, setValue] = useState([]);
  const [skip, setSkip] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: selectOptions1 } = useGetAllCategoriesQuery();
  const { data: all_sub } = useGetAllSubByCatIdQuery(selectedValue1?.id, { skip: selectedValue1 == '' ? true : false });


  const handleSelect1Change = (selectedOption) => {
    setSelectedValue1(selectedOption);
    console.log('selectedOption', selectedOption);
    setFormValue({ 'category': selectedOption.id })
    setSelectedValue2('')
    setSelectedValue3('')
    setSelectedValue4('')
  };

  const handleSelect2Change = (selectedOption) => {
    setSelectedValue2(selectedOption);
    setFormValue({ 'brand': selectedOption.brand_id, ...formValue })
    if (selectedOption?.id !== selectedValue3?.brand_id) {
      setSelectedValue3('')
      setFormValue({})
    }
  };

  const handleSelect3Change = (selectedOption) => {
    setSelectedValue3(selectedOption);
    setFormValue({ 'model': selectedOption.model_id, ...formValue })
  };

  const handleSelect4Change = (selectedOption) => {
    setSelectedValue4(selectedOption);
    setFormValue({ 'engine': selectedOption.engine_id, ...formValue })
  };

  // const handleSelect5Change = (event) => {
  //   setSelectedValue5(event.target.value);
  // };

  const handleFindClick = async () => {
    // Set the loading state before making the API call
    //setFetchingData(true);
    setSkip(false);
    dispatch(add(formValue))
    return router.push(`/search-result?category=${selectedValue1?.category_name ?? ""
      }&category_id=${formValue.category ?? ""}&brand=${selectedValue2?.brand_name ?? ""}&brand_id=${formValue.brand ?? ""}&model=${selectedValue3?.model_name ?? ""}&model_id=${formValue.model ?? ""}&engine=${selectedValue4?.model_name ?? ''}&engine_id=${formValue.engine ?? ""}`);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '5px',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none', // Hide the separator
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '0', // Remove padding around the dropdown indicator
      // color: 'black', // Set the color of the arrow
      // fontSize: '18px', // Adjust the font size as needed
    }),
  };


  return (
    <div className="container px-4 sm:px-8 pb-6 lg:pb-14 pt-10">
      <div className="bg-[#f2f3f3] rounded-2xl p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div className="relative">
          <Select
            id="select_category"
            name="Category"
            aria-label="Category"
            styles={customStyles}
            placeholder="Select Category"
            options={selectOptions1}
            getOptionLabel={(option) => `${option.category_name}`}
            getOptionValue={(option) => `${option['id']}`}
            value={selectedValue1}
            onChange={handleSelect1Change}
          />
        </div>
        <div className="relative">
          <Select
            id="select_brand"
            name="Brand"
            aria-label="Brand"
            styles={customStyles}
            placeholder="Select Brand"
            options={all_sub?.brand}
            getOptionLabel={(option) => `${option.brand_name}`}
            getOptionValue={(option) => `${option['brand_id']}`}
            value={selectedValue2}
            onChange={handleSelect2Change}
          />
        </div>
        <div className="relative">
          <Select
            id="select_model"
            name="Model"
            aria-label="Model"
            styles={customStyles}
            placeholder="Select Model"
            options={all_sub?.model}
            getOptionLabel={(option) => `${option.model_name}`}
            getOptionValue={(option) => `${option['model_id']}`}
            value={selectedValue3}
            onChange={handleSelect3Change}
          />
        </div>
        <div className="relative">
          <Select
            id="select_engine"
            name="Engine"
            aria-label="Engine"
            styles={customStyles}
            placeholder="Select Engine"
            options={all_sub?.engine}
            getOptionLabel={(option) => `${option.model_name}`}
            getOptionValue={(option) => `${option['engine_id']}`}
            value={selectedValue4}
            onChange={handleSelect4Change}
          />
        </div>
        {/* <div className="relative">
          <input
            id="select_budget"
            className="w-full h-full min-h-[56px] rounded-md px-4"
            type="number"
            min={0}
            max={9999999}
            placeholder="Max Budget Range"
            value={selectedValue5}
            onChange={handleSelect5Change}
          />
        </div> */}
        <Button className="py-3.5" onClick={handleFindClick} disabled={fetchingData}>Find Product</Button>
      </div>
    </div>
  );
}
