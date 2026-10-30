> **Documentation transférée dans le Wiki / Documentation moved to the Wiki.** Consultez la version à jour / Read the current guide: [Français](https://github.com/Fablitox/SoundBoardMaker/wiki/Installation-FR) · [English](https://github.com/Fablitox/SoundBoardMaker/wiki/Installation-EN).
>
> Cette copie est conservée pour les anciens liens. / This copy is retained for existing links.

# Installation de Soundboard Maker

> **Version 1.0 en préparation.** Les liens de téléchargement seront ajoutés lors de la première release publique.

## Configuration

- Windows 11 64 bits.
- Une sortie audio fonctionnelle pour la lecture et les captures concernées.
- Pour l'intégration : logiciel Elgato Stream Deck et plugin Soundboard Maker.
- **Pour diffuser les sons dans le microphone virtuel d'un jeu ou de Discord : Elgato Wave Link est requis pour le routage pris en charge par Soundboard Maker.** La lecture normale au casque ou sur les enceintes n'en a pas besoin.

## Installer le logiciel

1. Ouvrez la page [Releases](https://github.com/Fablitox/SoundBoardMaker/releases).
2. Sélectionnez la version stable publiée et téléchargez **l'installateur Windows (.exe)**.
3. Vérifiez le nom du fichier, sa version et, lorsqu'elle est fournie, son empreinte SHA-256.
4. Lancez l'installateur et suivez les instructions.
5. Ouvrez Soundboard Maker et configurez votre bibliothèque audio.

Aucune distribution ZIP/portable n'est prévue.

## Installer le plugin Stream Deck

Tant que l'intégration n'est pas publiée sur Elgato Marketplace :

1. Installez le logiciel officiel **Elgato Stream Deck**.
2. Depuis la même release Soundboard Maker, téléchargez le fichier **.streamDeckPlugin**.
3. Ouvrez ce fichier avec Stream Deck et confirmez l'installation du plugin.
4. Vérifiez que Soundboard Maker est lancé et que les actions du plugin sont disponibles.

Le plugin possède sa propre version, qui peut différer de celle de l'application.

## Diffuser des sons dans son microphone

**Wave Link est nécessaire pour diffuser les sons de Soundboard Maker comme entrée microphone dans la configuration prise en charge.** Sans ce routage, Soundboard Maker peut lire ses sons sur une sortie Windows, mais ne crée pas automatiquement de microphone virtuel que Discord ou un jeu peut sélectionner.

1. Installez et ouvrez **Elgato Wave Link**.
2. Dans Wave Link, configurez un canal pour les effets sonores (par exemple **SFX**) ou une sortie virtuelle adaptée à votre version.
3. Dans Soundboard Maker, choisissez comme **périphérique de sortie** le canal Wave Link correspondant, afin que les sons y soient envoyés.
4. Dans Wave Link, dirigez ce canal vers **MicrophoneFX** (option « Route to MicrophoneFX » lorsqu'elle est disponible) ou le mix microphone équivalent selon votre version.
5. Dans Discord ou le jeu, choisissez **Wave Link MicrophoneFX** comme périphérique d'entrée microphone, puis testez le résultat.

L'installation et les noms exacts des canaux peuvent varier selon la version de Wave Link. Voir le [guide officiel Elgato sur les soundboards et MicrophoneFX](https://help.elgato.com/hc/en-us/articles/13836129008269-Elgato-Wave-Link-How-to-use-a-Soundboard-with-MicrophoneFX).

> **À retenir :** Wave Link est requis pour **la diffusion dans l'entrée microphone** décrite ici, mais pas pour lire les sons localement sur un casque ou des haut-parleurs.

## Mettre à jour

Soundboard Maker recherche les nouvelles releases au lancement et permet également un contrôle manuel dans l'application. Une nouvelle version disponible est signalée ; le téléchargement et l'installation restent des actions de l'utilisateur.

Avant une mise à jour, terminez les éditions ou captures en cours. Vérifiez que les paramètres, bibliothèques et associations sont conservés après installation. Consultez les notes de version pour les éventuelles consignes spécifiques.

## En cas de problème

Consultez la [FAQ](FAQ.md) puis les [consignes d'assistance](SUPPORT.md). Ne publiez jamais vos sons privés ou un jeton GitHub dans une issue.
