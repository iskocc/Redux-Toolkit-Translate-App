import React, { useEffect, useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import TextContainer from "./components/TextContainer";
import { useDispatch, useSelector } from "react-redux";
import { getLangs, translateText } from "./redux/actions";
import { en, tr } from "./constants";
import { MdOutlineTranslate } from "react-icons/md";
const App = () => {
  const { answer } = useSelector((store) => store.translate);
  const dispatch = useDispatch();
  const [sourceLang, setSourceLang] = useState(tr);
  const [targetLang, setTargetLang] = useState(en);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getLangs());
  }, []);

  useEffect(() => {
    if (text) {
      dispatch(translateText({ sourceLang, targetLang, text }));
    }
  }, [targetLang]);

  const handleTranslate = () => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  };
  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(answer);
  };

  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">
          Translate App<span className="text-white-500 font-bold"></span>
        </h1>

        <LanguageSelect
          setSourceLang={setSourceLang}
          sourceLang={sourceLang}
          setTargetLang={setTargetLang}
          targetLang={targetLang}
          handleSwap={handleSwap}
        />

        <TextContainer setText={setText} text={text} />

        <button
          onClick={handleTranslate}
          className="bg-zinc-700 px-5 py-3 rounded-md flex items-center justify-center gap-2
        font-semibold hover:ring-2 hover:bg-zinc-900 
        cursor-pointer transition mt-3 disabled:brightness-50"
        >
          <span>Translate</span>
        </button>
      </div>
    </div>
  );
};

export default App;
