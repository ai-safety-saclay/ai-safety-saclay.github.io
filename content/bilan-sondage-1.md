---
tags: proj
title: "Bilan d'une expérience de sondages à Télécom Paris"
---

Site du projet: https://github.com/ai-safety-saclay/survey

# Introduction

Je suis étudiant à Télécom Paris.

Télécom Paris, la "première école du numérique". Télécom Paris, qui "[innove de manière responsable](https://www.telecom-paris.fr/fr/ecole/bref/raison-etre)"

Et en effet, on y parle régulièrement d'impact environnemental, de protection des données, de legislation et d'open-source. Mais je n'ai jamais entendu parler d'[[intro-sûreté-ia|AI Safety]] dans le cadre de l'école. Et d'après moi, c'est un sujet absolument fondamental pour comprendre l'impact futur de l'IA sur le monde. Et j'ai l'impression que les étudiants ne sont pas du tout confrontés à ce sujet, et qu'ils sont globalement techno-optimistes.

Avec [pause-ia](https://pauseia.fr/), j'ai eu l'occasion de discuter des risques des IA avec des gens dans la rue. Cette fois, j'ai fait le constat inverse: les gens sont beaucoup plus inquiets que ce que je pensais.

Les étudiants sont-ils optimistes ou pessimistes à propos de l'IA ? Dans quelle mesure les étudiants maîtrisent-ils ce sujet ? Ont-ils une bonne compréhension de l'état de la recherche sur les modèles de langage ?

Pour répondre à ces questions, j'ai fait passer un sondage.

Ce sondage avait 2 principaux objectifs:
- Faire émerger le sujet chez les étudiants, donner de la visibilité à ce thème de recherche qui n'est pas assez abordé
- Savoir ce dont les étudiants sont au courants et leurs opinions sur différentes questions pour adapter la stratégie de sensibilisation.


# Aspects pratiques

Avec quelques camarades, j'ai préparé les questions, et imprimé des bulletins de réponse.
Puis, nous avons profité d'une séance de travaux pratiques pour expliquer le but du sondage aux étudiants, et distribuer les bulletins.

Le questionnaire est accessible via le lien suivant:

<https://typst.app/project/refmECks0gcTRQw3PyghPW>


Une fois toutes les réponses récupérées, je les ai compilées dans un tableur, avant d'analyser les résultats.

# Résultats

Au total, nous avons eu 81 réponses, dont une partie d'étudiants internationaux.

Les résultats sont disponibles ici: https://ai-safety-saclay.github.io/survey/

Vous pouvez aussi accéder directement au [fichier tableur](https://github.com/ai-safety-saclay/survey/tree/main/results)

Dans une démarche scientifique, j'ai essayé de prédire les résultats à l'avance, pour voir les réponses qui me surprennent.

# Bilan

Voici les réponses qui m'ont le plus surpris:
- le [[RLHF]]: je pensais que 40% des étudiants connaissent le principe, mais en réalité seulement 10%
- pour la timeline d'**openAI**, les étudiants ont bien estimé le temps que l'entreprise se donne pour atteindre la superintelligence (4 ans). J'aurais parié sur plus de "10 ans".
- les réponses pour "à quel point vous êtes inquiets pour le risque X" ont énormément de variabilité
- la quasi-totalité des étudiants utilisent chatGPT
- les étudiants pensent globalement qu'il n'est pas nécessaire de ralentir la création de nouveaux modèles (71% de "pas besoin")

En résumé:
1) Les étudiants ont une assez bonne idée des capacités des modèles actuels
2) Ils ont très peu de connaissance sur le domaine de la safety, d'un point de vue technique. Pourtant, ils semblent être intéressés.
3) Ils sous-estiment à quel point les experts sont inquiets
4) Beaucoup de variabilité dans les réponses, surtout pour les risques perçus.

# Leçons

(vous pouvez passer cette partie si vous n'êtes pas intéressés par la création de sondages)

Ce projet était une nouvelle expérience pour moi, et j'en ai tiré plusieurs leçons intéressantes:
- faire un sondage, c'est super fun
- faire un bon sondage, c'est difficile
   - il faut un compromis entre réponses précises, surprenantes, sujettes à interprétation ... 
   - la formulation des questions influe beaucoup sur les réponses
   - pour estimer la probabilité que quelqu'un accorde à un événement, choisir l'échelle est un compromis difficile
- faire relire son questionnaire le plus de fois possible. À la fois à des experts et à des néophytes
- toujours surestimer la variance des réponses: mettre des réponses plus extrêmes
- la partie commentaires est super importante, surtout pour améliorer la prochaine version du questionnaire
- Il faut réussir à se mettre à la place de quelqu'un qui ne connait pas du tout le sujet. Il peut tout simplement ne pas comprendre les questions
- le format papier marche très bien, rentrer les réponses dans un tableur n'est pas très long

Le questionnaire peut grandement être amélioré. Si c'était à refaire, je prendrais différentes choses en considération:
- capter l'attention avant d'expliquer le projet
- je donnerais les réponses immédiatement après le questionnaire pour marquer plus les gens
- préciser que le sondage est recto-verso
- les questions sur l'identité (sexe, nationalité, filière) sont super utiles pour l'analyse, une partie (même optionnelle) dessus est intéressante
- rajouter une case "aucune des propositions précédentes" si il est possible de ne rien mettre. Aussi, transformer les questions binaires comme "Seriez-vous capable d'expliquer le RLHF" en questions ternaires "Je serais capable de l'expliquer", "J'ai juste entendu parler", "je n'ai jamais entendu parler".

# Rebondissements

En présentant mes résultats, quelqu'un m'a répondu avec ce message:

![[reaction-survey.png]]

Et en effet, mon sondage se concentrait sur des aspects très spécifiques des IA (concepts en sécurité des IA, risques existentiels, automatisation ...) mais assez peu sur leur utilisation et sur les plateformes.


Voici comment je vois la situation: il y a un spectre des problèmes liés à l'IA, entre "le problème est là et les gens en ont conscience" et "le problème est très hypothétique".
Les quelques groupes qui veulent améliorer les choses sont d'un côté ou de l'autre. 
Le groupe "A" (comme Actuel), qui défendent que l'IA utilisée dans les réseaux sociaux fragilise les démocraties, a un impact environmental, pose des questions de droits d'auteurs et de souffrance psychologique.
Le groupe "X" (comme eXistential risks), qui défendent qu'on va un jour créer un système d'IA qui pourraiat d'une manière ou d'une autre détruire l'humanité.

![[bilan-sondage-1 2024-06-08 23.53.55.excalidraw.svg]]
%%[[bilan-sondage-1 2024-06-08 23.53.55.excalidraw.md|🖋 Edit in Excalidraw]]%%

Pourquoi cela cause-t'il problème ?

Les problèmes de régulation de l'IA vont apparaître de plus en plus sur la scène politique. S'il y a deux messages différents sur quels sont les risques les plus préoccupants, cela va créer de la confusion. Chez les citoyens, chez les politiques ...

Cela risque aussi de réduire l'énergie et la force de frappe de ceux qui veulent améliorer les choses: on se bat contre des entreprises du numérique qui contrôlent l'attention, qui font du lobbying et qui financent une grande partie de la recherche: c'est important de pouvoir mettre en commun nos efforts.


# Version 2

Dans le futur, je compte faire passer ce sondage à plus d'étudiants, pour continuer à faire émerger le débat et voir s'il y a des différences entre écoles.

Je ferais en sorte d'inclure moins de questions sur la partie "X" et plus sur la partie "A".


Si vous voulez aider dans ce projet, contactez moi [ici](contact)

# Autre projet

J'aimerais bien tester mon hypothèse de groupes "A" et groupe "X". Je me demande comment je pourrais faire ça ... Avec un sondage ?

Une idée serait de choisir une liste d'affirmations type:
- Il faut plus réguler
- Il faut financer la recherche sur la sécurité
- Le rapport sur l’IA est bof
- l’IA va rendre la legislation plus compliquée dans tous les domaines
- le risque d'une IA qui prend le contrôle est minime à l'heure actuelle
- la chose la plus urgente aujourd’hui c’est changer les médias sociaux
- les LLM sont sur-représentés dans le débat public

Et demander pour chacune à quel point le sondé est d'accord.


Cela permettrait ensuite de faire une analyse par composante principale pour voir si l'on peut identifier différents groupes.