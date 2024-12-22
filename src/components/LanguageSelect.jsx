import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";
import { BiTransferAlt } from "react-icons/bi";

const LanguageSelect = ({
  setSourceLang,
  setTargetLang,
  sourceLang,
  targetLang,
  handleSwap,
}) => {
  const { isLoading, error, langs } = useSelector((store) => store.lang);

  /*
   * Dil dizisinideki nesnelerin key değerlerini:
   * code -> value
   * name -> label'a çevirmeliyiz
   * her render sırasında gereksiz hesaplamanın önüne geçmek için useMemo kullandık
   */
  const formatted = useMemo(
    () =>
      langs.map((i) => ({
        label: i.name,
        value: i.code,
      })),
    [langs]
  );

  return (
    <div className="flex gap-2 text-black ">
      <ReactSelect
        value={sourceLang}
        onChange={(e) => setSourceLang(e)}
        isLoading={isLoading}
        isDisabled={isLoading}
        options={formatted}
        className="flex-1 "
        styles={{
          control: (base) => ({
            ...base,
            cursor: "pointer",
          }),
        }}
      />

      <button
        onClick={handleSwap}
        className="bg-zinc-700 py-2 px-3 hover:bg-zinc-800 transition text-2xl text-white rounded"
      >
        <BiTransferAlt />
      </button>

      <ReactSelect
        value={targetLang}
        onChange={(e) => setTargetLang(e)}
        options={formatted}
        isLoading={isLoading}
        isDisabled={isLoading}
        className="flex-1"
        styles={{
          control: (base) => ({
            ...base,
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
};

export default LanguageSelect;
