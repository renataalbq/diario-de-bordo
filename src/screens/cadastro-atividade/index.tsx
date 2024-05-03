import React from "react";
import { Menu } from "../../components/menu";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone, FaPause } from "react-icons/fa6";
import { PhotoIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

const CadastroAtividade = () => {
  const navigate = useNavigate()
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Seu navegador não suporta reconhecimento de voz.</span>;
  }

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        interimResults: true,
      });
    }
  };

  const handleSave = () => {
    navigate('/listagem-atividade')
  }

  return (
    <>
      <Menu />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cadastro de Atividade</h1>
        <form className="bg-gray-50 p-4 rounded-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="titulo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Título da Atividade:
            </label>
            <div className="mt-2">
              <input
                id="titulo"
                name="titulo"
                type="text"
                autoComplete="titulo"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="tipo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Tipo de Atividade:
            </label>
            <div className="mt-2">
              <select
                id="tipo"
                name="tipo"
                autoComplete="tipo-atividade"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              >
                <option value="campo">Atividade de Campo</option>
                <option value="evento">Evento</option>
                <option value="palestra">Palestra</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="imagem"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Imagem:
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Escolha a imagem</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="descricao"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Descrição (texto ou voz):
            </label>
            <div className="mt-2">
              <textarea
                className="border rounded-md p-2 w-full h-32"
                value={transcript}
                onChange={(e) => {
                  resetTranscript();
                }}
              />
            </div>
            <button
              type="button"
              className={`mt-2 bg-green-500 text-white font-bold py-2 px-4 rounded`}
              onClick={toggleListening}
            >
              {listening ? <FaPause /> : <FaMicrophone />}
            </button>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={() => handleSave()}
          >
            Salvar Atividade
          </button>
        </form>
      </div>
    </>
  );
};

export default CadastroAtividade;
