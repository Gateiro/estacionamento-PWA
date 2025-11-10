#!/bin/bash

# Solicita ao usuário o nome do projeto
echo "Digite o nome do seu projeto:"
read project_name

# Cria o projeto Vite usando o nome do projeto
npm create vite@latest $project_name -- --template react

# Navega para o novo diretório do projeto
cd $project_name

# Instala Tailwind CSS, PostCSS e Autoprefixer
npm install -D tailwindcss postcss autoprefixer

# Inicializa os arquivos de configuração do Tailwind
npx tailwindcss init -p

# Remove o arquivo index.css padrão
rm src/index.css

# Configura o Tailwind no novo src/index.css
echo "@tailwind base;" >> src/index.css
echo "@tailwind components;" >> src/index.css
echo "@tailwind utilities;" >> src/index.css

# Remove a configuração padrão do Tailwind
rm tailwind.config.js

# Cria uma nova configuração do Tailwind com DaisyUI
echo '/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}' >> tailwind.config.js

# Instala DaisyUI
npm i -D daisyui@latest

# Remove o arquivo App.css padrão
rm src/App.css

# Sobrescreve o arquivo App.jsx com código de exemplo do Tailwind CSS e DaisyUI
echo 'function App() {
  return (
    <div className="text-center text-2xl bg-yellow-200 font-bold text-blue-500">
      Bem-vindo ao Tailwind CSS com DaisyUI!
    </div>
  );
}

export default App;' > src/App.jsx

# Mensagem final
echo "O projeto $project_name foi criado e configurado com Tailwind CSS, DaisyUI e exemplo de estilos Tailwind."

# Instala dependências e inicia o servidor de desenvolvimento
npm install
npm run dev