# Esempio Template EmailJS per Due Destinatari

## Configurazione Template EmailJS

Quando crei il template su EmailJS, usa questa configurazione:

### Subject (Oggetto):
```
Nuovo messaggio da {{from_name}} - Ville Pisciotta
```

### Content (Contenuto):
```
Hai ricevuto un nuovo messaggio dal form di contatto del sito www.villepisciotta.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nome: {{from_name}}
Email: {{from_email}}

Messaggio:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Per rispondere, rispondi direttamente a questa email o contatta:
{{from_email}}

---
Messaggio inviato automaticamente da www.villepisciotta.com
```

### To Email (Destinatario):
Per inviare a DUE caselle email, inserisci:
```
info@villepisciotta.com,seconda@email.com
```
*(separate da virgola, senza spazi)*

Oppure, se il tuo provider email supporta CC:
- **To**: `info@villepisciotta.com`
- **CC**: `seconda@email.com`

## Variabili Disponibili nel Template

- `{{from_name}}` - Nome del mittente
- `{{from_email}}` - Email del mittente
- `{{message}}` - Messaggio inviato

## Note Importanti

1. **Sicurezza**: Le chiavi API sono pubbliche ma sicure (EmailJS gestisce la sicurezza)
2. **Limiti**: Piano gratuito = 200 email/mese
3. **Spam**: EmailJS include protezione anti-spam
4. **Reply**: Puoi rispondere direttamente alle email ricevute

## Test

Dopo la configurazione:
1. Compila il form sul sito
2. Controlla entrambe le caselle email
3. Verifica che l'email arrivi correttamente

