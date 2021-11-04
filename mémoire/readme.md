## YAML et début du markdown

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

## commande pandoc

```
pandoc -o Mémoire.html -s --toc --toc-depth=5 --template=data/templateTOC-Notes-Biblio_CSS-JS.html -C --bibliography=data/Mémoire.json --csl=data/transversalites-Braud.csl --metadata link-citations=true --metadata notes-after-punctuation=false -V lang=fr-FR Mémoire-1ere-Partie.md
```                
