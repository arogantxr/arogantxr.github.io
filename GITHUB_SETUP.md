# GitHub Setup - Anleitung für PhysioMarlena-Website

## Schritt 1: Repository auf GitHub erstellen

1. Gehen Sie auf [GitHub.com](https://github.com)
2. Klicken Sie auf das "+" Icon oben rechts
3. Wählen Sie "New repository"
4. Repository-Name: `PhysioMarlena-Website`
5. Beschreibung: "Mobile Physiotherapie Website für Marlena Gaertner"
6. Wählen Sie "Public" (oder "Private" wenn nur für Sie)
7. Klicken Sie "Create repository"

## Schritt 2: Git initialisieren und hochladen

Öffnen Sie die **Command Prompt / PowerShell** im Projektverzeichnis:

```bash
# Navigiere zum Projekt-Verzeichnis
cd C:\Users\PaulPlatzer\PhpstormProjects\PhysioMarlena-Website

# Git Repository initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: PhysioMarlena Website"

# Verbindung zu GitHub herstellen (ersetze USERNAME)
git remote add origin https://github.com/USERNAME/PhysioMarlena-Website.git

# Branch umbenennen (falls nötig)
git branch -M main

# Hochladen zu GitHub
git push -u origin main
```

## Schritt 3: Authentifizierung (bei Bedarf)

Falls Git nach Authentifizierung fragt:

### Option A: Personal Access Token (empfohlen)
1. GitHub → Settings → Developer settings → Personal access tokens
2. Klicken Sie "Generate new token"
3. Geben Sie einen Namen ein (z.B. "PhysioMarlena")
4. Wählen Sie Scopes: `repo` (vollständiger Zugriff auf Repositories)
5. Klicken Sie "Generate token"
6. Kopieren Sie das Token
7. Bei der Git-Aufforderung: Username = Ihr GitHub-Username, Password = das Token

### Option B: SSH Key (fortgeschritten)
Siehe: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## Schritt 4: Zukünftige Updates

Nach Änderungen:

```bash
git add .
git commit -m "Beschreibung der Änderungen"
git push
```

## ✅ Fertig!

Ihre Website ist jetzt auf GitHub! Sie können sie hier finden:
```
https://github.com/USERNAME/PhysioMarlena-Website
```

## 🚀 Bonus: Website deployen (kostenlos mit GitHub Pages)

1. Gehen Sie zu Repository → Settings → Pages
2. Unter "Source" wählen Sie "main" branch
3. Klicken Sie "Save"
4. Ihre Website ist jetzt live unter: `https://USERNAME.github.io/PhysioMarlena-Website`

---

**Hinweis:** Ersetzen Sie "USERNAME" durch Ihren tatsächlichen GitHub-Benutzernamen!
