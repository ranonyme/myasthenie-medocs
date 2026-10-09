# Myasthénie – Médicaments à utiliser avec précaution

Application web personnelle et gratuite pour consulter, sur téléphone ou ordinateur, la liste des médicaments « à utiliser avec précaution » en cas de myasthénie. Elle permet aussi de photographier une boîte ou une notice, de reconnaître le texte (OCR) et de le comparer à la liste.

> ⚠️ **Projet personnel, non officiel, fourni sans aucune garantie. Ce n'est PAS un avis médical. Ne modifiez jamais un traitement sans l'avis de votre médecin.**

**Adresse de l'application :** https://ranonyme.github.io/myasthenie-medocs/

---

## ⚠️ Avertissements importants (à lire)

1. **Ce projet est indépendant.** Il n'est ni créé, ni validé, ni approuvé, ni soutenu par l'association AMIS, l'AFM, le Vidal, le ministère de la Santé, l'ANSM ou tout autre organisme. Leurs noms ne sont cités que pour indiquer l'origine des informations.
2. **Il ne remplace pas un avis médical.** Seul un médecin ou un pharmacien peut juger de l'intérêt d'un médicament et évaluer le rapport bénéfices/risques pour vous. Demandez toujours conseil avant de prendre, d'arrêter ou de remplacer un médicament.
3. **« À utiliser avec précaution » ne veut pas dire « interdit ».** Certains médicaments de la liste sont indispensables dans certaines situations. N'arrêtez jamais un traitement de votre propre initiative.
4. **La liste n'est pas exhaustive.** La liste source précise elle-même qu'elle ne prétend pas être exhaustive. Un médicament absent de la liste n'est pas forcément sans danger.
5. **Une absence de correspondance ne prouve rien.** Si l'application ne trouve « rien », cela peut venir de l'OCR (photo floue, reflets, petits caractères, nom abrégé), de la base de données (médicament ou nom commercial absent) ou de la liste elle-même.
6. **L'OCR et la recherche peuvent se tromper.** La reconnaissance de texte peut déformer ou manquer des mots. La recherche tolère volontairement les fautes de frappe et peut afficher des résultats approchés qui ne correspondent pas au médicament recherché. **Vérifiez toujours visuellement le résultat.**
7. **Les noms commerciaux sont une compilation personnelle.** Le fichier `brands.js` (noms de spécialités associés aux molécules) n'est pas une source officielle. Seuls quelques noms ont été recoupés avec les sources publiques (ANSM, HAS, Vidal). Les autres sont marqués « **à vérifier** » et peuvent comporter des erreurs, des oublis, ou des produits retirés du marché. Cette compilation a été établie avec l'aide d'un assistant d'IA : elle peut contenir des erreurs.
8. **Les mots-clés ajoutés ne viennent pas de la liste.** Certaines entrées de la liste désignent des classes ou des produits (« Corticoïdes », « Vaccins vivants », « Schweppes & Tonics », etc.). Des mots-clés ont été ajoutés pour les reconnaître (ex. noms de corticoïdes). Ils ne figurent pas dans le document source.
9. **Les médicaments génériques** portent généralement le nom de leur molécule suivi de celui du laboratoire (ex. « ZOPICLONE BIOGARAN »). L'application les détecte par le nom de la molécule.
10. **En cas d'urgence** (difficulté à respirer, à avaler, à parler, faiblesse brutale…), appelez le **15** (SAMU) ou le **112**, et présentez la liste officielle aux soignants.
11. **Ce n'est pas un dispositif médical.** L'application n'est pas destinée à poser un diagnostic, à prévenir ou à traiter une maladie.
12. **Aucune garantie, aucune responsabilité.** L'application est fournie « telle quelle », sans garantie d'aucune sorte (exactitude, exhaustivité, actualité, disponibilité, adéquation à un usage particulier). L'auteur ne saurait être tenu responsable des conséquences de son utilisation, dans la mesure permise par la loi. Vous l'utilisez à vos propres risques.
13. **Mises à jour.** La liste source évolue. La version intégrée ici peut être **périmée** : comparez-la avec la dernière version officielle.

---

## 📄 Origine des informations

| Élément | Détail |
|---|---|
| Source de la liste | Document « INFORMATION – Médicaments à utiliser avec précaution par les myasthéniques », publié par l'**Association des Myasthéniques Isolés et Solidaires (AMIS)**, membre d'Euro Myasthenia Gravis Association |
| Document utilisé | **Notice I** : classement par spécialités médicales et types de médicaments (DCI) |
| Version chargée dans l'application | **3.0.0.b – 05/2026** |
| Page de la liste officielle | https://myasthenie.eu/appli/listes_medicament/listes.html |
| Dernière version officielle | https://www.myasthenie.com/medicaments |
| Contact de l'association | association.amis@myasthenie.com |
| Sources citées par l'AMIS | Vidal, carte de soins et d'urgence du ministère de la Santé (avec le concours de l'AFM) |

La liste a été reprise de la **page 2** du document (« Liste alphabétique par famille thérapeutique »), en respectant l'orthographe du PDF (y compris ses éventuelles particularités).

**Les droits sur la liste appartiennent à l'AMIS.** Ils ne sont pas couverts par la licence de ce dépôt (voir plus bas). La liste est reprise [avec / sans] l'accord de l'association : *[à compléter après réponse de l'AMIS]*.

**Pour l'information la plus fiable et la plus récente, consultez toujours la liste officielle de l'AMIS.**

Autres sources utilisées pour les noms commerciaux : base de données publique des médicaments (ANSM / ministère de la Santé), Vidal, dossiers de l'ANSM et de la HAS.


---

## ✨ Fonctions

- Liste consultable par famille thérapeutique, **hors ligne**.
- Recherche d'une molécule **ou d'un nom commercial**, tolérante aux fautes de frappe.
- Scanner : photo (appareil photo en plein écran) → OCR → comparaison avec la liste.
- Mise à jour automatique de l'application quand une nouvelle version est publiée.
- Option (désactivée par défaut) d'envoi du texte reconnu vers un serveur d'analyse.

---

## 📱 Installer l'application

Ouvrez l'adresse ci-dessus **une première fois avec Internet** (idéalement en Wi-Fi), puis lancez un scan photo une fois pour que le moteur OCR soit mis en mémoire. Ensuite, l'application fonctionne hors ligne.

### iPhone / iPad (Safari uniquement)
1. Ouvrez l'adresse dans **Safari**.
2. Touchez le bouton **Partager** (carré avec une flèche vers le haut).
3. Choisissez **« Sur l'écran d'accueil »**, puis **Ajouter**.
4. Lancez l'application depuis son icône sur l'écran d'accueil.

### Android (Chrome)
1. Ouvrez l'adresse dans **Chrome**.
2. Touchez le menu **⋮**, puis **« Installer l'application »** (ou **« Ajouter à l'écran d'accueil »**).
3. Confirmez. L'icône apparaît sur l'écran d'accueil.

### Ordinateur (Windows, macOS, Linux)
- Ouvrez simplement l'adresse dans un navigateur récent (Chrome, Edge, Firefox, Safari).
- Option : dans Chrome ou Edge, cliquez sur l'icône **« Installer »** de la barre d'adresse pour l'avoir comme une application.
- La caméra n'est pas nécessaire : vous pouvez coller du texte ou choisir une photo existante.

### Autorisations
Le scanner demande l'accès à l'**appareil photo**. Si vous refusez, utilisez le bouton « Choisir / prendre une photo (fichier) ».

---

## 🔒 Confidentialité

- Par défaut, **tout fonctionne sur votre appareil** : les photos et le texte reconnu ne sont pas envoyés ailleurs, et l'application n'utilise ni compte, ni cookie de suivi, ni statistiques.
- Au premier scan, le moteur OCR (Tesseract.js) et ses données linguistiques sont téléchargés depuis le réseau de diffusion **jsDelivr** (service tiers) : celui-ci peut voir votre adresse IP. Ces fichiers sont ensuite conservés dans le navigateur.
- L'application est hébergée par **GitHub Pages** : GitHub peut enregistrer des journaux de connexion selon sa propre politique.
- L'option « Analyse approfondie par serveur » est **désactivée** et sans serveur configuré. Si vous (ou un tiers) la configurez, le texte reconnu sera envoyé à ce serveur : un texte issu d'une notice ou d'une ordonnance peut contenir des **données de santé**. Ne l'activez qu'en connaissance de cause (RGPD).

---

## 🔄 Mises à jour

L'application vérifie automatiquement, quand vous avez du réseau, si une nouvelle version existe et se recharge seule. Le numéro de version de la liste est affiché en haut de l'écran. En cas de doute, fermez complètement l'application puis rouvrez-la avec Internet.

---

## 🛠️ Pour les développeurs

Application web statique (HTML / CSS / JavaScript), sans base de données ni dépendance à installer.

| Fichier | Rôle |
|---|---|
| `index.html` | Interface, recherche, scanner OCR |
| `data.js` | Liste des molécules (source : PDF AMIS) |
| `brands.js` | Noms commerciaux (compilation personnelle, champ `v` : 1 = confirmé, 0 = à vérifier) |
| `sw.js` | Service worker (hors ligne et mise à jour automatique, à incrémenter à chaque déploiement) |
| `manifest.webmanifest`, `icon.svg` | Installation sur l'écran d'accueil |

Publication : GitHub Pages (Settings → Pages → branche `main`, dossier `/ (root)`).

Corrections et suggestions : ouvrez une « issue ». Les contributions concernant des données médicales doivent citer une source officielle.

---

## 📜 Licence

- **Code source** (`index.html`, `sw.js`, etc.) : licence **MIT** (voir le fichier `LICENSE`).
- **Contenu de la liste** (`data.js`) : propriété de l'AMIS, non couvert par la licence MIT. Voir « Origine des informations ».
- **Compilation des noms commerciaux** (`brands.js`) : fournie sans garantie, à titre indicatif.
- Les marques citées appartiennent à leurs titulaires respectifs.

Projet personnel, sans but lucratif.
