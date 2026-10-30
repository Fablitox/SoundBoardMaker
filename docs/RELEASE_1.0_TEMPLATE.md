# Soundboard Maker 1.0 — Première version publique

**Soundboard Maker 1.0** est la première version publique du logiciel Windows dédié à l'organisation, l'édition et au déclenchement de sons, avec l'intégration Stream Deck.

## Fonctionnalités

- **Bibliothèque audio** : importation et classement des sons, recherche, dossiers, favoris et pages Soundboard.
- **Éditeur audio intégré** : aperçu de la forme d'onde, sélection, découpe, traitements et sauvegarde des sons dans les formats pris en charge.
- **Lecture indépendante** : plusieurs sons peuvent être déclenchés et contrôlés individuellement.
- **Capture audio et Replay Buffer** : enregistrement de l'audio système et sauvegarde des dernières secondes.
- **Intégration Stream Deck** : actions configurables pour lire un son, enregistrer, mémoriser le dernier son, utiliser le Replay Buffer et arrêter les lectures.
- **Français et anglais**, avec vérification des mises à jour au lancement et sur demande.

## Téléchargements

Téléchargez les **deux fichiers joints à cette release** :

1. **SoundboardMaker-Setup-1.0.0.exe** — Installateur de Soundboard Maker pour Windows.
2. **com.soundboardmaker.streamdeck.streamDeckPlugin** — Plugin à installer dans le logiciel Elgato Stream Deck.

**Important — Plugin Stream Deck :** tant que le plugin Soundboard Maker n'est pas disponible sur **Elgato Marketplace**, il se télécharge **directement depuis les releases de ce dépôt GitHub** et doit être installé **manuellement**. Après avoir installé l'application Elgato Stream Deck, ouvrez le fichier `.streamDeckPlugin` téléchargé et confirmez son installation.

Aucune version ZIP/portable de Soundboard Maker n'est distribuée.

## Installation

1. Téléchargez l'installateur Windows ci-dessus, lancez-le et suivez les instructions.
2. Ouvrez Soundboard Maker et configurez votre bibliothèque de sons.
3. Si vous utilisez Stream Deck, installez séparément le fichier `.streamDeckPlugin` fourni ici.

**Pour diffuser les sons dans votre microphone** (Discord, jeux ou chat vocal) avec le routage pris en charge par Soundboard Maker, **Elgato Wave Link est nécessaire** : choisissez une sortie Wave Link dans Soundboard Maker, dirigez-la vers MicrophoneFX et sélectionnez ce microphone virtuel dans votre application vocale. **Wave Link n'est pas requis pour une simple écoute au casque ou sur des enceintes.**

## Problèmes connus

Consommation CPU : sur certaines configurations, une consommation CPU plus élevée peut être observée lorsque la fenêtre de Soundboard Maker reste affichée. Des investigations complémentaires sont prévues a la suite des retours utilisateurs.

## Liens utiles

- **Site officiel :** https://sbmaker.fablitox.fr/
- **Guide d'installation :** https://github.com/Fablitox/SoundBoardMaker/blob/main/docs/INSTALLATION.md
- **Signaler un problème :** https://github.com/Fablitox/SoundBoardMaker/issues

