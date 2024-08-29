---
title: Introduction à la sûreté de l'IA
---

Vous êtes ici.

![[Pasted image 20240510200847.png]]
[source de l'image](https://youtu.be/SVmEXdGqO-s?si=8dWdu2TrZELB5zMG&t=425)

Devant vous, le brouillard du futur. Vous apercevez différents sentiers qui vont dans des directions très différentes. Selon quel chemin vous (et un grand nombre d'autres terriens) allez prendre, la destination pourrait changer radicalement.

Dans le futur, l'IA pourrait aider à résoudre une quantité gigantesque de problèmes scientifiques et techniques. Elle pourrait aussi nous isoler toujours plus socialement, jusqu'à ce que la majorité des humains interagisse uniquement avec notre assistant de poche. Elle pourrait déclencher une nouvelle vague de terrorisme, voire de guerre mondiale. Elle pourrait profiter aux plus riches, et accélérer toujours plus les inégalités.

Le but de ce blog n'est pas de vous dire ce qu'il y a derrière le brouillard. Le but, c'est de vous présenter les meilleurs arguments pour en dissiper une partie, pour que vous puissiez prendre les meilleurs décisions.


# Intelligence

L'intelligence, c'est la capacité à résoudre des problèmes. 
- Ce n'est pas spécifiquement humain
- C'est un spectre, qui couvre plein de capacités différentes.

Ce n'est pas forcément ce vous avez en tête quand vous parlez d'intelligence, mais ce n'est pas grave. C'est la définition que j'utiliserai.

# Explosion d'intelligence

Avant toute réflexion sur le futur, il faut bien comprendre où on est aujourd'hui.

Vous sous-estimez probablement les progrès des IA ces dernières années.

En une image:

![[Pasted image 20240510204228.png]]

L'image à droite est en fait une bande annonce de 1 minute, en haute définition, générée automatiquement à partir d'une courte description. [Allez voir](https://openai.com/index/sora/?ref=gptechblog.com) par vous même.

Et ce genre de progrès s'accélère. Que ça soit en compréhension de texte, en stratégie, en programmation ou même en mathématiques, l'IA progresse de manière vertigineuse. Et ces derniers temps, ces progrès s'accélèrent.

Allez voir [[explosion-intelligence]] pour plus de détails.

# Un outil

> L'IA est un outil, elle peut être utilisée en bien comme en mal.

C'est à la fois vrai ... Et très loin de la réalité.

D'abord, la vitesse à laquelle apparaissent ces nouvelles inventions est bien plus importante que la vitesse à laquelle la régulation peut s'adapter. Quand on a inventé l'électricité, il a fallu un siècle pour s'adapter. On a inventé les réseaux sociaux il y a 20 ans, et on commence seulement à comprendre les impacts sur notre cerveau, sur la santé mentale des jeunes et sur la démocratie.

Pour l'IA, cela risque d'être bien pire. C'est une technologie qui peut transformer l'éducation, qui peut automatiser une grande partie des métiers, permettre des armes complètement nouvelles ... Et cela en quelques années. (voir [[regulation]]).

Mais ce n'est pas tout.
L'IA est complètement différente des innovations précédentes. Parce qu'avec assez d'intelligence, on peut tout faire.

Prenons un exemple. Dans la plupart des écoles, les étudiants ont pour objectif d'avoir les meilleures notes possible, tout en travaillant le moins possible. Cet objectif pose déjà problème: les étudiants trichent, bachotent, n'apprennent que ce qui sera au test final ... Mais on s'en sort.
Avec l'IA, c'est différent: la plupart des étudiants peuvent utiliser un outil qui peut répondre à n'importe quelle question, et rédiger à peu près n'importe quoi. Et plus les IA seront intelligentes et accessibles, plus elles permettront de maximiser des objectifs problématiques.

Quelques exemples:
- maximiser le temps que vous passez sur Facebook
- maximiser l'argent d'un milliardaire en trouvant des failles dans le droit fiscal
- maximiser le contrôle militaire d'un pays en trouvant des failles chez son ennemi.


> Le pays qui est en tête dans le domaine de l'IA dirigera le monde.

Ce n'est pas moi qui l'ai dit, c'est Vladimir Poutine.

# Alignement

En fait, le problème est plus subtil, et c'est ça qui fait que la sûreté de l'IA n'est pas seulement un problème de politique publique, mais aussi un domaine de recherche.


Jusqu'à présent, les ingénieurs étaient capable de contrôler les systèmes qu'ils créaient. Il y a des techniques, des outils mathématiques, des savoirs faire qui font qu'un avion ne va probablement pas se s'écraser, ou qu'un robot ne va pas vous foncer dessus.

Mais maintenant, on créée des systèmes qui apprennent, c'est à dire qui deviennent plus intelligents. Ils débloquent des capacités, ils se mettent à identifier comment certaines parties du monde fonctionnent. Allez voir [[danger-optimisation-renforcement]] pour plus de détails.

Et contrôler ce genre de systèmes, on ne sait pas faire. Et la plupart des chercheurs qui se sont penchés sur le sujet sont d'accord: c'est un problème extrêmement difficile.

Comme si ce n'était pas assez compliqué à l'heure actuelle, on n'a aucun moyen de savoir comment fonctionnent les agents qu'on créée. Ce sont des grosses [[black-box|boites noires]] qui apprennent sur des quantités astronomiques de données, et on sait extrêmement peu de chose sur comment elles apprennent.

Pourquoi est-ce si difficile ?

Disons que j'ai un objectif en tête, et je veux que la machine atteigne cet objectif.

Il faut que j'arrive à:
- bien spécifier ce que je veux et ce que je ne veux pas, qu'il n'y ai pas d’ambiguïté
- que personne ne puisse hacker le système pour changer son objectif
- que la machine ne change pas d'objectif en cours de route
- que la machine ne fasse pas des choses dangereuses, comme tuer des gens ou les manipuler, pour atteindre cet objectif

Et la liste de difficultés est en réalité bien plus longue.

C'est ce qu'on appelle le problème de l'[[alignement]]: comment faire en sorte que nos valeurs, nos buts, soient *alignés* avec ceux des machines que l'on créée.

Et tant qu'on ne progresse pas dans ce domaine, on ne saura pas comment contrôler les IA.

# Catastrophe

Historiquement, les premiers à avoir réfléchi aux problèmes de régulation et de contrôle des IA sont des philosophes, et ils sont allés très loin dans la réflexion.

C'est par exemple le cas de [Nick Bostrom](https://fr.wikipedia.org/wiki/Nick_Bostrom), qui a écrit le livre **Superintelligence**, ou encore [Eliezer Yudkowsky](https://fr.wikipedia.org/wiki/Eliezer_Yudkowsky).

En particulier, ils défendent la thèse qu'à un moment dans le futur, l'[[explosion-intelligence]] va atteindre un point de non retour. Une IA deviendra capable d'effectuer des tâches intellectuelles que l'on n'avait pas anticipé: faire de la recherche, comprendre le cerveau humain, concevoir des machines, manipuler n'importe quel homme politique, faire des plans à très long terme ...

Et à ce moment là, si cette IA veut maximiser quelque chose sans se soucier des humains, cela pourrait bien être la fin de l'humanité. Comme un virus impossible à arrêter, mais qui aurait en plus une longueur d'avance sur nous.

Oui, cela ressemble à un scénario de Science-Fiction. Mais ces philosophes ont de très bons arguments pour le défendre. Ils s'annoncent [[catastrophistes]] et fiers de l'être, pour faire en sorte que ce scénario n'arrive jamais.

Aujourd'hui, 50% des chercheurs en IA pensent qu'il y a plus d'une chance sur 10 pour que l'IA cause l'extinction de l'humanité ou dommage similaire ([source](https://aiimpacts.org/wp-content/uploads/2023/04/Thousands_of_AI_authors_on_the_future_of_AI.pdf), page 16).

Je trouve personnellement que leurs arguments sont très convaincants, et qu'on ne peut pas prétendre pouvoir contrôler un système qui apprend plus vite que nous. Vous pouvez aller voir mon [[x-scenario|scénario catastrophe]]

Mais à mon humble avis, il n'est pas nécessaire de penser qu'une technologie peut détruire l'humanité pour se préoccuper de son impact.


# Solutions

Catastrophe planétaire ou pas, les enjeux sont grands.

Heureusement, il y a des choses que l'on peut faire aujourd'hui pour limiter ou même éviter les risques !

Tous les leviers d'actions peuvent être classés en 2 catégories:
- La régulation
- La recherche 

## Réguler

D'un point de vue de la [[regulation]], 


## Rechercher

Il y a 2 domaines de recherches pour assurer que les IA soient plus sûres.
- l'[[interpretability|interprétabilité]]: mieux comprendre comment les IA fonctionnent
- l'[[alignement]]: assurer que les IA suivent des objectifs souhaitables

En France, le gouvernement investit plus de 2 milliards d'euros dans l'IA dans les 5 prochaines années^[1]. Et dans le domaine de l'alignement ... Rien. Le nombre de chercheurs travaillant exclusivement sur ces deux sujets se compte sur les doigts d'une main, et la France est en retard par rapport aux autres pays.

Vu les enjeux, dédier 100 millions d'euros au domaine est complètement envisageable.


[1]: https://www.economie.gouv.fr/strategie-nationale-intelligence-artificielle

## Ralentir

Les IA sont dangereuses, difficiles à réguler, et difficiles à contrôler. Surtout, la vitesse de développement (et l'[[investissement|investissement massif]] ) ne laisse aucune chance aux législateurs de réguler et aux ingénieurs d'assurer la sûreté de leurs systèmes. C'est pour cela qu'une piste est d'instaurer une pause sur le développement des plus gros modèles. Cette initiative s'appelle [[pause-ia]].


# Pour aller plus loin

Si vous voulez continuer votre lecture, vous pouvez voir cet [[historique-IA|petite histoire de l'intelligence artificielle]]

Vous pouvez aussi revenir à la [[index|page principale]]