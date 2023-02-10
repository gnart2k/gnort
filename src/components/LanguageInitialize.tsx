import { useState } from "react"
import Select from "react-select"


const LanguageInitialize = () => {
  const options = [
    { value: 'English', label: 'English' },
    { value: 'Japanese', label: 'Japanese' }
  ]
  const [selectOption, setSelectOption] = useState(null)
  return (
    <div className="w-full ">
      <div className="w-full flex flex-col items-center">
        <span className="font-bold text-gray-400 text-3xl mt-20 mb-14">Choose Language you want to learn</span>
        <div className="mx-auto">
          <Select options={options} placeholder={"Language"} isClearable={false} className="w-60" />
        </div>
      </div>
      <div>
        <span>Level</span>
        <div className="w-full flex flex-col items-center">
          <select name="language_level" id="language_level" className="p-3 w-[10rem] rounded-md bg-white/10 text-white">
            <option value="Beginner">
              Beginner
            </option>
            <option value="Intermediate">
              Intermediate
            </option>
            <option value="Advanced">
              Advanced
            </option>

          </select>
          <button className="p-2 bg-blue-400 rounded-md mt-4">
            Submit
          </button>
        </div>
      </div>
    </div >
  )
}

export default LanguageInitialize
