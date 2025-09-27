---
title: "Adicionando suporte a AGENTS.md no Claude Code"
description: "Como adicionar suporte para arquivos AGENTS.md no Claude Code para equipes de ferramentas híbridas"
date: 2025-09-22
category: "Desenvolvimento"
author: "Coders.ia.br"
tags: ["claude", "agents", "desenvolvimento", "ferramentas"]
---

# Adicionando suporte a AGENTS.md no Claude Code

Embora a Anthropic não tenha liberado suporte para AGENTS.md no Claude Code (se eles forem), desenvolvedores em equipes de ferramentas híbridas precisam contornar as convenções de nomenclatura para cada ferramenta.

(Se você não sabe sobre AGENTS.md, dê uma olhada em https://agents.md/)

Para mim, a maneira mais direta de adicionar suporte foi simplesmente usando um hook do Claude Code.

Você pode simplesmente usar um symlink assim: `ln -s AGENTS.md CLAUDE.md`, mas fazer isso em vários projetos pode ficar bem tedioso.

Outra boa opção é criar um Hook global que verifica se o projeto ou o monorepo tem um AGENTS.md e carrega junto com o CLAUDE.md.

Hooks podem parecer assustadores no início, mas não são tão assustadores assim quando você consegue fazê-los funcionar.

Um hook é basicamente um Evento no fluxo REPL do Claude Code. Para isso, usaremos o hook UserPromptSubmit, então toda vez que você inicializar uma sessão, o Claude lê o AGENTS.md se ele existir.

Matcher *

---
