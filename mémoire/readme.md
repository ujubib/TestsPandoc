## Un fichier markdown `Mémoire-1ere-Partie.md`

### Bloc YAML et début du markdown

```markdown
---
toc-title: Table des matières
title: "L’écriture de «\ l'analphabétisme\ » dans le récit autobiobraphique _l'analphabète_ d'Agota Kristof\ :"
subtitle: "Une expression d'un exil"
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

- Bibliographie : `Mémoire.json` (export d'une collection *Zotero*)
- Style *CSL* : `transversalites-Braud.csl` 
- Templates *HTML*, à choisir pour la commande *Pandoc* :
  - `templateTOC-Notes-Biblio_CSS-JS.html` qui inclue le code *CSS* et pointe vers `data/script.js`
  - `template.html` qui pointe vers (et nécessite) :
    - `data/style.css` pour le style *CSS*
  - les deux templates pointent vers `data/script.js` pour le script (*jquery*) de mise en surbrillance dans la table des matières de la section en cours de lecture.

## Commande Pandoc

```
pandoc -o Mémoire-1ere-Partie.html -s --toc --toc-depth=5 --template=data/templateTOC-Notes-Biblio_CSS-JS.html -C --bibliography=data/Mémoire.json --csl=data/transversalites-Braud.csl --metadata link-citations=true --metadata notes-after-punctuation=false -V lang=fr-FR Mémoire-1ere-Partie.md
```                

## Dans le *HTML*

- Import de ==jquery==

  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  ```

- Ajout de ==hypothes.is==
  
  ```html
  <script async src="https://hypothes.is/embed.js"></script>
  ```

- Ajout du *polyfill* `paged.js`
  - Local 
    
    ```html
    <script src="data/paged.polyfill.js"></script>
    ```
  
  - Distant
    
    ```html
    <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>
    ```
