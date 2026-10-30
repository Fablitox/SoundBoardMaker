# Contrôles avant publication — Soundboard Maker 1.0

Cette checklist est **interne à la préparation** : elle n'est pas destinée à être collée dans les notes de release.

- [ ] Confirmer la version définitive de l'application et celle du plugin dans les fichiers finaux.
- [ ] Vérifier que le fichier d'installation porte bien le nom mentionné dans les notes de version.
- [ ] Confirmer que la release contient **uniquement l'installateur .exe et le fichier .streamDeckPlugin** en fichiers ajoutés (aucun ZIP portable).
- [ ] Vérifier une installation propre et la mise à jour d'une installation précédente.
- [ ] Vérifier que le plugin fonctionne après installation manuelle depuis le fichier joint.
- [ ] Inspecter les deux artefacts : aucune donnée utilisateur, secret, jeton ou élément personnel.
- [ ] Calculer les SHA-256 et les conserver dans le rapport de publication.
- [ ] Vérifier la recherche de mise à jour sur **Fablitox/SoundBoardMaker** sans jeton pour les releases publiques.
- [ ] Garder l'avertissement CPU dans les notes de release.
- [ ] Conserver le dépôt source privé. Ne pas inclure de sources, tests ou fichiers internes.
- [ ] Publier une release **stable** seulement après validation : la vitrine ignore les brouillons et préreleases.
- [ ] Ouvrir https://sbmaker.fablitox.fr/ et vérifier les deux téléchargements proposés à partir de la vraie release.
- [ ] Vérifier les liens de documentation, les captures et l'affichage FR/EN.

**Note :** GitHub affiche automatiquement des archives de code source pour les tags. Ce ne sont pas des ZIP portables fournis par le projet et le dépôt public ne doit jamais recevoir le code source privé.
