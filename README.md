# To-Do List App 📝

Uma aplicação simples e elegante para gerenciar suas tarefas diárias com armazenamento local.

## ✨ Funcionalidades

- ✅ **Adicionar Tarefas** - Crie novas tarefas facilmente
- ✓ **Marcar como Concluída** - Acompanhe seu progresso
- 🗑️ **Deletar Tarefas** - Remova tarefas individuais
- 🔍 **Filtrar Tarefas** - Visualize todas, ativas ou concluídas
- 💾 **Armazenamento Local** - Suas tarefas são salvas automaticamente no navegador
- 📊 **Estatísticas** - Veja o total, ativas e concluídas em tempo real
- 📱 **Responsivo** - Funciona perfeitamente em dispositivos móveis
- 🌈 **Design Moderno** - Interface limpa e intuitiva

## 🚀 Como Usar

### 1. Abra a Aplicação
Simplemente abra o arquivo `index.html` em seu navegador.

### 2. Adicionar Tarefas
- Digite sua tarefa no campo de entrada
- Clique em "+ Adicionar" ou pressione Enter
- A tarefa será adicionada ao topo da lista

### 3. Gerenciar Tarefas
- **Marcar como Concluída**: Clique no checkbox
- **Deletar**: Clique no botão "Deletar"
- **Filtrar**: Use os botões "Todas", "Ativas", "Concluídas"

### 4. Limpeza
- **Limpar Concluídas**: Remove apenas tarefas marcadas como concluídas
- **Limpar Tudo**: Remove todas as tarefas (cuidado!)

## 💾 Armazenamento Local

Todas as suas tarefas são automaticamente salvas no `localStorage` do seu navegador. Isso significa que:
- ✅ As tarefas persistem após fechar o navegador
- ✅ Cada dispositivo/navegador tem sua própria lista
- ✅ Nenhum dado é enviado para servidores

## 🎨 Personalização

Você pode facilmente customizar a aplicação editando o arquivo `styles.css`:

```css
:root {
  --primary: #3b82f6;        /* Cor Primária */
  --secondary: #10b981;      /* Cor Secundária */
  --danger: #ef4444;         /* Cor de Perigo */
  --bg: #f9fafb;             /* Background */
  /* ... outras variáveis */
}
```

## 📋 Requisitos

- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado

## 🔒 Segurança

- As tarefas são escapadas para prevenir XSS
- Limite de 200 caracteres por tarefa
- Sem requisições externas (exceto CDN de fontes)

## 📦 Estrutura de Arquivos

```
.
├── index.html       # Estrutura HTML
├── styles.css       # Estilos CSS
├── script.js        # Lógica JavaScript
└── README.md        # Este arquivo
```

## 🌟 Dicas

- Use Enter para adicionar tarefas rapidamente
- Organize suas tarefas de cima para baixo (mais importantes primeiro)
- Marque tarefas como concluídas para acompanhar seu progresso
- Limpe as concluídas periodicamente para manter a lista organizada

## 📱 Suporte

Esta aplicação funciona em:
- 💻 Desktop (Windows, Mac, Linux)
- 📱 Dispositivos Móveis (iOS, Android)
- 🖥️ Tablets

## 📄 Licença

Livre para uso pessoal e comercial.

---

**Desenvolvido com ❤️ para ajudar você a ser mais produtivo!**