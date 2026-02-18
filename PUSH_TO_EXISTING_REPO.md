# Zu bestehendem GitHub Repo pushen

Folgen Sie diesen Schritten, um das PhysioMarlena-Projekt zu Ihrem bestehenden Repository zu pushen:

## Schritt 1: Git initialisieren und Dateien hinzufügen

Öffnen Sie PowerShell/Command Prompt im Projektverzeichnis:

```bash
# Navigiere zum Projekt-Verzeichnis
cd C:\Users\PaulPlatzer\PhpstormProjects\PhysioMarlena-Website

# Git Repository initialisieren (falls noch nicht geschehen)
git init

# Alle Dateien zum Staging-Bereich hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: PhysioMarlena Website mit Bootstrap"
```

## Schritt 2: Remote Repository hinzufügen

Ersetzen Sie `USERNAME` und `REPO_NAME` mit Ihren Daten:

```bash
# Remote Origin hinzufügen
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Branch umbenennen auf "main" (falls nötig)
git branch -M main

# Zum Remote Repository pushen
git push -u origin main
```

## Schritt 3: Falls das Repo bereits Inhalte hat

Falls das Repository bereits Inhalte hat, müssen Sie eventuell pullen bevor Sie pushen:

```bash
# Zuerst pullen
git pull origin main

# Dann pushen
git push origin main
```

## ⚠️ Falls Konflikte entstehen

Falls es Merge-Konflikte gibt:

```bash
# Konflikte beheben, dann:
git add .
git commit -m "Merge conflicts resolved"
git push origin main
```

---

**Hinweis:** Geben Sie mir einfach Bescheid, wenn Sie:
- Den Benutzernamen (USERNAME)
- Den Repository-Namen (REPO_NAME)
- Die GitHub-URL

...haben, dann kann ich die exakten Befehle für Sie anpassen!
