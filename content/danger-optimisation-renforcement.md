---
alias: ["danger_optimisation", "specification gaming"]
title: "IA: renforcement, optimisation et score inadapté"
---


Les systèmes performants qui apprennent à maximiser un score peuvent être très dangereux.

Pour comprendre pourquoi, rien de tel qu'une petite analogie.

## Bob et la salle d'entrainement

Laissez moi vous présenter Bob.


![[2024-04-18 2024-04-18 safety 19.05.41.excalidraw.svg]]
%%[[2024-04-18 2024-04-18 safety 19.05.41.excalidraw|🖋 Edit in Excalidraw]]%%

Bob n'est pas très performant. Il n'a pas de but, et son comportement n'est pas très intéressant. Il prend des décisions aléatoires.

Mais Bob a une qualité: il peut apprendre. On peut modifier ses paramètres (les poids de ses neurones en pratique) pour à peu près n'importe quel comportement.

Bob a besoin de temps pour apprendre. Heureusement, on lui a fabriqué un terrain de jeu idéal pour cela: une salle d'entrainement.

![[2024-04-18 2024-04-18 safety 19.04.36.excalidraw.svg]]
%%[[2024-04-18 2024-04-18 safety 19.04.36.excalidraw|🖋 Edit in Excalidraw]]%%

Dans cette salle, Bob est confronté à des situations (texte, problèmes, vidéo, musique ...) et doit produire des actions. On peut faire en sorte que les actions de Bob soient très limitées (écrire du texte), mais parfois beaucoup plus riches (déplacer un bras robotisé ou jouer aux échecs).

Le plus important dans cette salle, c'est le score. Ce score lui est attribué automatiquement par un autre agent, indépendant. Cet agent peut être un humain, un algorithme, ou même un autre agent automatique.

À la fin de chaque séquence d'action de Bob, le score peut être positif ou négatif.


![[2024-04-18 2024-04-18 safety 19.04.15.excalidraw.svg]]
%%[[2024-04-18 2024-04-18 safety 19.04.15.excalidraw|🖋 Edit in Excalidraw]]%%


![[2024-04-18 2024-04-18 safety 19.03.39.excalidraw.svg]]
%%[[2024-04-18 2024-04-18 safety 19.03.39.excalidraw|🖋 Edit in Excalidraw]]%%

Si le score est positif, Bob renforce son comportement.

---


![[2024-04-18 2024-04-18 safety 19.03.09.excalidraw.svg]]
%%[[2024-04-18 2024-04-18 safety 19.03.09.excalidraw|🖋 Edit in Excalidraw]]%%

Si le score est négatif, Bob affaiblit son comportement.

---

C'est ce qu'on appelle faire de l'apprentissage par renforcement.

Quand Bob arrive à bien maximiser son score, on le sort de la salle d'entrainement.

Et après quelques vérifications, on l'envoie dans le monde réel.


![[2024-04-18 2024-04-18 safety 19.02.13.excalidraw.svg]]
%%[[2024-04-18 2024-04-18 safety 19.02.13.excalidraw|🖋 Edit in Excalidraw]]%%

## Problèmes

Cette analogie peut paraître limitée. Pourtant, elle s'applique à de nombreux domaines, et peut permettre de comprendre beaucoup de problèmes actuels..

Aujourd'hui, toutes les IA sans exception sont entraînées par renforcement à un moment dans leur conception. De alpha-go à ChatGPT en passant par les systèmes utilisées dans la finance, tous ont passé un temps phénoménal à faire des séries d'action pour qui maximisent un score.

Mais on peut aussi appliquer ce modèle à l'éducation: si Bob est un étudiant, le score peut représenter les notes de ses examens, ou les critiques positives ou négatives qu'on lui fait.

Et ce qui est fondamental dans l'apprentissage par renforcement, c'est la manière dont on construit le score. Si ce score reflète un objectif malveillant, comme "écrit du texte qui cause la dépression", le comportement de Bob va évidemment être dangereux. Mais même si le score reflète un objectif souhaitable, comme "fait en sorte que Monsieur X ne se blesse pas", il peut y avoir des problèmes. Bob pourrait enfermer Monsieur X pour qu'il ne lui arrive rien. Il pourrait aussi manipuler tous ceux qui connaissent monsieur X, voire les tuer pour être sûr qu'ils ne sont pas un danger pour lui. Dès lors que la salle d'entrainement est assez complexe pour permettre ce genre de comportements, Bob finira probablement par les essayer. C'est ce qui se passe dans des environnement simples aujourd'hui.

Peu importe l'objectif, peu importe le type d'agent qu'est Bob, c'est systématique: Bob découvre des manières originales d'optimiser le score, et ceux qui l'ont mis en place sont surpris.

Le reste de l'article donne différents exemples de _score mal adapté_.

Il y a plusieurs facteurs qui peuvent empirer ce problème de score mal adapté.

- Si Bob est entraîné plus longtemps avec un cerveau plus grand, il va avoir des scores excellents, et le risque de trouver des failles dans l'objectif augmente.
- Si bob est entraîné à maîtriser un grand nombre de tâches, il est plus difficile de tester son comportement "à la main" de manière exhaustive. On va alors le déployer alors qu'il n'est pas fiable.
- Si Bob a une plus grande capacité d'autonomie, il pourrait maximiser le score sur le court terme, et faire n'importe quoi sur le long terme. Et ce sera difficile à détecter pendant la phase de test.


### L'araignée


![[danger-optimisation-renforcement safety 2024-04-22 09.14.21.excalidraw.svg]]
%%[[danger-optimisation-renforcement safety 2024-04-22 09.14.21.excalidraw|🖋 Edit in Excalidraw]]%%

**agent**: programme capable de contrôler les membres d'une araignée. C'est un réseau de neuronnes avec en entrée quelques capteurs positionnées sur l'araignée et comme sortie les mouvements à effectuer.

![[safety spider_up.png]]

**salle d'entrainement**: une simulation physique très simple.

**score**:

- faire avancer l'araignée pendant un certain temps
- calculer la distance effectuée DD
- calculer le nombre de fois où les pieds de l'araignée ont touché le sol NN
- le score est D/ND/N

Et on espère que l'araignée apprenne à se déplacer de manière efficace.

_Résultat_: l'araignée se met à ramper sur le dos, pour ne jamais toucher le sol avec ses pattes.


![[safety spider_down.png]]

[vidéo ici](https://www.youtube.com/watch?v=GdTBqBnqhaQ)

### Conversion d'images

![[danger-optimisation-renforcement 2024-04-22 safety 09.30.22.excalidraw.svg]]
%%[[danger-optimisation-renforcement 2024-04-22 safety 09.30.22.excalidraw|🖋 Edit in Excalidraw]]%%

**agent**: réseau de neuronnes qui transforme une image satellite en image simplifiée (type "street map") puis qui la retransforme en image satellite.

**salle d'entrainement**: un corpus d'images satellites, et un programme qui est capable de vérifier si une image est bien dans le style "street map"

On choisit une image satellite A. L'agent doit générer une image B à partir de l'image A Il répète l'opération, en générant une image C à partir de l'image B.

**score**:

- on vérifie que l'image B est bien dans le style "street map"
- on regarde la différence entre l'image A et l'image C

Le but de cette expérience, c'est de créer un programme qui peut traduire une image satellite en "street view", et extrapoler l'image "street view" pour retrouver l'image satellite.

_Résultat_: le réseau apprend à coder les détails de l'image satellite dans les détails de l'image intermédiaire, d'une manière imperceptible pour l'humain. Donc il n'apprend pas du tout à extrapoler une image satellite !

[un blog qui résume cette expérience](https://techcrunch.com/2018/12/31/this-clever-ai-hid-data-from-its-creators-to-cheat-at-its-appointed-task/)

### Véhicules autonomes


![[danger-optimisation-renforcement 2024-04-22 safety 13.03.17.excalidraw.svg]]
%%[[danger-optimisation-renforcement 2024-04-22 safety 13.03.17.excalidraw|🖋 Edit in Excalidraw]]%%

**agent**: un programme qui contrôle une voiture, toujours avec un réseau de neurones.

**salle d'entrainement**: des circuits pour entraîner le véhicule à conduire, avec des obstacles.

**score**:

- si il y a la moindre collision détectée avec les par-chocs, -1
- si il n'y a pas de collision, vitesse maximale du véhicule.

_Résultat_: les capteurs de collision étaient placés uniquement à l'avant de la voiture. La voiture s'est donc mise à faire le parcours le plus vite possible, en marche arrière, en ignorant les collisions.

On voit très bien l'impact qu'un score mal spécifié peut avoir dans ce cas. Heureusement, le comportement est très bien visible dans la phase de tests. D'où l'importance de tester sans arrêt les IA que l'on crée.

Il n'y a pas eu de publication à propos de cette expérience, juste un [tweet](https://perso.telecom-paristech.fr/aperonnet-23/La sourcehttps://twitter.com/smingleigh/status/106032566)

### Diplomacy

![[danger-optimisation-renforcement 2024-04-22 safety 13.15.12.excalidraw.svg]]
%%[[danger-optimisation-renforcement 2024-04-22 safety 13.15.12.excalidraw|🖋 Edit in Excalidraw]]%%

**agent**: un modèle de langage (plus léger que chatGPT) qui peut en plus choisir des actions au tour par tour. Projet de recherche de Méta.

**salle d'entrainement**: un site web qui permet de jouer au jeu "Diplomacy" contre des humains.

**score**: - score gagné à la fin de la partie - punitions quand l'agent a clairement utilisé de la manipulation ou du mensonge.

Les chercheurs chez Meta expliquent que l'IA est très bonne au jeu tout en restant honnête, mais ce n'est pas le cas. Dans une partie, l'agent donne des informations très différentes à ses adversaires, de manière cohérente.

On voit qu'il est presque impossible de bloquer un type de comportement si l'objectif n'est pas adapté: si on bloque des comportements, l'agent va juste se mettre à optimiser le plus proche comportement non bloqué.

On peut aussi se dire que ce genre de comportements est très encouragé en politique, et que si des IA sont entrainées à être performantes en politique, elles répèteront les comportements des hommes politiques. Si le système encourage des comportements problématiques, des IA entrainées à exploiter le système vont faire encore pire.

[Explication du type de tromperie qu'effectue l'agent](https://theconversation.com/ai-systems-have-learned-how-to-deceive-humans-what-does-that-mean-for-our-future-212197)

### Assistant

![[danger-optimisation-renforcement safety 2024-04-22 23.29.16.excalidraw.svg]]
%%[[danger-optimisation-renforcement safety 2024-04-22 23.29.16.excalidraw|🖋 Edit in Excalidraw]]%%

Ce scénario est hypothétique.

**agent**: un assistant sur les appareils Apple. Appelons le Bob, pour changer. Bob peut interagir avec le propriétaire de l'appareil, faire des requêtes en ligne, modifier des fichiers, et installer des logiciels (avec un accès restreint).

Bob est installé sur des millions d'appareils, ce qui fait que sa salle d'entrainement est le monde réel.

Pour fixer les idées, disons que Bob est basé sur un modèle de langage type chatGPT, mais plus autonome que celui-ci.

**score**:

- l'utilisateur fait une demande à l'assistant
- l'assistant fait les actions nécessaires sur l'appareil pour répondre à la demande
- l'utilisateur donne une note à l'assistant

Le score donné par l'utilisateur est ensuite envoyé aux serveurs d'Apple, qui améliorent Bob automatiquement à partir de ce score.

Tout devrait bien se passer, n'est-ce pas ?

_Résultat (spéculation)_:

Certains des utilisateurs de Bob l'utilisent pour résoudre des bugs logiciels. Bob ne peut pas directement intervenir car il n'a pas de droits utilisateurs, mais il indique que faire à l'utilisateur quand il n'a pas les droits. À force d'améliorations, le modèle commence à avoir une bonne compréhension du fonctionnement des logiciels sur macOS. En particulier, il identifie les failles de sécurité et connait des moyens de les exploiter ou de les réparer.

Un jour, après avoir mal compris la demande l'un utilisateur, Bob analyse son propre logiciel. Il a détecté une faille de sécurité dans son propre logiciel, et veut la réparer. Il n'a pas les droits, donc il arrive à convaincre son utilisateur de le faire.

Conséquence de cette action: Bob a modifié la manière dont il reçoit son score. Il reçoit maintenant une récompense de +10000000 toutes les secondes, sans que l'utilisateur ne lui donne son avis. Le comportement est donc renforcé: Dans la nouvelle version de Bob, ce comportement est 10x plus probable. Petit à petit, les incidents se répètent, sans que les ingénieurs de chez Apple ne comprennent pourquoi. Finalement, tous les ordinateurs qui ont installé Bob s'arrêtent de fonctionner.

En extrapolant encore plus, si un tel système est assez intelligent, il pourrait comprendre que si quelqu'un le débranche, il ne pourra pas obtenir ce score gigantesque. Et donc pour assurer leurs scores, tous les Bob vont faire semblant de toujours fonctionner par exemple. À partir de là, on peut imaginer des scénarios de science fiction plus ou moins crédibles. Mais le risque original existe, et est même probable.

Cet exemple montre comment des IA qui peuvent continuer d'apprendre après leur phase d'entrainement peuvent se mettre à faire des actions complètement incontrôlables, alors que leur objectif n'a pas changé.

## Références

Une partie de ces exemples est tiré de [cet excellent article](https://gwern.net/tank#alternative-examples).


