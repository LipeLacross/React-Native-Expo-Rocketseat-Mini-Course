## 🌐 [English Version of README](README_EN.md)

# RocketLinks

Um aplicativo móvel desenvolvido em React Native/Expo para organizar e gerenciar seus links favoritos por categorias. Com uma interface intuitiva e moderna, o RocketLinks permite que você salve, organize e acesse rapidamente todos os seus links importantes em um só lugar.

## 🔨 Funcionalidades do Projeto

- ✅ **Adicionar links por categoria**: Organize seus links em categorias personalizadas
- ✅ **Visualização organizada**: Veja todos os seus links categorizados de forma clara
- ✅ **Deletar links**: Remova links que não são mais necessários
- ✅ **Abrir links**: Acesse seus links diretamente no navegador do dispositivo
- ✅ **Storage local**: Todos os dados são salvos localmente no dispositivo
- ✅ **Interface responsiva**: Design adaptável para diferentes tamanhos de tela
- ✅ **Navegação fluida**: Experiência de usuário otimizada com Expo Router

### 📸 Exemplo Visual do Projeto

<img width="540" height="1200" alt="Tela Principal com Links" src="https://github.com/user-attachments/assets/27bb1c74-fc00-4b77-89ce-c6d83e4d6f9f" />
<img width="540" height="1200" alt="Formulário de Adicionar Link" src="https://github.com/user-attachments/assets/440117bf-a462-41d3-9a1f-b0f3386d432e" />
<img width="540" height="1200" alt="Links Organizados por Categoria" src="https://github.com/user-attachments/assets/8bb79dc2-4178-4007-96b4-3022c1812fbe" />

## ✔️ Técnicas e Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma
- **Expo**: Plataforma para desenvolvimento e build de apps React Native
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática
- **Expo Router**: Sistema de roteamento baseado em arquivos para navegação
- **AsyncStorage**: Armazenamento local persistente de dados
- **Expo Linking**: Para abrir URLs no navegador externo
- **React Hooks**: useState, useEffect para gerenciamento de estado
- **StyleSheet**: Sistema de estilos nativo do React Native

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── _layout.tsx: Layout principal da aplicação
│   ├── index.tsx: Tela principal com lista de links
│   ├── add.tsx: Tela para adicionar novos links
│   ├── +not-found.tsx: Tela de erro 404
│   └── modal.tsx: Componente modal
├── components/
│   ├── Link/
│   │   ├── index.tsx: Componente de link individual
│   │   └── styles.ts: Estilos do componente Link
│   ├── Categories/
│   │   ├── index.tsx: Componente de seleção de categoria
│   │   └── styles.ts: Estilos do componente Categories
│   └── Button/
│       ├── index.tsx: Componente de botão reutilizável
│       └── styles.ts: Estilos do componente Button
├── storage/
│   └── linkStorage.ts: Funções para gerenciar dados no AsyncStorage
├── utils/
│   └── categories.ts: Utilitários e configurações de categorias
└── styles/
    └── indexStyles.ts: Estilos globais da aplicação
```

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
   - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
     ```bash
     node -v
     ```
   - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
   - Copie a URL do repositório e execute o comando abaixo no terminal:
     ```bash
     git clone 
     ```

3. **Navegue até o diretório do projeto**:
   ```bash
   cd RocketLinks
   ```

4. **Instale as dependências**:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

5. **Inicie o servidor de desenvolvimento**:
   ```bash
   npx expo start
   ```

6. **Execute no dispositivo**:
   - **Expo Go**: Escaneie o QR Code com o app Expo Go no seu dispositivo
   - **Emulador Android**: Pressione `a` no terminal
   - **Simulador iOS**: Pressione `i` no terminal (apenas macOS)

## 🌐 Deploy 

### 📱 Gerando APK para Android

1. **Instale o EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Faça login no Expo**:
   ```bash
   eas login
   ```

3. **Configure o projeto**:
   ```bash
   eas build:configure
   ```

4. **Gere o APK**:
   ```bash
   eas build -p android --profile preview
   ```

5. **Para produção (Google Play Store)**:
   ```bash
   eas build -p android --profile production
   ```

### 🍎 Gerando IPA para iOS

1. **Gere o build para iOS**:
   ```bash
   eas build -p ios --profile preview
   ```

2. **Para App Store**:
   ```bash
   eas build -p ios --profile production
   ```

### 📦 Distribuição

- **APK**: Pode ser instalado diretamente em dispositivos Android
- **AAB**: Para submissão na Google Play Store
- **IPA**: Para dispositivos iOS ou App Store
- **Expo Go**: Para testes durante o desenvolvimento

### 🚀 Deploy Automático

Configure GitHub Actions para builds automáticos adicionando o arquivo `.github/workflows/build.yml`:

```yaml
name: Build App
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: eas build --platform android --non-interactive
```