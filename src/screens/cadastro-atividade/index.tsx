import { useEffect, useState } from "react";
import { Menu } from "../../components/menu";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone, FaPause } from "react-icons/fa6";
import { PhotoIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import useCadastrarAtividade from "../../services/atividades/cadastrarAtividade";
import { jwtDecode } from "jwt-decode";

const CadastroAtividade = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");

  const [formData, setFormData] = useState({
    usuario: {
      id: userId,
    },
    dataAtividade: "",
    descricaoAtividade: "",
    titulo: "",
    atividadeTipo: 0,
    imagemBase64: "",
  });
  const { cadastrarAtividade, error } = useCadastrarAtividade();
  const [base64, setBase64] = useState("");
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

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

  const handleSave = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const updatedFormData = { ...formData, imagemBase64: base64 };

    await cadastrarAtividade(updatedFormData);
    console.log(formData);
    if (!error) {
      navigate("/listagem-atividade");
    }
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64String = btoa(e.target.result);
      setBase64(base64String);
    };

    reader.readAsBinaryString(file);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.sub);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);


  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      usuario: {
        id: userId 
      }
    }));
  }, [userId]);

  return (
    <>
      <Menu />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cadastro de Atividade</h1>
        <form
          onSubmit={handleSave}
          className="bg-gray-50 p-4 rounded-md mx-auto"
        >
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
                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={formData.titulo}
                onChange={handleInputChange}
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
                name="atividadeTipo"
                autoComplete="tipo-atividade"
                value={formData.atividadeTipo}
                onChange={handleInputChange}
                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecione um Tipo</option>
                <option value="0">Atividade de Campo</option>
                <option value="1">Evento</option>
                <option value="2">Palestra</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dataAtividade"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Data da Atividade:
            </label>
            <div className="mt-2">
              <input
                id="dataAtividade"
                name="dataAtividade"
                type="date"
                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={formData.dataAtividade}
                onChange={handleInputChange}
              />
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
              {base64 ? (
                <img src={base64} alt="Preview" style={{ maxWidth: "100%", height: "auto" }} />
              ) : (
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
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                </div>
              )}
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
                className="border pl-2 rounded-md p-2 w-full h-32"
                value={formData.descricaoAtividade || transcript}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    descricaoAtividade: e.target.value,
                  });
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
          >
            Salvar Atividade
          </button>
        </form>
      </div>
    </>
  );
};

export default CadastroAtividade;
