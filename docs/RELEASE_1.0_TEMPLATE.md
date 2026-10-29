# Soundboard Maker 1.0

Première version publique de Soundboard Maker pour Windows 11.

## Fonctionnalités

- Bibliothèque audio : dossiers, recherche, favoris et pages.
- Lecture et contrôle de plusieurs sons indépendants.
- Éditeur audio avec aperçu, découpe et sauvegarde.
- Enregistrement de l'audio système et Replay Buffer.
- Intégration Stream Deck et actions configurables.
- Interface française et anglaise.
- Vérification des mises à jour au démarrage et sur demande.

## Téléchargements

- **SoundboardMaker-Setup-1.0.0.exe** — Installateur Windows 11 64 bits.
- **com.soundboardmaker.streamdeck.streamDeckPlugin** — Plugin Stream Deck, installation manuelle tant que la publication Elgato n'est pas disponible.

> Remplacer ces noms par les noms EXACTS des artefacts réellement validés avant publication. Ne pas inclure de ZIP portable.

## Installation

1. Télécharger l'installateur Windows.
2. Exécuter le fichier .exe et suivre les instructions.
3. Installer, si nécessaire, le plugin .streamDeckPlugin avec le logiciel Elgato Stream Deck.

## Configuration audio microphone

**Wave Link est requis pour diffuser les sons de Soundboard Maker dans une entrée microphone virtuelle** (Discord, jeux et chat vocal) via le routage pris en charge. Configurez un canal de sortie Wave Link vers MicrophoneFX, puis sélectionnez Wave Link MicrophoneFX comme micro dans l'application vocale. **Wave Link n'est pas nécessaire pour écouter les sons normalement.** Voir [Installation](INSTALLATION.md#diffuser-des-sons-dans-son-microphone).

## Problèmes connus

Consommation CPU : sur certaines configurations, une consommation CPU plus élevée peut être observée lorsque la fenêtre de Soundboard Maker reste affichée. Des investigations complémentaires sont prévues a la suite des retours utilisateurs.

## Vérifications avant publication (ne pas laisser dans la release)

- [ ] Version application et version plugin vérifiées sur les fichiers finaux.
- [ ] Installation propre et mise à jour validées.
- [ ] Aucune donnée personnelle, jeton, source ou profil privé dans les deux artefacts.
- [ ] Empreintes SHA-256 calculées et conservées.
- [ ] Aucun ZIP portable ajouté.
- [ ] Recherche de mise à jour dirigée vers Fablitox/SoundBoardMaker.
- [ ] Test de découverte de la vraie release publique, sans jeton personnel.
- [ ] Le texte de ces notes reflète les fonctions et limites réellement validées.
