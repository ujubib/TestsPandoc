## Bloc YAML et début du markdown

```markdown
---
toc-title: Table des matières
title: "L’écriture de « l'analphabétisme » dans le récit autobiobraphique _l'analphabète_ d'Agota Kristof\ :"
subtitle: Une expression d'un exil
author: Djéban Landry KOFFI
date: 24 mai 2021

---

::: {.pave}
Mémoire de Master  
Sous la direction de : **Michel Braud**  

UPPA - Département de Lettres  
Laboratoire ALTER  
:::


### Introduction


```

## Un dossier `/data`

- bibliographie : `Mémoire.json` (export d'une collection Zotero)
- style CSL : `transversalites-Braud.csl` 
- Templates `HTML` :
  - `templateTOC-Notes-Biblio_CSS-JS.html` qui inclue le code CSS et javascript (jquery)
  - `template.html` qui pointe vers :
    - `data/script.js` pour le script (jquery) de mise en surbrillance dans la table des matières de la section en cours de lecture 
    - `data/style.css` pour le style CSS


## Commande Pandoc

```
pandoc -o Mémoire-1ere-Partie.html -s --toc --toc-depth=5 --template=data/templateTOC-Notes-Biblio_CSS-JS.html -C --bibliography=data/Mémoire.json --csl=data/transversalites-Braud.csl --metadata link-citations=true --metadata notes-after-punctuation=false -V lang=fr-FR Mémoire-1ere-Partie.md
```                
