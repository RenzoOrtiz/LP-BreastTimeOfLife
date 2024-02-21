export function BtnLeng() {
  return (
    <div className="flex w-[65px] border-[#990000]  border-2 rounded overflow-hidden">
      <select name="select" className="p-0 outline-none mx-auto">
        <option value="EN" className="bg-[#990000] p-2 text-white">
          EN
        </option>
        <option value="ES" className="bg-[#990000] text-white p-2  ">
          ES
        </option>
      </select>
    </div>
  );
}
